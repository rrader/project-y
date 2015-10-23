# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('petitions', '0010_auto_20151023_1134'),
    ]

    operations = [
        migrations.AddField(
            model_name='petitionsign',
            name='timestamp',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2015, 10, 23, 15, 51, 48, 611715, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='petitionstatuschange',
            name='comment',
            field=models.TextField(blank=True, null=True),
        ),
    ]
