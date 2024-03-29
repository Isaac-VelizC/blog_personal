# Generated by Django 5.0.2 on 2024-02-19 14:51

import apps.blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_post_thumbnail'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='tiem_read',
            new_name='time_read',
        ),
        migrations.AlterField(
            model_name='post',
            name='thumbnail',
            field=models.ImageField(max_length=500, upload_to=apps.blog.models.blog_thumbnail_directory),
        ),
    ]
