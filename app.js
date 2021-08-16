
const getQuantityTotalPrice = (inputField, isPlus, productTotalPrice, perPriceProduct) => {
    // get the product quantity number.
    const quantity = document.getElementById(inputField);
    const quantityText = quantity.value;
    const quantityNum = parseInt(quantityText);

    // get the product total price.
    const productPrice = document.getElementById(productTotalPrice);
    const productPriceText = productPrice.innerText;
    const productPriceNum = parseInt(productPriceText);

    if (isPlus == true) {
        quantity.value = quantityNum + 1;
        const totalPrice = productPriceNum + perPriceProduct;
        productPrice.innerText = totalPrice;
        // console.log(totalPrice);
    }
    else if (quantityNum > 0) {
        quantity.value = quantityNum - 1;
        const totalPrice = productPriceNum - perPriceProduct;
        productPrice.innerText = totalPrice;
        // console.log(totalPrice);
    }
}

// get total price of product individual.
const getTotalPrice = (PriceId) => {
    const Price = document.getElementById(PriceId);
    const PriceIdText = Price.innerText;
    const PriceIdNum = parseInt(PriceIdText);
    return PriceIdNum;
}

// get subtotal and total price
const totalSalesPrice = () => {
    const iphoneTotalPrice = getTotalPrice('totalIphonePrice');
    const caseTotalPrice = getTotalPrice('totalCasePrice');
    let subTotalPrice = iphoneTotalPrice + caseTotalPrice;
    let totalPrice = subTotalPrice;

    // tax set initial 10 by condition.
    if (iphoneTotalPrice == 0 && caseTotalPrice == 0) {
        document.getElementById("tax").innerText = 0;
        totalPrice = 0;
    }
    if (iphoneTotalPrice > 0 || caseTotalPrice > 0) {
        document.getElementById("tax").innerText = 10;
        totalPrice = subTotalPrice + 10;
    }

    document.getElementById('subtotal').innerText = subTotalPrice;
    document.getElementById('total').innerText = totalPrice;
}

// add event listener on plus minus button.
document.getElementById('iphone-plus').addEventListener('click', () => {
    getQuantityTotalPrice('iphone-input', true, 'totalIphonePrice', 1219);
    totalSalesPrice();
})

document.getElementById('iphone-minus').addEventListener('click', () => {
    getQuantityTotalPrice('iphone-input', false, 'totalIphonePrice', 1219);
    totalSalesPrice();
})

document.getElementById('case-plus').addEventListener('click', () => {
    getQuantityTotalPrice('case-input', true, 'totalCasePrice', 59);
    totalSalesPrice();
})

document.getElementById('case-minus').addEventListener('click', () => {
    getQuantityTotalPrice('case-input', false, 'totalCasePrice', 59);
    totalSalesPrice();
})