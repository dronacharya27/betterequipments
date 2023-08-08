document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("CustomCursor");

  const movecursor = (e, btn, logo, nav, card, product) => {
    const x = e.clientX - cursor.offsetWidth / 2,
      y = e.clientY - cursor.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) 
          scale(${btn ? 3 : 1}) 
          scale(${logo ? 4 : 1})
          scale(${nav ? 2 : 1})
          scale(${card ? 5 : 1})
          scale(${product ? 4 : 1})`,
    };

    cursor.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  window.onmousemove = (e) => {
    const button = e.target.closest(".btn"),
      btn = button !== null;

    const logoimage = e.target.closest("#logoimg"),
      logo = logoimage != null;

    const productimage = e.target.closest(".product_img"),
      product = productimage != null;

    const navitem = e.target.closest("#redirect"),
      nav = navitem != null;

    const testicard = e.target.closest(".testimonial_card"),
      card = testicard != null;

    movecursor(e, btn, logo, nav, card, product);
  };
});
