

            const items = JSON.parse('{{items}}');

            const itemList = document.getElementById('items-list');

            // Function to handle "Add to cart" button click
            function addToCart(itemId) {
                console.log(`Adding item with ID ${itemId} to cart...`);

                // Send HTTP request to server with item ID
                fetch(`/addToCart/${itemId}`, { method: 'POST' })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to add item to cart');
                        }
                        console.log('Item added to cart successfully');
                    })
                    .catch(error => console.error('Error adding item to cart:', error));
            }

            items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name}: $${item.price} <button id='add-to-cart-${item.id}' onclick="addToCart(${item.id})">Add to cart</button>`;
            itemList.appendChild(li);
            });

/*
        <script>
            const items = JSON.parse('{{items}}');

            const itemList = document.getElementById('items-list');

            items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name}: $${item.price} <button id='add-to-cart-${item.id}'>Add to cart</button>`;
            itemList.appendChild(li);
            });
        </script>
*/