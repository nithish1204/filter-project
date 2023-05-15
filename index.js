const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    // img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    img: "icons/watch1.png",
    price: 900,
    cat: "All",
  },
  {
    id: 2,
    name: "Invicta Men's Pro Diver 2",
    // img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    img: "icons/watch1.png",
    price: 900,
    cat: "Dress",
  },
  {
    id: 3,
    name: "Timex Men's Expedition Scout ",
    // img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    img: "icons/watch2.png",
    price: 659,
    cat: "Sport",
  },
  {
    id: 4,
    name: "Breitling Superocean Heritage",
    // img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    img: "icons/watch3.png",
    price: 849,
    cat: "Luxury",
  },
  {
    id: 5,
    name: "Casio Classic Resin Strap ",
    // img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    img: "icons/watch4.png",
    price: 249,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    // img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    img: "icons/watch5.png",
    price: 799,
    cat: "Casual",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
   <div class="product">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText">₹${product.price}</span>
        </div>
  `
    )
    .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);

  // const categories = [
  //   "All",
  //   ...allCats.filter((item, i) => {
  //     return allCats.indexOf(item) == i;
  //   }),
  // ];

  // or

  // const categories = [...allCats];

  categoriesContainer.innerHTML = allCats
    .map(
      (cat) =>
        `
    <span class="cat">${cat}</span>
    `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

setCategories();

const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.innerHTML = "₹" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.innerHTML = "₹" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setPrices();
