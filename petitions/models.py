from django.db import models
from django.contrib.auth.models import User


class Tag(models.Model):
    name = models.CharField(max_length=15, primary_key=True)

    def __str__(self):
        return self.name


class Petition(models.Model):

    CREATED = 'created'
    ACTIVE = 'active'
    INACTIVE = 'inactive'
    DELETED = 'deleted'
    MODERATION = 'moderation'
    EXECUTION = 'execution'

    STATUS_CHOICES = (
        (CREATED, CREATED),
        (ACTIVE, ACTIVE),
        (INACTIVE, INACTIVE),
        (DELETED, DELETED),
        (MODERATION, MODERATION),
        (EXECUTION, EXECUTION),
    )

    INITIAL_STATE = CREATED

    title = models.CharField(max_length=100)
    text = models.TextField()
    author = models.ForeignKey(User, related_name='petitions')
    deadline = models.DateTimeField()
    responsible = models.CharField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return str(self.pk)

    def current_status(self):
        return self.status_log.order_by('id').last()


class PetitionStatusChange(models.Model):
    status = models.CharField(max_length=16, choices=Petition.STATUS_CHOICES, null=False)
    comment = models.TextField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now=True)
    petition = models.ForeignKey(Petition, related_name='status_log')


class Media(models.Model):
    MEDIA_TYPE_CHOICES = (
        ('image', 'Image'),
        ('video', 'Video'),
    )

    mediaUrl = models.URLField()
    type = models.CharField(choices=MEDIA_TYPE_CHOICES, max_length=10)
    petition = models.ForeignKey(Petition, related_name='media')


class PetitionSign(models.Model):
    class Meta:
        unique_together=('author', 'petition')
    author = models.ForeignKey(User, related_name='signed')
    petition = models.ForeignKey(Petition, related_name='signs')
    comment = models.TextField(max_length=200, null=True, blank=True)
    anonymous = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now=True)
