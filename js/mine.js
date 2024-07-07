const items = document.querySelectorAll("button");
const products = document.querySelectorAll(".tab-pane p div");

items.forEach((item) => {
  // Active
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    // Filter
    const valueAttr = item.getAttribute("data-filter");
    products.forEach((item) => {
      item.style.display = "none";
      if (
        item.getAttribute("data-filter").toLowerCase() ==
          valueAttr.toLowerCase() ||
        valueAttr == "all"
      ) {
        item.style.display = "flex";
      }
    });
  });
});

// ==============================

const faqItemHead = document.querySelectorAll(".faq-item-head");

faqItemHead.forEach((head, index) => {
  head.addEventListener("click", () => {
    let icon = head.querySelector(".faq-item-icon").firstElementChild;
    if (icon.className == "fa fa-chevron-down") {
      head.nextElementSibling.classList.add("show-para");
      icon.className = "fa fa-chevron-up";
    } else if (icon.className == "fa fa-chevron-up") {
      head.nextElementSibling.classList.remove("show-para");
      icon.className = "fa fa-chevron-down";
    }
  });
});
