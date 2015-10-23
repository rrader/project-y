"""
Petition workflow
"""
import logging
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.timezone import now
from petitions.models import Petition, PetitionStatusChange, PetitionSign
from rest_framework import status
from rest_framework.decorators import detail_route
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response


logger = logging.getLogger(__name__)


@receiver(post_save, sender=Petition)
def petition_saved(sender, instance, created, **kwargs):
    """
    Set initial state via signal about creating the petition object
    """
    if created:
        PetitionStatusChange.objects.create(
            status=Petition.CREATED,
            petition=instance
        )


class PetitionWorkflowMixin:
    @detail_route()
    def to_moderation(self, request, pk=None):
        instance = self.get_object()
        if instance.current_status().status in [Petition.CREATED]:
            PetitionStatusChange.objects.create(
                status=Petition.MODERATION,
                petition=instance
            )
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @detail_route(permission_classes=[IsAdminUser])
    def to_active(self, request, pk=None):
        instance = self.get_object()
        if instance.current_status().status in [Petition.MODERATION]:
            PetitionStatusChange.objects.create(
                status=Petition.ACTIVE,
                petition=instance
            )
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @detail_route()
    def to_inactive(self, request, pk=None):
        # only by timer, user can't deactivate the petition
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @detail_route()
    def to_execution(self, request, pk=None):
        # only by timer, user can't deactivate the petition
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @detail_route(permission_classes=[IsAdminUser])
    def to_deleted(self, request, pk=None):
        instance = self.get_object()
        PetitionStatusChange.objects.create(
            status=Petition.DELETED,
            petition=instance
        )
        return Response(status=status.HTTP_200_OK)


def check_conditions(petition):
    if petition.current_status().status != Petition.ACTIVE:
        return

    if petition.signs.count() >= settings.SIGNS_GOAL:
        last_sign = PetitionSign.objects.filter(petition=petition). \
                        order_by('id')[settings.SIGNS_GOAL - 1:settings.SIGNS_GOAL][0]
        reached_goal_at = last_sign.timestamp
        if reached_goal_at <= petition.get_deadline():
            logger.info("Petition {} reached goal in time! move to EXECUTION".format(petition.id))
            PetitionStatusChange.objects.create(
                status=Petition.EXECUTION,
                petition=petition
            )

    elif now() > petition.get_deadline():
        logger.info("Unfortunately, petition {} didn't reach goal in time, "
                    "mark as INACTIVE".format(petition.id))
        PetitionStatusChange.objects.create(
            status=Petition.INACTIVE,
            petition=petition
        )
