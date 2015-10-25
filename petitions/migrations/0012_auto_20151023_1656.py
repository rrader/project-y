# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petitions', '0011_auto_20151023_1551'),
    ]

    operations = [
        migrations.AlterField(
            model_name='petition',
            name='deadline',
            field=models.DateTimeField(null=True),
        ),
    ]
