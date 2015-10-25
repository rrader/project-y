from django.contrib import admin
from petitions.models import Petition, PetitionStatusChange, Media, PetitionSign, Tag


class PetitionStatusChangeInline(admin.TabularInline):
    model = PetitionStatusChange


class MediaInline(admin.TabularInline):
    model = Media


class PetitionSignInline(admin.TabularInline):
    model = PetitionSign


class PetitionAdmin(admin.ModelAdmin):
    inlines = [PetitionStatusChangeInline, MediaInline, PetitionSignInline]


admin.site.register(Petition, PetitionAdmin)
admin.site.register(Tag)
