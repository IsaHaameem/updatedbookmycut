// checkout.js

// Sample cart data to simulate storage (You can remove this if you're using localStorage to store cart items)
const sampleCartData = [
    { name: "Haircut", price: 119 },
    { name: "Shaving", price: 79 },
    { name: "Facial", price: 599 }
];

// Save sample cart data to localStorage (uncomment this line if needed)
// localStorage.setItem('cart', JSON.stringify(sampleCartData));

// Fetch cart data from localStorage and update the cart items list
document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || sampleCartData; // Use sample data if localStorage is empty

    let cartItemsList = document.getElementById('cart-items');
    let totalAmountElement = document.getElementById('total-amount');

    cartItemsList.innerHTML = ''; // Clear existing items

    let totalAmount = 0;

    cartItems.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartItemsList.appendChild(listItem);
        totalAmount += item.price;
    });

    totalAmountElement.textContent = `₹${totalAmount}`;
});

// Razorpay payment integration
document.getElementById('pay-btn').onclick = function (e) {
    e.preventDefault();

    // Get total amount
    let totalAmount = parseInt(document.getElementById('total-amount').textContent.replace('₹', '')) * 100; // Amount in paise

    // Razorpay options
    var options = {
        "key": "rzp_test_QlDQIQl7CWkdv9", // Public Key ID, safe to use here
        "amount": totalAmount, // Amount in paise (calculated dynamically)
        "currency": "INR",
        "name": "Bookmycut",
        "description": "Payment for services",
        "image": "https://yourwebsite.com/logo.png", // Optional logo
        "handler": function (response) {
            // This function executes when the payment is successful
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            // Call your backend to save the payment details in the database
            fetch('/payment-success', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    payment_id: response.razorpay_payment_id,
                    amount: totalAmount
                })
            }).then(res => res.json())
              .then(data => console.log(data));
        },
        "prefill": {
            "name": "Customer Name",
            "email": "customer@example.com",
            "contact": "9940069843"
        },
        "theme": {
            "color": "#ff4081"
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
};
