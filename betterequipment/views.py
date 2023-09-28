from django.conf import settings
from django.http import request,response,HttpRequest
from django.shortcuts import render,redirect
from .models import products,user
from math import ceil
import json
import telegram
from django.core.serializers.json import DjangoJSONEncoder
from django.core.serializers import serialize
from ipware.ip import get_client_ip
from django.conf import settings
from asgiref.sync import sync_to_async
import tracemalloc
tracemalloc.start()
BOT_CHAT_ID='1119786778'
BOT_TOKEN='6686135672:AAHItUhcnEXnzDSLMbSz1FBuEUoUdyHqDjs' 

    
def index(request):
    product = products.objects.all()
    print(product)
    n = len(product)
    nslide= n//4 +ceil((n/4)-(n//4))
    params= {'product' : product,'no':nslide,'range': range(nslide)}
    return render(request,'index.html',params)

def checkout(request):
    return render(request,'checkout2.html')

async def order(request):
    if request.method=='POST':
        item_json = request.POST.get('item_json','')
        name = request.POST.get('name','')
        phone = request.POST.get('phone','')
        email = request.POST.get('email','')
        address = request.POST.get('address','')
        
        product_details = json.loads(item_json)
        product_names = [product_details[key][1] for key in product_details]
        product_amount = [product_details[key][0] for key in product_details]
        str1 = "\n"
        str1=str1.join(product_names)
        
        order = user( items_json= product_names,user_name=name,user_no=phone,user_mail=email,user_add=address)
        order.save()
        thank = True
        
        bot = telegram.Bot(token=BOT_TOKEN)
        await bot.send_message(chat_id=BOT_CHAT_ID, text='Name:'+name+'\nPhone:'+phone+'\nEmail:'+email+'\nAddress:'+address+'\nOrders:'+str1)
        return render(request,'checkout2.html',{'thank':thank})


    
def contact(request):
    return render(request,'contact.html')