# Generated by Django 4.2.3 on 2023-08-09 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('betterequipment', '0007_alter_user_items_json'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='product_img',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
