# Generated by Django 4.2.3 on 2023-08-05 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('betterequipment', '0002_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='product_price',
            field=models.IntegerField(max_length=10, null=True),
        ),
    ]