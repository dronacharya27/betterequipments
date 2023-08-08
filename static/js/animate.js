document.addEventListener("DOMContentLoaded", function () {
  //Defining variables for all the DOM elements

  const heroImage = document.getElementById("herophoto");
  const testimonialSection = document.querySelector(".testimonial_section");
  const testimonialCards = document.querySelectorAll(".testimonial_card");
  const testimonialheading = document.querySelector(".heading_div");
  const productSection = document.querySelector(".product_list_section");
  const chattitles = document.querySelectorAll(".chat_title");
  const chatboxes = document.querySelectorAll(".chat_box");
  const productheading = document.querySelector("#product_heading_div");
  const products = document.querySelectorAll(".product_card");

  // Setting initial values of all elements
  // Everything opacity is 0
  // Chatboxes scale is 0
  gsap.set(
    [
      heroImage,
      testimonialCards,
      chattitles,
      chatboxes,
      testimonialheading,
      productheading,
      products,
    ],
    { opacity: 0 }
  );

  gsap.set(chatboxes, { scale: 0 });

  //Initial values decleration done

  //  Hero Section appear animation start
  const herosection = gsap.timeline();
  herosection.to(heroImage, { opacity: 1, y: -20, duration: 2 });
  //  Hero Section appear animation end

  //  Testiomonial Section Heading appear animation start
  ScrollTrigger.create({
    trigger: testimonialSection,
    start: "top 90%",
    onEnter: () => {
      const testimonialheadappear = gsap.timeline();
      testimonialheadappear.to(testimonialheading, { opacity: 1, duration: 1 });
    },
  });
  //  Testiomonial Section Heading appear animation end

  //  Testiomonial Section Cards appear animation start
  ScrollTrigger.create({
    trigger: testimonialSection,
    start: "top 70%",
    onEnter: () => {
      const tl1 = gsap.timeline();
      testimonialCards.forEach((card, index) => {
        tl1.to(card, { opacity: 1, duration: 0.5, delay: index * 0.1 });

        const chatTitle = chattitles[index * 3];
        const chatBox1 = chatboxes[index * 3];
        const chatBox2 = chatboxes[index * 3 + 1];
        const chatBox3 = chatboxes[index * 3 + 2];

        tl1.to([chatTitle, chatBox1], {
          opacity: 1,
          scale: 1,
          transformOrigin: "left",
          duration: 0.4,
        });
        tl1.to([chatTitle, chatBox2], {
          opacity: 1,
          scale: 1,
          transformOrigin: "right",
          duration: 0.4,
        });
        tl1.to([chatTitle, chatBox3], {
          opacity: 1,
          scale: 1,
          transformOrigin: "left",
          duration: 0.4,
        });
      });
    },
  });
  //  Testiomonial Section Cards appear animation end

  // Product Section Heading appear animation start
  ScrollTrigger.create({
    trigger: productSection,
    start: "top 90%",
    onEnter: () => {
      const productheadingappear = gsap.timeline();
      productheadingappear.to(productheading, { opacity: 1, duration: 1 });
    },
  });
  //  Product Section Heading appear animation end

  // Products appear animation start
  ScrollTrigger.create({
    trigger: productSection,
    start: "top 70%",
    onEnter: () => {
      const productappear = gsap.timeline();
      products.forEach((card, index) => {
        productappear.to(card, {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
        });
      });
    },
  });
  //  Product appear animation end
});
