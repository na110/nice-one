// GET PRODUCTS FROM API
async function getProducts() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    let data = await response.json();
 
    let product = "";
    data.splice(0, 20).map((info) => {
        product += `
        <div class="product col-12 col-md-6 clo-lg-4 col-xl-3">
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

    document.getElementById("products-show").innerHTML = product;
}

getProducts();
