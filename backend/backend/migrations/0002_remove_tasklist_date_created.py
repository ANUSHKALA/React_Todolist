# Generated by Django 4.0.1 on 2022-02-05 18:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tasklist',
            name='date_created',
        ),
    ]
