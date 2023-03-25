const data = [
    {
        id: 1,
        name: "Analog Black Dial Men's Watch-TWHG03SMU17",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51L+B5p419L._AC_UL480_FMwebp_QL65_.jpg",
        price: 2999,
        cat: 'Dress'
    }
    ,
    {
        id: 2,
        name: "Analog Men's Watch",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Kx6rgmlRS._AC_UL480_FMwebp_QL65_.jpg",
        price: 999,
        cat: 'Dress'
    }
    ,
    {
        id: 3,
        name: "Vintage Series Digital Grey Dial Men's Watch-A-158WA-1Q",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ybeKQto8L._AC_UL480_FMwebp_QL65_.jpg",
        price: 1499,
        cat: 'Sport'
    }
    ,
    {
        id: 4,
        name: "Silicone Strap Analog Wrist Watch for Men",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61LO6l4zB4L._AC_UL480_FMwebp_QL65_.jpg",
        price: 499,
        cat: 'Sport'
    }
    ,
    {
        id: 5,
        name: "Analog Blue Dial Men's Watch - FS5237",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81MJx+6PmYS._AC_UL480_FMwebp_QL65_.jpg",
        price: 7499,
        cat: 'Luxury'
    }
    ,
    {
        id: 6,
        name: "Classics Analog Silver Dial Men's Watch -TW000T120",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/715ZYrEp5-L._AC_UL480_FMwebp_QL65_.jpg",
        price: 10499,
        cat: 'Luxury'
    }
    ,
    {
        id: 7,
        name: "Analog Silver Dial Men's Watch-1864SL09",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61I2+HlO8OL._AC_UL480_FMwebp_QL65_.jpg",
        price: 2499,
        cat: 'Casual'
    }
    ,
    {
        id: 8,
        name: "Neo Mens Designer Watch - Quartz, Water Resistant",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/719Yxd3KxPL._AC_UL480_FMwebp_QL65_.jpg",
        price: 3499,
        cat: 'Casual'
    }
];

const productsContainer = document.querySelector('.products');
const searchInput = document.querySelector('.search');
const categoriesContainer = document.querySelector('.cats');
const priceRange = document.querySelector('.priceRange');
const priceValue = document.querySelector('.priceValue');

const displayProducts = (Filteredproducts) => {
    productsContainer.innerHTML = Filteredproducts.map((product) =>  
    `<div class="product">
        <img src=${product.img} alt="" srcset="">
        <span class="name">${product.name}</span>
        <span class="priceText">$${product.price}</span>
    </div>`
    ).join("");
}

displayProducts(data);

searchInput.addEventListener("keyup" , (e) => {
    const value = e.target.value.toLowerCase();

    if(value){
        displayProducts(
            data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
        )
    }
    else{
        displayProducts(data);
    }
});

const setCategories = () => {
    const allCats = data.map(item => item.cat);
    const categories =["All" , ...allCats.filter((item , i) => {
        return allCats.indexOf(item) === i
    })];

    categoriesContainer.innerHTML = categories.map(cat =>
        `
        <span class="cat">${cat}</span>
        `
        ).join("");

    categoriesContainer.addEventListener('click' , (e) => {
        const selectedCat = e.target.textContent;

        selectedCat === "All" ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    })
};

const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$"+maxPrice;

    priceRange.addEventListener('input' , (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item) => item.price <= e.target.value));
    });
};

setCategories();
setPrices();
