// show cart
(function () {
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");
    cartInfo.addEventListener("click", function () {
        cart.classList.toggle("show-cart");
    });

})();


// add items to the cart
(function () {



    



    const cartBtn = document.querySelectorAll(".store-item-icon");
    cartBtn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            //   console.log(event.target);


            if (event.target.parentElement.classList.contains("store-item-icon")) {

                // console.log(event.target.parentElement.previousElementSibling.src);

                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf("img") + 3;
                let partPath = fullPath.slice(pos);
                // console.log(partPath);


                const item = {};
                item.img = `img-cart${partPath}`;
                let name =
                    event.target.parentElement.parentElement.nextElementSibling
                    .children[0].children[0].textContent;
                // console.log(name);
                item.name = name;


                let price =
                    event.target.parentElement.parentElement.nextElementSibling
                    .children[0].children[1].textContent;

                // console.log(price);

                let finalPrice = price.slice(1).trim();
                // console.log(finalPrice);
                item.price = finalPrice;


                // console.log(item);



                //creat item with new image

                const cartItem = document.createElement("div");
                cartItem.classList.add(
                    "cart-item",
                    "d-flex",
                    "justify-content-between",
                    "text-capitalize",
                    "my-3"
                );

                cartItem.innerHTML = `
                            <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                            <div class="item-text">
                            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                            <span>$</span>
                            <span id="cart-item-price" class="cart-item-price"
                            class="mb-0">${item.price}</span>
                            </div>
                            <a href="#" id='cart-item-remove' class="cart-item-remove">
                            <i class="fas fa-trash"></i>
                            </a>
                        </div>`




                        // select cart

                        const cart = document.getElementById("cart");
                        const total = document.querySelector(".cart-total-container");
                        cart.insertBefore(cartItem, total);
                        // alert("item added to the cart");




                const del = document.querySelectorAll(".cart-item-remove");
                const clear = document.getElementById("clear-cart");
                clear.addEventListener("click", function () {
                    cartItem.remove();
                    showTotals();
                });

                del.forEach(elm => {
                    elm.addEventListener("click", function () {
                        elm.parentElement.remove();
                        // console.log(elm.parentElement);
                        showTotals();
                })
                });


                showTotals();

            }
        });
    });


    /show totals/

    function showTotals() {
        const total = [];
        const items = document.querySelectorAll(".cart-item-price");
        items.forEach(function (item) {
            total.push(parseFloat(item.textContent));
        });
        // console.log(total);
        const totalMoney = total.reduce(function (total, item) {
            total += item;
            return total;
        }, 0);

        const finalMoney = totalMoney.toFixed(2);

        // console.log(finalMoney);



        document.getElementById("cart-total").textContent = finalMoney;
        document.querySelector(".item-total").textContent = finalMoney;
        document.getElementById("item-count").textContent = total.length;
  
    }




})();



var info = document.getElementById("info");


window.onscroll = function () {
    if(window.scrollY > 150) {
        info.classList.add("sticky")
   
    } else {
        info.classList.remove("sticky");

    }
 
 }
