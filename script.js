const addItem = () => {
    const value = document.getElementById('input-field').value;
    if (value) {
        // Display in UI
        displayProduct(value);

        // Add To Local Storage
        addProductToCart(value);

        // Clear input Field
        document.getElementById('input-field').value = '';

    } else {
        alert("Enter Some things");
    }
}
const displayProduct = pName => {
    const li = document.createElement('li');
    li.innerText = pName;
    document.getElementById('products').appendChild(li);
}

const upDateListUi = () => {
    const storageListData = getCart();
    for (const key in storageListData) {
        // console.log(storageListData[key])
        displayProduct(storageListData[key]);

    }

}


const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);

    } else {
        cartObj = {};
    }
    return cartObj;

}
const addProductToCart = name => {
    const cart = getCart();
    let cartLength = Object.keys(cart).length;
    cart[cartLength] = name;
    const cartStringified = JSON.stringify(cart);

    localStorage.setItem('cart', cartStringified);


}

upDateListUi();

const removeAll = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');


}