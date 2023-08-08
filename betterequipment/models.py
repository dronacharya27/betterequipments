from django.db import models

class products(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=50,null=True)
    product_img = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=None,null=True)
    product_des = models.CharField( max_length=200,null=True)
    product_price = models.IntegerField(null=True)

    def __str__(self):
        return self.product_name
    
class user(models.Model):
    user_id = models.AutoField(primary_key=True)
    items_json =models.CharField(max_length=5000,null=True)
    user_name =models.CharField( max_length=50,null=True)
    user_no = models.CharField(max_length=50,null=True)
    user_mail =models.EmailField(max_length=254)
    user_add =models.CharField( max_length=500,null=True)
   

    

    def __str__(self):
        return self.user_name

    
