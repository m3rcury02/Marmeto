console.log("====================================");
console.log("Connected");
console.log("====================================");
fetch(
  "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json"
)
  .then((response) => response.json())
  .then((productData) => {
    // Populate the product details in the HTML
    // Add color and size options
    // Add product description
    // ...
  })
  .catch((error) => console.error("Error:", error));
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateCarousel() {
  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

let minusBtn = document.getElementById("minus-btn");
let count = document.getElementById("count");
let plusBtn = document.getElementById("plus-btn");
let countNum = 0;
count.innerHTML = countNum;

minusBtn.addEventListener("click", () => {
  countNum -= 1;

  if (countNum < 1) {
    countNum = 0;
    minusBtn.style.color = "gray";
  }

  count.innerHTML = countNum;
});

plusBtn.addEventListener("click", () => {
  minusBtn.style.color = "#3A4980";
  countNum += 1;
  count.innerHTML = countNum;
});

document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
  document.querySelectorAll('.small-img-col img').forEach(img => {
    
    img.addEventListener('click', function() {
      // Remove the border from all images
      document.querySelectorAll('.small-img-col img').forEach(img => {
        img.classList.remove('selected-img');
      });
      
      // Add the border to the clicked image
      this.classList.add('selected-img');
  
      // Change the main image
      document.getElementById('Mainimage').src = this.src;
    });
  });
  
  