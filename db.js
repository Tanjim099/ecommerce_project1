let data = [
    {
        id: "1",
        name: "boAt Airdopes 401",
        price: "404",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {
        id: "2",
        name: "boAt Airdopes 402",
        price: "404",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {
        id: "3",
        name: "boAt Airdopes 403",
        price: "404",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {
        id: "4",
        name: "boAt Airdopes 404",
        price: "404",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {
        id: "5",
        name: "boAt Airdopes 405",
        price: "404",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {
        id: "6",
        name: "boAt Airdopes 406",
        price: "404",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {
        id: "7",
        name: "boAt Airdopes 407",
        price: "404",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    },
    {
        id: "8",
        name: "boAt Airdopes 408",
        price: "404",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103"
    }
];

// -------------------------- //

// Dashboard code start 

// const publishBtn = document.getElementById("publishbtn");
// publishBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("yes")
//     const addProductId = document.getElementById("dashboard_product_id").value;
//     const addProductName = document.getElementById("dashboard_product_name").value;
//     const addProductPrice = document.getElementById("dashboard_product_price").value;
//     const addProductImage = document.getElementById("dashboard_product_image").value;


//     if(addProductId == " " && addProductName == " " && addProductPrice == " " && addProductImage == " "){
//         const addNewProduct = {
//             id: addProductId,
//             name: addProductName,
//             price: addProductPrice,
//             image: addProductImage
//         };
//         console.log(addNewProduct);
//         data.push(addNewProduct)
//         console.log(data)
//         addProduct();
//         addToCard();
//         alert("Product has been added");
//     }
//     else{
//         alert("please enter Product Id, Name, Price and Image URL")
//     }
// });

// console.log(data)

// Dashboard code end

// ------------------------- //


const cartData = []

const extraProductItems = document.getElementById("extra_product");
// console.log(extraProductItems)

function addProduct() {
    data.forEach(value => {
        var dataDetail = {
            id: value.id,
            name: value.name,
            price: value.price,
            image: value.image
        };
        localStorage.setItem("ProductData_" + value.id, JSON.stringify(dataDetail));
        console.log(dataDetail)
        let newDiv = document.createElement("div");
        newDiv.classList.add("extra_product_item");
        newDiv.innerHTML = `
        <img class="productimage" src="${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">Price ${value.price}</div>
        <button class="addtocartbtn" id="addtocartbtn" onclick="addToCard(${value.id})">Add To Card</button>
        
        `;
        extraProductItems.appendChild(newDiv);
    })
}
addProduct();

// const addedProductInCart = []

const cartItem = document.getElementById("cartitems");
function addToCard(e){
    const addedProductInCart = []
    console.log(e)
    addedProductInCart.push(e);
    let itemNmbers = document.getElementById("Shop_cart");
    itemNmbers.innerText = addedProductInCart.length;
    for (let i = 0; i < data.length; i++) {
        for(let j=0;j<addedProductInCart.length;j++){
           if(addedProductInCart[j]==data[i].id){
               const itemImage = document.createElement("img");
               itemImage.src=data[i].image;
               const itemName = document.createElement("h3");
               itemName.setAttribute("id", "itemname");
               itemName.innerText=data[i].name;
               const itemPrice = document.createElement("p");
               itemPrice.setAttribute("id", "itmeprice");
               itemPrice.innerText=data[i].price;
               console.log(itemPrice)
               const itemRemoveBtn = document.createElement("span");
               itemRemoveBtn.setAttribute("id", "itemremovebtn");
               itemRemoveBtn.innerText = "Remove";
            //    totalPrice += data[i].price;
               let itemTotalPrice = document.getElementById("totalprice");
               itemTotalPrice.innerText = itemPrice;
               cartItem.append(itemImage, itemName, itemPrice, itemRemoveBtn);
            //    cartItem.itemremovebtn.addEventListener("click", () => {
            //     cartItem.remove(); 
            //   });
           }
        }

        // console.log(data[i]);
   }
   console.log(addedProductInCart.length)
   const checkoutBtn = document.getElementById("checkoutbtn");
checkoutBtn.addEventListener("click", ()=>{
    if(addedProductInCart == null){
        alert("Your cart is empty");
    }
    else{
        // alert("Your order has been Successful")
        location = "checkout.html";
    }
})

}


// -------------------------------- //

// console.log(cartData);

// const keyArray = [];
// let cartDataLocal = JSON.parse(localStorage.getItem("productKey"))||[];
// function addToCard(e) {
//     let flag = true;
//     for (let i=0;i<cartDataLocal.length;i++) {
//         if (e == cartDataLocal[i]) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag) {
//         alert("Product added Sucessfully");
//         cartDataLocal.push(e)
//         localStorage.setItem("productKey", JSON.stringify(cartDataLocal));
//     } else {
//         alert("Product already in cart");
//     }

// }
// console.log(cartDataLocal);
// let cartDataLocal = JSON.parse(localStorage.getItem("productKey"));


// ------------------------------------ //



// const cartItem = document.getElementById("cartitems");
// let totalPrice = 0;
// for (let i = 0; i < data.length; i++) {
//      for(let j=0;j<cartDataLocal.length;j++){
//         if(cartDataLocal[j]==data[i].id){
//             const itemImage = document.createElement("img");
//             itemImage.src=data[i].image;
//             const itemName = document.createElement("h3");
//             itemName.setAttribute("id", "itemname");
//             itemName.innerText=data[i].name;
//             const itemPrice = document.createElement("p");
//             itemPrice.setAttribute("id", "itmeprice");
//             itemPrice.innerText=data[i].price;
//             const itemRemoveBtn = document.createElement("span");
//             itemRemoveBtn.setAttribute("id", "itemremovebtn");
//             itemRemoveBtn.innerText = "Remove";
//             totalPrice += data[i].price;
//             const itemTotalPrice = document.getElementById("total");
//             // itemTotalPrice.innerText = totalPrice;

//             cartItem.append(itemImage, itemName, itemPrice, itemRemoveBtn);

//             console.log(data[i]);
//         }
//      }
// }



// ---------------------------------- //
//   cartDataLocal=[];