let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener("click", ()=>{
  searchForm.classList.toggle('active')
  loginForm.classList.remove('active')
});


let loginForm = document.querySelector(".login-form");
let userBtn = document.querySelector("#userbtn");
userBtn.addEventListener("click", ()=>{
  loginForm.classList.toggle('active')
});


const loginBtn = document.getElementById("login_btn");


loginBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  // const loginBtn = document.getElementById("login_btn");
const loginEmail = document.getElementById("login-email").value;
const loginPass = document.getElementById("login_pass").value;
const checkPass = document.getElementById("checkpass");

const userData=JSON.parse(localStorage.getItem("user"));
if(loginEmail == "" && loginPass == ""){
  checkPass.innerText = "Please enter email & password";
}
else if(loginEmail == userData.email && loginPass == userData.password){
  location = "www.google.com";
}
else{
  checkPass.innerText = "Wrong Password";
}
signUp();
})

// const items = document.querySelectorAll(".product_item1");
// const cartItemContainer = document.getElementById("shopingcart");

// items.forEach((item) => {
//   const addToCartBtn = item.querySelector('.add-to-cart');
//   addToCartBtn.addEventListener("click", ()=>{
//     const itemName = document.getElementsByClassName("itemName").textContent;
//     console.log()
//     console.log(itemName)
//     // for(let i = 0; i<itemName.length; i++){
//     //   itemName[i].innerHTML;
//     // }
//     console.log(itemName)
//     const itemPrice = document.getElementsByClassName("itemprice").innerText;
//     const itemQty = 1;
//     const itemTotal = itemPrice * 1;
//     const itemImage = document.querySelector("img");
//     const itemRemoveBtn = document.getElementById("itemremovebtn").innerText;

//     console.log(itemName)

//     const cartItem = document.createElement("div");
//     cartItem.innerHTML = `

//     <img src="${itemImage.src}" alt="">
//         <h3 id="itemname">${itemName}</h3>
//         <p id="itmeprice">${itemPrice}</p>
//         <span id="itemremovebtn">${itemRemoveBtn}</span>
    
//     `
//     cartItemContainer.appendChild(cartItem);
//   })
// })

// const itemRemoveBtn = document.getElementById("itemremovebtn");

// const items = document.querySelectorAll(".product_item1");
// const cartItemContainer = document.getElementById("shopingcart");
// const addToCartBtn = document.querySelector(".add-to-cart");
// console.log(addToCartBtn);
// const productArray = []
// addToCartBtn[0].addEventListener("click",(e)=>{
//   console.log(e);


//       const itemName = document.querySelector(".itemName").innerText;
//       const itemPrice = document.querySelector("p").textContent;
//       const itemImage = document.querySelector("img");
//       const product = {
//         Name: itemName,
//         price: itemPrice, 
//         image: itemImage
//       }
//       console.log(product);
//       productArray.push(product)
// })
// console.log(productArray);



const items = document.querySelectorAll(".product_item1");
items.forEach((item) => {
  const addToCartBtn = item.querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", () => {
    const itemName = item.querySelector(".itemName").innerText; 
    const itemPrice = item.querySelector("p").textContent; 
    const itemQty = 1;
    const itemTotal = itemPrice * itemQty; 
    const itemImage = item.querySelector("img");
    // const itemRemoveBtn = item.getElementById("itemremovebtn");
    // console.log(itemRemoveBtn)

    const cartItem = document.getElementsByClassName("cartitem");
    cartItem.innerHTML = `
      <img src="${itemImage.src}" alt="">
      <h3 id="itemname">${itemName}</h3>
      <p id="itmeprice">${itemPrice}</p>
      <span id="itemremovebtn">${"Hello"}</span>
    `;

    
    // cartItem.querySelector("#itemremovebtn").addEventListener("click", () => {
    //   cartItem.remove(); 
    // });

    // cartItemContainer.appendChild(cartItem);
  });
});

// const items = document.querySelectorAll(".product_item1");
// const cartItemContainer = document.getElementById("shopingcart");

// items.forEach((item) => {
//   const addToCartBtn = item.querySelector(".add-to-cart");
//   addToCartBtn.addEventListener("click", () => {
//     const itemName = item.querySelector(".itemName").textContent;
//     const itemPrice = item.querySelector(".itemPrice").textContent;
//     const itemQty = 1;
//     const itemTotal = itemPrice * itemQty;
//     const itemImage = item.querySelector("img");
//     const cartItem = document.createElement("div");
//     cartItem.innerHTML = `
//       <img src="${itemImage.src}" alt="">
//       <h3 id="itemname">${itemName}</h3>
//       <p id="itmeprice">${itemPrice}</p>
//     `;
//     cartItemContainer.appendChild(cartItem);
//   });
// });


const addToCart = document.getElementsByClassName("add-to-cart")
const itemNumber = document.getElementById("Shop_cart");
Array.from(addToCart).forEach((button)=>{
  button.addEventListener("click" , ()=>{
    let currentValue = parseInt(itemNumber.textContent);
    currentValue = currentValue + 1;
    itemNumber.textContent = +currentValue;
  })
})




const cart = document.getElementById("cart");
const cartPage = document.getElementById("shopingcart");
cart.addEventListener("click", ()=>{
  cartPage.classList.toggle("actives")
})

const downloadBtn = document.getElementById("Downloadbtn");
const form = document.getElementById("form");
const removeBtn = document.getElementById("removebtn");
downloadBtn.addEventListener("click" ,()=>{
  form.style.display = "block"
})
removeBtn.addEventListener("click", () => {
  form.style.display = "none";
});

//   function showForm() {
//   var form = document.getElementById("form");
//     form.style.display = "block";
//   }

//   window.onload = function () {
//     showForm();
//   setInterval(form, 2000);
// };


const images = ['https://adimanav.com/wp-content/uploads/2018/02/combined-tial-40.jpg', 'https://images.bewakoof.com/uploads/category/mobilesite/TamilCollection_Bewakoof_Homepage_InsideBanner_Msite_common_720x300_revised-1629277506.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNHkhfV4tCh-_4odXAJ1M8fkG7FGWZ1HCKQ&usqp=CAU'];
    let currentIndex = 0;

    function updateSlider() {
    const slider = document.getElementById('slider');
    slider.src = images[currentIndex];
}

   updateSlider();

   setInterval(() => {
     currentIndex = (currentIndex + 1) % images.length;
     updateSlider();
}, 2000);


const sliderItems = document.querySelector('.slider-items');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let slideIndex = 0;
  const slides = document.querySelectorAll('.slider-item');
  const slideCount = slides.length;
  const slideWidth = slides[0].clientWidth;
  const slideMargin = parseInt(getComputedStyle(slides[0]).marginRight);

  sliderItems.style.width = `${(slideWidth + slideMargin) * slideCount}px`;

  function goToSlide(index) {
      if (index < 0) {
                index = slideCount - 1;
      } else if (index >= slideCount) {
          index = 0;
      }
         sliderItems.style.transform = `translateX(-${(slideWidth + slideMargin) * index}px)`;
        slideIndex = index;
  }

  function slidePrev() {
  goToSlide(slideIndex - 1);
}

  function slideNext() {
      goToSlide(slideIndex + 1);
  }

  prevBtn.addEventListener('click', slidePrev);
  nextBtn.addEventListener('click', slideNext);

  // FAQ start

  const accordionItems = document.querySelectorAll(".accordion_item");
  Array.from(accordionItems).forEach(item =>{
    const accordionTitle = item.querySelector(".accordion_title");
    const accodionContent = item.querySelector(".accordion_content");

    accordionTitle.addEventListener("click", ()=>{
      item.classList.toggle("activess");
    })
  });


  // scroll bar start

  const scrollBtn = document.getElementById("scrollbtn");
  window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 300){
      scrollBtn.style.display = "block";
    }
    else{
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })