let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Shrimp Remoulade Shrimp Cocktail',
        image: 'Shrimp Remoulade_Shrimp Cocktail.png',
        price: 1599
    },
    {
        id: 2,
        name: 'Spicy Lobster',
        image: 'Spicy Lobster.PNG',
        price: 1699
    },
    {
        id: 3,
        name: 'Baked Escargot',
        image: 'Baked Escargot.PNG',
        price: 2220
    },
    {
        id: 4,
        name: 'Seared Ahi Tuna',
        image: 'Seared Ahi Tuna.PNG',
        price: 1500
    },
    {
        id: 5,
        name: 'Prosciutto Wrapped Mozzarella',
        image: 'Prosciutto Wrapped Mozzarella.PNG',
        price: 1500
    },
    {
        id: 6,
        name: 'Caesar Salad with Bacon Bits',
        image: 'Caesar Salad with Bacon Bits.PNG',
        price: 1500
    },
    {
        id: 7,
        name: 'Caribbean Chicken Salad',
        image: 'Caribbean Chicken Salad.png',
        price: 1500
    },
    {
        id: 8,
        name: 'Artichauts à la barigoule',
        image: 'Artichauts à la barigoule.PNG',
        price: 1500
    },
    {
        id: 9,
        name: 'Beef Bourguigon',
        image: 'Beef Bourguigon.PNG',
        price: 1500
    },
    {
        id: 10,
        name: 'Sautéed Garlic Butter Mixed Vegetables',
        image: 'Sautéed Garlic Butter Mixed Vegetables.PNG',
        price: 1500
    },
    {
        id: 11,
        name: 'Ratatouille',
        image: 'Ratatouille.PNG',
        price: 1500
    },
    {
        id: 12,
        name: 'Steak au Poivre with Red Wine Pan Sauce',
        image: 'Steak au Poivre with Red Wine Pan Sauce.PNG',
        price: 1500
    },
    {
        id: 13,
        name: 'Duck à l_Orange',
        image: 'Duck à l_Orange.png',
        price: 1500
    },
    {
        id: 14,
        name: 'Lyon-Style Chicken with Vinegar Sauce',
        image: 'Lyon-Style Chicken with Vinegar Sauce.PNG',
        price: 1500
    },
    {
        id: 15,
        name: 'Stuffed Pork Tenderloins with Bacon and Apple-Riesling Sauce',
        image: 'Stuffed Pork Tenderloins with Bacon and Apple-Riesling Sauce.PNG',
        price: 1500
    },
    {
        id: 16,
        name: 'Caribbean Chicken Salad',
        image: 'Caribbean Chicken Salad.PNG',
        price: 1500
    },
    {
        id: 17,
        name: 'Lobster Thermidor',
        image: 'Lobster Thermidor.PNG',
        price: 1500
    },
    {
        id: 18,
        name: 'Marseille-Style Shrimp Stew',
        image: 'Marseille-Style Shrimp Stew.PNG',
        price: 1500
    },
    {
        id: 19,
        name: 'Moules Farcies',
        image: 'Moules Farcies.png',
        price: 1500
    },
    {
        id: 20,
        name: 'Sautéed Garlic Butter Mixed Vegetables',
        image: 'Sautéed Garlic Butter Mixed Vegetables.PNG',
        price: 1500
    },
    {
        id: 21,
        name: 'Artichauts à la barigoule',
        image: 'Artichauts à la barigoule.PNG',
        price: 1500
    },
    {
        id: 22,
        name: 'Endives au jambon',
        image: 'Endives au jambon.PNG',
        price: 1500
    },
    {
        id: 23,
        name: 'Mocha Mud Pie',
        image: 'Mocha Mud Pie.PNG',
        price: 1500
    },
    {
        id: 24,
        name: 'CRÈME BRULÉE',
        image: 'CRÈME BRULÉE.PNG',
        price: 1500
    },
    {
        id: 25,
        name: 'Caribbean Chicken Salad',
        image: 'Caribbean Chicken Salad.png',
        price: 1500
    },
    {
        id: 26,
        name: 'Lemonade',
        image: 'Lemonade.PNG',
        price: 150
    },
    {
        id: 27,
        name: 'Thé glacé(iced tea)',
        image: 'Thé glacé(iced tea).PNG',
        price: 150
    },
    {
        id: 28,
        name: 'fresh buko',
        image: 'fresh buko.PNG',
        price: 150
    },
    {
        id: 28,
        name: 'calamansi juice',
        image: 'calamansi juice.PNG',
        price: 150
    }
    
];
let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;t;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

checkoutBtn.addEventListener('click', function () {
    checkout();
});

function checkout() {
    alert('Checkout successful! Wait for your order.');
    listCards = [];
    reloadCard();
}

