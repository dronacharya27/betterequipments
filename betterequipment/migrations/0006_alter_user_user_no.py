# Generated by Django 4.2.3 on 2023-08-08 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('betterequipment', '0005_remove_user_order_date_remove_user_user_company_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_no',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
