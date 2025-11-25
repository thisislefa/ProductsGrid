// Add click functionality to product cards
        document.querySelectorAll('.product-link').forEach(button => {
            button.addEventListener('click', function() {
                console.log('Product link clicked');
                // Add your navigation logic here
            });
        });

        // Optional: Make entire card clickable
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.product-link')) {
                    console.log('Card clicked');
                    // Add your navigation logic here
                }
            });
        });