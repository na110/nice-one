const searchNav = document.getElementById("search-nav");
const mobileMenu = document.getElementById("mobile-menu");
const btnCloseMobileMenu = document.getElementById("btn-close-mobile-menu");
const btnOpenMobileMenu = document.getElementById("btn-open-mobile-menu");
const searchBar = document.getElementById("search-bar");
const btnOpenSearchBar = document.getElementById("btn-open-search-bar");
const btnCloseSearchBar = document.getElementById("btn-close-search-bar");
const shoppingList = document.getElementById("shoping-list");
const btnOpenShoppingList = document.getElementById("btn-open-shoping-list");
const btnCloseShoppingList = document.querySelectorAll(".btn-close-shoping-list");
const btnGoUp = document.getElementById("go-up");

const productsShow = document.getElementById("products-show");

console.log(productsShow);
// SETTINGS SWIPER SLIDER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    showsPagination: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        200: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    }
});

// SHOW NAV SEARCH ON SCROLL
window.addEventListener("scroll", function () {
    let x = this.window.scrollY;
    this.scrollY > 80 ? searchNav.style.setProperty("display", "block") : searchNav.style.setProperty("display", "none");
})

// OPEN MOBILE MENU
btnOpenMobileMenu.addEventListener("click", function () {
    mobileMenu.style.setProperty("right", "0")
})

// CLOSE MOBILE MENU
btnCloseMobileMenu.addEventListener("click", function () {
    mobileMenu.style.setProperty("right", "-200%")
})

// OPEN SEARCH BAR
btnOpenSearchBar.addEventListener("click", function () {
    searchBar.style.setProperty("display", "block")
})

// CLOSE SEARCH BAR
btnCloseSearchBar.addEventListener("click", function () {
    searchBar.style.setProperty("display", "none")
})

// OPEN SHOPPING LIST
btnOpenShoppingList.addEventListener("click", function () {
    shoppingList.style.setProperty("left", "0")
})

// CLOSE SHOPPING LIST
for (let i = 0; i < btnCloseShoppingList.length; i++) {
    btnCloseShoppingList[i].addEventListener("click", function () {
        shoppingList.style.setProperty("left", "-200%")
    })
}

// GET PRODUCTS FROM API
async function getProducts() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    let data = await response.json();
 
    let product = "";
    data.splice(0, 10).map((info) => {
        product += `
        <div class="swiper-slide prodduct">
        <div class="product-img">
            <img src="${info.thumbnailUrl}" alt="">
            <span>٣ + ١ مجاناً</span>
        </div>
        <div class="product-title">
            <h4>Mercedes benz</h4>
            <h3>عطر باراديسو من روبرتو كفالي للنساء - اي دي بارفيوم</h3>
            <div class="product-price">
                <span class="price"> 169.05 ريال </span>
                <span class="discount">-59%</span>
            </div>
        </div>
        <div class="product-select">
            <span>أضف للسة</span>
            <i class="fa-solid fa-plus"></i>
        </div>
    </div>
        `
    });

    document.getElementById("women-perf").innerHTML = product;
    document.getElementById("man-perf").innerHTML = product;
    document.getElementById("popular-products").innerHTML = product; 
}

getProducts();

// GO UP BUTTON
window.addEventListener("scroll", function() {
    if (this.scrollY >= 100 ) {
        btnGoUp.style.bottom = "30px"
    } else {
        btnGoUp.style.bottom = "-100px"
    }
});

btnGoUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});







