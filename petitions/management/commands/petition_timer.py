from django.core.management.base import BaseCommand
from django.db.models import F
from petitions.models import Petition, PetitionStatusChange
from petitions.workflow import check_conditions


class Command(BaseCommand):
    help = 'Sets proper status on petitions that hit end of voting'

    def handle(self, *args, **options):
        # SELECT "petitions_petition"."id", "petitions_petition"."title", (
        #     SELECT petitions_petitionstatuschange.status
        #     FROM petitions_petitionstatuschange
        #     WHERE petitions_petition.id=petitions_petitionstatuschange.petition_id
        #     ORDER BY petitions_petitionstatuschange.id
        #     DESC LIMIT 1
        #     ) as status
        # FROM petitions_petition
        # WHERE status == 'active'

        last_status = str(PetitionStatusChange.objects.
                          values('status').
                          extra(where=['petition_id = {}.id'.
                                format(Petition._meta.db_table)]).
                          order_by('-id')[:1].query)
        active_petitions = Petition.objects.\
            annotate(parent_petition_id=F('id')).\
            extra(select={'status': last_status},
                  where=['status = "{}"'.format(Petition.ACTIVE)])
        for petition in active_petitions:
            check_conditions(petition)
