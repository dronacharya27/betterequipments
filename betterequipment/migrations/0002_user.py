# Generated by Django 4.2.3 on 2023-07-28 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('betterequipment', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('user_name', models.CharField(max_length=50, null=True)),
                ('user_no', models.IntegerField(verbose_name='Phone')),
                ('user_mail', models.EmailField(max_length=254)),
                ('order_date', models.DateTimeField(verbose_name='date')),
                ('user_company', models.CharField(max_length=200, null=True)),
            ],
        ),
    ]
