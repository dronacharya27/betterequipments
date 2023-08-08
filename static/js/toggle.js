function product_switch() {
  let web_page = document.getElementById("website_page");
  let pro_page = document.getElementById("product_page");
  let cart_btn = document.getElementById("cart_btn");
  let quote_btn = document.getElementById("get_quote_btn");
  
 


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

  pro_page.style.display = "none";
  web_page.style.display = "block";
  quote_btn.style.display = "block";
  cart_btn.style.display = "none";
}
