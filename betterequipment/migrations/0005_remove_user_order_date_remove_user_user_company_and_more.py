# Generated by Django 4.2.3 on 2023-08-08 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('betterequipment', '0004_alter_products_product_price'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='order_date',
        ),
        migrations.RemoveField(
            model_name='user',
            name='user_company',
        ),
        migrations.AddField(
            model_name='user',
            name='items_json',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='user_add',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='product_price',
            field=models.IntegerField(null=True),
        ),
    ]
