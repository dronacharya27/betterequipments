

function explore_func(){
  
  const expbtn= document.querySelector("#cta")
  console.log(expbtn)
  
  expbtn.classList.add(".switches-container","input:nth-of-type(2):checked","~",".switch-wrapper")
  product_switch() 
    
  
} 
function product_switch() {
  let web_page = document.getElementById("website_page");
  let pro_page = document.getElementById("product_page");
  let cart_btn = document.getElementById("cart_btn");
  let quote_btn = document.getElementById("get_quote_btn");
  //
  localStorage.getItem('cart')
  let id = Object.keys(cart)
  console.log(cart)
  console.log(id)
  i=0
  if ($.isEmptyObject(cart)){
    console.log("EMPTY")
    document.getElementById('cart_main').style.display="none"

  }
  else{
    document.getElementById('cart_main').style.display="block"
  }
 for (items in cart){
  let key = id[i];
  console.log(key)
  i=i+1;
  let cart_add = document.getElementById('div'+key);
  let cart_remove = document.getElementById('div2'+key);
  cart_add.style.display="none"
  cart_remove.style.display="block"
 }

//
  web_page.style.display = "none";
  pro_page.style.display = "block";
  quote_btn.style.display = "block";
  cart_btn.style.display = "none";

}

function website_switch() {
  let web_page = document.getElementById("website_page");
  let pro_page = document.getElementById("product_page");
  let cart_btn = document.getElementById("cart_btn");
  let quote_btn = document.getElementById("get_quote_btn");
  localStorage.getItem('cart')
  if ($.isEmptyObject(cart)){
    console.log("EMPTY")
    // document.getElementById('nav_item').in='<button type="button" class="qute_btn btn" id="get_quote_btn">Get a quote <div id="count"> </div></button>'
    document.getElementById('cart_main').style.display="none"

  }
  else{
    document.getElementById('cart_main').style.display="block"
  }

  pro_page.style.display = "none";
  web_page.style.display = "block";
  quote_btn.style.display = "block";
  cart_btn.style.display = "none";
}

function clearcart(){
  
  localStorage.getItem("cart")
  let id = Object.keys(cart)
  let i=0
  console.log(cart)
  for (items in cart){
    let key = id[i];
    console.log(cart[key])
    delete cart[key]
    i=i+1;
    let cart_add = document.getElementById('div'+key);
    let cart_remove = document.getElementById('div2'+key);
    cart_add.style.display="block"
    cart_remove.style.display="none"
    
   }
   console.log(cart)
   for (var item in cart){
    sum = sum + cart[item][0];
 
  }
  localStorage.setItem('cart', JSON.stringify(cart));
   
 
  
document.getElementById('count').innerHTML='<span id="cart_main" style="display: flex;10px;position: absolute;right: 55px;background-color: red;border-radius: 100%;height: 30px;width: 30px;align-items: center;justify-content: center;">'+sum+'</span>';
  
    
  
  
}
