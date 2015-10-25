# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petitions', '0009_auto_20151023_1132'),
    ]

    operations = [
        migrations.RenameField(
            model_name='petitionstatuschange',
            old_name='new_status',
            new_name='status',
        ),
    ]
