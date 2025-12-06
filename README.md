# Vignette — Minimalist E-commerce Product Grid

## Project Overview
Vignette is a clean, minimalist e-commerce product grid component designed for optimal product presentation and user experience. Featuring a responsive three-column grid with subtle hover effects and intuitive navigation, it's built for performance and accessibility with no external dependencies.

## Live Preview
[View Live Demo](https://thisislefa.github.io/Vignette) | [GitHub Repository](https://github.com/thisislefa/Vignette)

## Technical Architecture

### Core Features
- **Responsive Grid**: 3-column desktop, 2-column tablet, 1-column mobile
- **Performance Optimized**: Minimal CSS with efficient selectors
- **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation
- **No Dependencies**: Pure HTML/CSS/JavaScript implementation
- **Hover Effects**: Subtle animations for enhanced UX

### CSS Architecture
```css
/* Design Tokens */
:root {
    --color-bg: #f5f5f5;
    --color-card: #fff;
    --color-text: #000;
    --color-text-muted: #666;
    --color-hover: #f0f0f0;
    --border-radius: 8px;
    --transition-speed: 0.3s;
}

/* Mobile-first responsive grid */
.products-grid {
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr; /* Mobile default */
}

@media (min-width: 640px) {
    .products-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .products-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

## Installation & Usage

### HTML/CDN Implementation
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/thisislefa/vignette@latest/dist/vignette.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <vignette-grid 
        title="Our Featured Products"
        :products="products"
    ></vignette-grid>
    
    <script src="https://cdn.jsdelivr.net/gh/thisislefa/vignette@latest/dist/vignette.js" type="module"></script>
</body>
</html>
```

### NPM Package
```bash
npm install @thisislefa/vignette
```

### Web Component Usage
```javascript
import '@thisislefa/vignette';

// Register custom element
customElements.define('vignette-grid', VignetteGrid);
```

## Framework Integration

### React Component
```jsx
import React from 'react';
import Vignette from '@thisislefa/vignette/react';
import '@thisislefa/vignette/dist/vignette.css';

function ProductGrid() {
    const products = [
        {
            id: 1,
            name: 'Walnut Desk Organizer',
            price: '$990.00',
            imageUrl: 'https://example.com/desk.jpg',
            alt: 'Standing Desk with Black Legs',
            url: '/products/walnut-desk'
        }
    ];

    return (
        <Vignette 
            title="Our Featured Products"
            products={products}
            onProductClick={(product) => console.log('Product clicked:', product)}
        />
    );
}
```

### Vue 3 Component
```vue
<template>
    <vignette-grid
        :title="title"
        :products="products"
        @product-click="handleProductClick"
    />
</template>

<script setup>
import { VignetteGrid } from '@thisislefa/vignette/vue';
import '@thisislefa/vignette/dist/vignette.css';

const title = 'Our Featured Products';
const products = [
    {
        id: 1,
        name: 'Walnut Desk Organizer',
        price: '$990.00',
        imageUrl: 'https://example.com/desk.jpg',
        alt: 'Standing Desk with Black Legs',
        url: '/products/walnut-desk'
    }
];

const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    // Navigate to product page
    router.push(product.url);
};
</script>
```

### Angular Component
```typescript
import { Component } from '@angular/core';
import { VignetteModule } from '@thisislefa/vignette/angular';

@Component({
    selector: 'app-product-grid',
    standalone: true,
    imports: [VignetteModule],
    template: `
        <vignette-grid
            [title]="title"
            [products]="products"
            (productClick)="onProductClick($event)"
        ></vignette-grid>
    `
})
export class ProductGridComponent {
    title = 'Our Featured Products';
    products = [
        {
            id: 1,
            name: 'Walnut Desk Organizer',
            price: '$990.00',
            imageUrl: 'https://example.com/desk.jpg',
            alt: 'Standing Desk with Black Legs',
            url: '/products/walnut-desk'
        }
    ];

    onProductClick(product: any) {
        console.log('Product clicked:', product);
        this.router.navigate([product.url]);
    }
}
```

## Configuration Options

### Component Properties
```javascript
const config = {
    // Required
    products: [
        {
            id: 'unique-id',
            name: 'Product Name',
            price: '$99.00', // Formatted price string
            imageUrl: 'https://example.com/image.jpg',
            alt: 'Accessible image description',
            url: '/product-path', // Optional: for navigation
            badge: 'New', // Optional: badge text
            rating: 4.5, // Optional: star rating
            salePrice: '$79.00' // Optional: sale price
        }
    ],

    // Optional
    title: 'Featured Products',
    titleTag: 'h2', // Semantic heading tag
    columns: 3, // Desktop column count
    mobileColumns: 1,
    tabletColumns: 2,
    showPrices: true,
    showBadges: true,
    enableHover: true,
    linkTarget: '_self', // or '_blank'
    
    // Events
    onProductClick: (product) => {},
    onProductHover: (product) => {},

    // Styling
    theme: {
        backgroundColor: '#f5f5f5',
        cardBackground: '#ffffff',
        textColor: '#000000',
        mutedColor: '#666666',
        accentColor: '#000000',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif'
    }
};
```

### HTML Attributes API
```html
<vignette-grid
    title="Our Featured Products"
    columns="3"
    mobile-columns="1"
    tablet-columns="2"
    link-target="_blank"
    theme="light"
    data-source="/api/products"
></vignette-grid>
```

## Advanced Features

### Dynamic Data Loading
```javascript
// Load products from API
async function loadProducts() {
    const response = await fetch('/api/products');
    const products = await response.json();
    
    const grid = document.querySelector('vignette-grid');
    grid.products = products;
    
    // Or using data attributes
    grid.dataset.source = '/api/products';
    grid.load();
}

// Event-driven updates
document.querySelector('vignette-grid').addEventListener('productClick', (event) => {
    const { product, element } = event.detail;
    console.log('Product clicked:', product);
    analytics.track('product_view', { productId: product.id });
    
    // Navigate to product page
    if (product.url) {
        window.location.href = product.url;
    }
});

// Custom click handlers
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const productId = this.dataset.productId;
        
        // Emit custom event
        this.dispatchEvent(new CustomEvent('vignette:product-click', {
            bubbles: true,
            detail: { productId }
        }));
    });
});
```

### Image Optimization
```html
<!-- Lazy loading with modern attributes -->
<picture class="product-image-container">
    <source srcset="product.webp" type="image/webp">
    <source srcset="product.jpg" type="image/jpeg">
    <img 
        src="product.jpg" 
        alt="Product description" 
        loading="lazy" 
        decoding="async" 
        class="product-image"
        data-src="product-highres.jpg"
        data-srcset="product-highres.jpg 2x"
    >
</picture>
```

### Accessibility Features
```html
<article class="product-card" 
         role="article"
         aria-labelledby="product-title-1"
         aria-describedby="product-price-1">
    
    <div class="product-image-container">
        <img src="product.jpg" 
             alt="Walnut Desk Organizer with black legs"
             role="presentation">
    </div>
    
    <div class="product-info">
        <div class="product-details">
            <h3 id="product-title-1" class="product-name">Walnut Desk Organizer</h3>
            <p id="product-price-1" class="product-price">From $990.00</p>
            <span class="visually-hidden">Click to view product details</span>
        </div>
        
        <button class="product-link" 
                aria-label="View Walnut Desk Organizer details"
                aria-describedby="product-title-1">
            <!-- Arrow icon -->
        </button>
    </div>
</article>
```

## Performance Optimization

### Critical CSS Inlining
```html
<style>
/* Critical above-the-fold styles */
.vignette-grid { opacity: 0; }
.vignette-grid.loaded { 
    opacity: 1;
    transition: opacity 0.3s ease;
}

/* Load remaining styles asynchronously */
</style>
<link rel="stylesheet" href="vignette.css" media="print" onload="this.media='all'">
```

### Lazy Loading Strategy
```javascript
// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.srcset = img.dataset.srcset;
            observer.unobserve(img);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-image[data-src]').forEach(img => {
    observer.observe(img);
});
```

## Integration Examples

### E-commerce Platform Integration
```javascript
// Shopify Integration
class VignetteShopify {
    constructor(config) {
        this.config = config;
        this.products = [];
    }

    async fetchProducts() {
        // Fetch from Shopify API
        const response = await fetch('/admin/api/2024-01/products.json');
        const data = await response.json();
        
        this.products = data.products.map(product => ({
            id: product.id,
            name: product.title,
            price: this.formatPrice(product.variants[0].price),
            imageUrl: product.image?.src || '/placeholder.jpg',
            alt: product.image?.alt || product.title,
            url: `/products/${product.handle}`
        }));
    }

    formatPrice(price) {
        return `$${parseFloat(price).toFixed(2)}`;
    }
}

// WooCommerce Integration (WordPress)
class VignetteWooCommerce {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getProducts() {
        const response = await fetch(`${this.apiUrl}/wp-json/wc/v3/products`);
        return response.json();
    }
}
```

### Headless CMS Integration
```javascript
// Contentful Integration
import { createClient } from 'contentful';

const client = createClient({
    space: 'your-space-id',
    accessToken: 'your-access-token'
});

async function getContentfulProducts() {
    const entries = await client.getEntries({
        content_type: 'product',
        limit: 10
    });

    return entries.items.map(item => ({
        id: item.sys.id,
        name: item.fields.title,
        price: item.fields.price,
        imageUrl: item.fields.image?.fields?.file?.url,
        alt: item.fields.image?.fields?.title,
        url: `/products/${item.fields.slug}`
    }));
}
```

## Customization & Theming

### CSS Custom Properties
```css
.vignette-grid {
    /* Layout */
    --vignette-gap: 15px;
    --vignette-columns: 3;
    --vignette-card-radius: 8px;
    
    /* Colors */
    --vignette-bg: #f5f5f5;
    --vignette-card-bg: #fff;
    --vignette-text: #000;
    --vignette-text-muted: #666;
    --vignette-hover: #f0f0f0;
    --vignette-accent: #000;
    
    /* Typography */
    --vignette-font-family: 'Inter', sans-serif;
    --vignette-title-size: 48px;
    --vignette-name-size: 18px;
    --vignette-price-size: 16px;
    
    /* Animation */
    --vignette-transition: 0.3s ease;
    --vignette-hover-lift: -4px;
}

/* Dark theme example */
.vignette-grid[theme="dark"] {
    --vignette-bg: #1a1a1a;
    --vignette-card-bg: #2d2d2d;
    --vignette-text: #fff;
    --vignette-text-muted: #aaa;
    --vignette-hover: #3d3d3d;
}
```

### Component Parts for Styling
```css
/* Style internal parts with CSS Shadow Parts */
vignette-grid::part(card) {
    border: 1px solid #e0e0e0;
    transition: all 0.3s ease;
}

vignette-grid::part(card-hover) {
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    transform: translateY(-8px);
}

vignette-grid::part(image) {
    object-fit: cover;
    height: 300px;
}

vignette-grid::part(title) {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
}

vignette-grid::part(button) {
    background: transparent;
    border: 1px solid currentColor;
}
```

## Development & Contribution

### Development Setup
```bash
# Clone repository
git clone https://github.com/thisislefa/vignette.git
cd vignette

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Preview build
npm run preview
```

### Project Structure
```
vignette/
├── src/
│   ├── components/          # Web Component source
│   ├── styles/             # CSS and design tokens
│   ├── utils/              # Helper functions
│   ├── index.js            # Main entry point
│   └── vignette.js         # Web Component definition
├── dist/                   # Built assets
│   ├── vignette.js         # Production JS
│   ├── vignette.css        # Production CSS
│   └── vignette.min.js     # Minified version
├── examples/               # Usage examples
├── tests/                  # Test suites
├── docs/                   # Documentation
├── package.json
└── README.md
```

### Running Tests
```bash
# Run all tests
npm test

# Run specific test types
npm run test:unit          # Unit tests
npm run test:integration   # Integration tests
npm run test:e2e           # End-to-end tests
npm run test:accessibility # Accessibility tests

# Generate coverage report
npm run test:coverage

# Watch mode for development
npm run test:watch
```

## Contributing Guide

We welcome contributions! Here's how you can help improve Vignette:

### Ways to Contribute
1. **Report Issues**: Found a bug? Create a detailed issue report
2. **Request Features**: Suggest new features with use cases
3. **Improve Documentation**: Help make our docs clearer
4. **Submit Code**: Fix bugs or implement features via PRs

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests: `npm test`
5. Ensure linting passes: `npm run lint`
6. Commit with descriptive messages
7. Push to your fork
8. Open a Pull Request

### Code Standards
- Follow existing code patterns and style
- Write meaningful commit messages
- Include tests for new features
- Update documentation accordingly
- Ensure accessibility compliance
- Optimize for performance

## License
Vignette is released under the MIT License. Free for personal and commercial use with attribution.

## Support
- **GitHub Issues**: Bug reports and feature requests
- **Documentation**: Complete API reference and guides
- **Examples**: Ready-to-use implementation examples
- **Community**: Join discussions on GitHub

---

Built with simplicity and performance in mind by [Lefa](https://github.com/thisislefa). Contributions welcome!



