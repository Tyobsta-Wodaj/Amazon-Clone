// for home slide
const imgs = document.querySelectorAll(".home-silde-image img")
const prev = document.querySelector(".prev-btn")
const next = document.querySelector(".next-btn")

let n = 0

function slideimage(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none"
    }
    imgs[n].style.display = "block"
}

slideimage()

prev.addEventListener("click", ()=>{
    if (n > 0) {
        n = n - 1
    } else {
        n = imgs.length - 1
    }
    slideimage()
})

next.addEventListener("click", ()=>{
    if (n < imgs.length - 1) {
        n = n + 1
    } else {
        n = 0
    }
    slideimage()
})


const signin = document.getElementById("signin")
const signinpage = document.getElementById("signinpage")
const signuppage = document.getElementById("signuppage")
const createAccount = document.getElementById("create-account")
const haveAccount = document.getElementById("have-account")
const logo = document.getElementById("logo")

signin.addEventListener("click", ()=> {
    signinpage.classList.add("active")
})

createAccount.addEventListener("click", ()=> {
    signinpage.classList.remove("active")
    signuppage.classList.add("active")
    document.body.classList.add("no-scroll")
})

haveAccount.addEventListener("click", ()=> {
    signuppage.classList.remove("active")
    signinpage.classList.add("active")
    document.body.classList.add("no-scroll")
})

logo.addEventListener("click", ()=> {
    signinpage.classList.remove("active")
    signuppage.classList.remove("active")
})
//shop more button click

const dealDetails = [
  {
    id: 1,
    image: "images/international.jfif",
    price: 14.45,
    listPrice: 19.54,
    description: "This product is the best for you!",
    suggestions: ["images/bottel.jfif", "images/teeth.jfif", "images/bags.webp"]
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BHGGOY4y5hcnb_OeVOft8XV-2sPnlLzOqw&s",
    price: 12.99,
    listPrice: 18.00,
    description: "Durable and high-quality bottle.",
    suggestions: ["images/damples.jfif", "images/teeth.jfif"]
  },
  {
    id: 3,
    image: "images/toy.jfif",
    price: 9.99,
    listPrice: 15.99,
    description: "Essential dental care product.",
    suggestions: ["images/bottel.jfif", "images/oil.jfif"]
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYolFwTgs2WB8aAWyo1ltj4cXTmZsH2u4i2Q&s",
    price: 22.45,
    listPrice: 30.00,
    description: "Stylish and spacious bag.",
    suggestions: ["images/clothss.jfif", "images/headset.jfif"]
  },
  {
    id: 5,
    image: "images/bags.webp",
    price: 29.99,
    listPrice: 45.99,
    description: "Comfortable headset with clear sound.",
    suggestions: ["images/google.jfif", "images/bags.webp"]
  },
  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BHGGOY4y5hcnb_OeVOft8XV-2sPnlLzOqw&s",
    price: 18.75,
    listPrice: 25.50,
    description: "Smart and useful gadget.",
    suggestions: ["images/headset.jfif", "images/oil.jfif"]
  },
  {
    id: 7,
    image: "images/bottel.jfif",
    price: 11.20,
    listPrice: 16.90,
    description: "Premium quality oil product.",
    suggestions: ["images/clothss.jfif", "images/teeth.jfif"]
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYolFwTgs2WB8aAWyo1ltj4cXTmZsH2u4i2Q&s",
    price: 19.99,
    listPrice: 27.99,
    description: "Comfortable everyday clothing.",
    suggestions: ["images/bags.webp", "images/headset.jfif"]
  },
  {
    id: 9,
    image: "images/international.jfif",
    price: 17.45,
    listPrice: 24.99,
    description: "International quality product.",
    suggestions: ["images/bottel.jfif", "images/damples.jfif"]
  },
  {
    id: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BHGGOY4y5hcnb_OeVOft8XV-2sPnlLzOqw&s",
    price: 8.99,
    listPrice: 14.99,
    description: "Fun toy for kids.",
    suggestions: ["images/bottel.jfif", "images/clothss.jfif"]
  },
  {
    id: 11,
    image: "images/toy.jfif",
    price: 10.99,
    listPrice: 17.99,
    description: "Lightweight and reusable bottle.",
    suggestions: ["images/teeth.jfif", "images/oil.jfif"]
  },
  {
    id: 12,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYolFwTgs2WB8aAWyo1ltj4cXTmZsH2u4i2Q&s",
    price: 24.99,
    listPrice: 34.99,
    description: "Perfect bag for daily use.",
    suggestions: ["images/clothss.jfif", "images/headset.jfif"]
  },
  {
    id: 13,
    image: "images/bags.webp",
    price: 13.49,
    listPrice: 18.99,
    description: "Great fitness accessory.",
    suggestions: ["images/bottel.jfif", "images/google.jfif"]
  },
  {
    id: 14,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BHGGOY4y5hcnb_OeVOft8XV-2sPnlLzOqw&s",
    price: 16.99,
    listPrice: 22.99,
    description: "Helpful smart device.",
    suggestions: ["images/headset.jfif", "images/oil.jfif"]
  },
  {
    id: 15,
    image: "images/bottel.jfif",
    price: 34.99,
    listPrice: 49.99,
    description: "High-quality audio headset.",
    suggestions: ["images/google.jfif", "images/bags.webp"]
  },
  {
    id: 16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYolFwTgs2WB8aAWyo1ltj4cXTmZsH2u4i2Q&s",
    price: 9.45,
    listPrice: 13.99,
    description: "Natural oil product.",
    suggestions: ["images/teeth.jfif", "images/clothss.jfif"]
  },
  {
    id: 17,
    image: "images/damples.jfif",
    price: 21.99,
    listPrice: 29.99,
    description: "Stylish clothing choice.",
    suggestions: ["images/bags.webp", "images/headset.jfif"]
  },
  {
    id: 18,
    image: "images/bottel.jfif",
    price: 7.99,
    listPrice: 12.99,
    description: "Daily oral care product.",
    suggestions: ["images/bottel.jfif", "images/oil.jfif"]
  },
  {
    id: 19,
    image: "images/teeth.jfif",
    price: 11.49,
    listPrice: 16.49,
    description: "Eco-friendly water bottle.",
    suggestions: ["images/damples.jfif", "images/google.jfif"]
  },
  {
    id: 20,
    image: "images/bags.webp",
    price: 26.99,
    listPrice: 35.99,
    description: "Strong and durable bag.",
    suggestions: ["images/clothss.jfif", "images/headset.jfif"]
  },
  {
    id: 21,
    image: "images/headset.jfif",
    price: 14.99,
    listPrice: 20.99,
    description: "Modern useful gadget.",
    suggestions: ["images/headset.jfif", "images/oil.jfif"]
  },
  {
    id: 22,
    image: "images/oil.jfif",
    price: 10.25,
    listPrice: 15.75,
    description: "Healthy oil product.",
    suggestions: ["images/teeth.jfif", "images/clothss.jfif"]
  },
  {
    id: 23,
    image: "images/clothss.jfif",
    price: 15.99,
    listPrice: 21.99,
    description: "Fitness essential item.",
    suggestions: ["images/bottel.jfif", "images/google.jfif"]
  },
  {
    id: 24,
    image: "images/damples.jfif",
    price: 12.49,
    listPrice: 17.99,
    description: "Reusable bottle for daily use.",
    suggestions: ["images/teeth.jfif", "images/oil.jfif"]
  },
  {
    id: 25,
    image: "images/bottel.jfif",
    price: 8.49,
    listPrice: 13.49,
    description: "Affordable dental care.",
    suggestions: ["images/bottel.jfif", "images/clothss.jfif"]
  },
  {
    id: 26,
    image: "images/teeth.jfif",
    price: 28.99,
    listPrice: 39.99,
    description: "Premium quality bag.",
    suggestions: ["images/clothss.jfif", "images/headset.jfif"]
  },
  {
    id: 27,
    image: "images/bags.webp",
    price: 31.99,
    listPrice: 44.99,
    description: "Noise-isolating headset.",
    suggestions: ["images/google.jfif", "images/bags.webp"]
  },
  {
    id: 28,
    image: "images/headset.jfif",
    price: 9.99,
    listPrice: 14.99,
    description: "Pure and natural oil.",
    suggestions: ["images/teeth.jfif", "images/clothss.jfif"]
  },
  {
    id: 29,
    image: "images/oil.jfif",
    price: 23.49,
    listPrice: 32.49,
    description: "Comfortable fashion wear.",
    suggestions: ["images/bags.webp", "images/headset.jfif"]
  },
  {
    id: 30,
    image: "images/clothss.jfif",
    price: 14.45,
    listPrice: 19.54,
    description: "This product is the best for you!",
    suggestions: ["images/bags.webp", "images/headset.jfif", "images/bottel.jfif"]
  }
];


const shopMoreBtns = document.querySelectorAll(".shop-more");
const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("num-of-items");

let cartNumber = 0;

shopMoreBtns.forEach(button => {
    button.addEventListener("click", () => {
        const id = Number(button.dataset.setId);
        const product = dealDetails.find(p => p.id === id);

        if (!product) {
            alert("Product not found");
            return;
        }

        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "product.html";
    });
});



addToCartBtns.forEach((button) => {
    button.addEventListener("click", () => {
        cartNumber++;
        cartItems.textContent = cartNumber;
    });
});














const searchInput = document.getElementById("search");
const searchIcon = document.getElementById("searchicone");

// Optional: container where search results will appear
const resultsContainer = document.getElementById("search-results"); 

// Listen for typing in the search input
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    // Filter products based on description
    const filteredProducts = dealDetails.filter(product =>
        product.description.toLowerCase().includes(query)
    );

    // Display results
    displayResults(filteredProducts);
});

// Optional: also trigger search when clicking the icon
searchIcon.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = dealDetails.filter(product =>
        product.description.toLowerCase().includes(query)
    );
    displayResults(filteredProducts);
});

// Function to show results
function displayResults(products) {
    if (!resultsContainer) return; // if container not defined
    resultsContainer.innerHTML = ""; // clear previous results

    if (products.length === 0) {
        resultsContainer.innerHTML = "<p>No products found.</p>";
        return;
    }

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("search-item");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.description}" width="50">
            <p>${product.description}</p>
            <p>$${product.price}</p>
        `;
        resultsContainer.appendChild(div);
    });
}
