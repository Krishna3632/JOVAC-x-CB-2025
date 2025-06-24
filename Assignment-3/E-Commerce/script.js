 function placeOrder(product) {
            console.log(`Placing order for ${product}...`);

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`${product} is ordered.`);
                    resolve();
                }, 2000);
            });
        }

function makePayment() {
            return new Promise((resolve, reject) => {
                console.log('Processing payment...');

                setTimeout(() => {
                    console.log('Payment successful!');
                    resolve();
                }, 1500);
            });
}

function startOrder() {
            placeOrder('Phone')
                .then(makePayment)
                .then(() => {
                    document.querySelector('.status').textContent = '✅ Order completed!';
                });
}