document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    new Glide('.glide', {
        type: 'carousel',
        focusAt: 'center',
        perView: 2,
        breakpoints: {
            940: {
                perView: 2
            },
            640: {
                perView: 1
            }
        }
    }).mount();

    const icon = document.querySelector(".menu-icon");

  let isOpen = false;
  let timeout;

  icon.addEventListener("click", () => {
    const menu = document.getElementById("header-list");
    if (!isOpen) {
      menu.classList.add("ascending");
      menu.classList.remove("descending");
      menu.style.display = "flex";
      isOpen = true;
    } else {
      menu.classList.add("descending");
      menu.classList.remove("ascending");
      
      if (!timeout) {
        timeout = setTimeout(() => {
          menu.style.display = "none";
          timeout = undefined;
        }, 180);
      }

      isOpen = false;
    }
  });
});