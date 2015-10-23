# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petitions', '0008_petition_tags'),
    ]

    operations = [
        migrations.CreateModel(
            name='PetitionStatusChange',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('new_status', models.CharField(max_length=16, choices=[('created', 'created'), ('active', 'active'), ('inactive', 'inactive'), ('deleted', 'deleted'), ('moderation', 'moderation'), ('execution', 'execution')])),
                ('comment', models.TextField(null=True)),
                ('timestamp', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='petition',
            name='status',
        ),
        migrations.AddField(
            model_name='petitionstatuschange',
            name='petition',
            field=models.ForeignKey(to='petitions.Petition', related_name='status_log'),
        ),
    ]
