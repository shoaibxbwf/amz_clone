const sampleProducts = [
    // Electronics
    {
        id: 1,
        title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
        price: 19999,
        originalPrice: 24999,
        discount: 20,
        rating: 4.3,
        reviews: 12847,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop&auto=format"
    },
    {
        id: 2,
        title: "Samsung Galaxy Buds2 Pro (Bora Purple) Bluetooth Earbuds",
        price: 13999,
        originalPrice: 17999,
        discount: 22,
        rating: 4.5,
        reviews: 8523,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop&auto=format"
    },
    {
        id: 3,
        title: "Boat Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds",
        price: 1299,
        originalPrice: 2990,
        discount: 57,
        rating: 4.1,
        reviews: 45632,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop&auto=format"
    },

    // Fashion - Traditional Indian Wear
    {
        id: 4,
        title: "Fabindia Men's Cotton Kurta (Navy Blue, Size L)",
        price: 1899,
        originalPrice: 2499,
        discount: 24,
        rating: 4.2,
        reviews: 3241,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500&h=500&fit=crop&auto=format"
    },
    {
        id: 5,
        title: "Biba Women's Cotton Anarkali Kurta Set (Pink, Size M)",
        price: 2299,
        originalPrice: 3199,
        discount: 28,
        rating: 4.6,
        reviews: 1876,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop&auto=format"
    },
    {
        id: 6,
        title: "Soch Women's Pure Cotton Saree with Blouse (Red)",
        price: 3499,
        originalPrice: 4999,
        discount: 30,
        rating: 4.7,
        reviews: 2156,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&h=500&fit=crop&auto=format"
    },
    {
        id: 7,
        title: "Manyavar Men's Silk Blend Sherwani Set (Maroon)",
        price: 8999,
        originalPrice: 12999,
        discount: 31,
        rating: 4.5,
        reviews: 987,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop&auto=format"
    },

    // Books
    {
        id: 8,
        title: "The Alchemist by Paulo Coelho (Paperback)",
        price: 199,
        originalPrice: 299,
        discount: 33,
        rating: 4.8,
        reviews: 15647,
        category: "Books",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop&auto=format"
    },
    {
        id: 9,
        title: "Atomic Habits by James Clear (Hardcover)",
        price: 549,
        originalPrice: 699,
        discount: 21,
        rating: 4.7,
        reviews: 8932,
        category: "Books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop&auto=format"
    },

    // Home & Kitchen
    {
        id: 10,
        title: "Prestige Deluxe Alpha Stainless Steel Pressure Cooker, 5 Litres",
        price: 1899,
        originalPrice: 2599,
        discount: 27,
        rating: 4.5,
        reviews: 12456,
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1585515656935-1e8c83d59cd4?w=500&h=500&fit=crop&auto=format"
    },
    {
        id: 11,
        title: "Hawkins Classic Aluminium Pressure Cooker, 3 Litres",
        price: 1199,
        originalPrice: 1599,
        discount: 25,
        rating: 4.3,
        reviews: 8765,
        category: "Home & Kitchen",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop&auto=format"
    },

    // Beauty
    {
        id: 12,
        title: "Himalaya Herbals Neem Face Wash (150ml)",
        price: 145,
        originalPrice: 175,
        discount: 17,
        rating: 4.4,
        reviews: 8765,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop&auto=format"
    },
    {
        id: 13,
        title: "Patanjali Aloe Vera Gel (150ml) - Pure & Natural",
        price: 85,
        originalPrice: 120,
        discount: 29,
        rating: 4.2,
        reviews: 12345,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop&auto=format"
    },

    // Grocery
    {
        id: 14,
        title: "Tata Tea Premium Assam Tea (1kg Pack)",
        price: 420,
        originalPrice: 480,
        discount: 13,
        rating: 4.6,
        reviews: 9876,
        category: "Grocery",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop&auto=format"
    },
    {
        id: 15,
        title: "Amul Pure Ghee 1L Jar (Traditional Taste)",
        price: 580,
        originalPrice: 620,
        discount: 6,
        rating: 4.8,
        reviews: 15234,
        category: "Grocery",
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop&auto=format"
    },

    // Sports
    {
        id: 16,
        title: "Nivia Storm Football Size 5 (White/Black)",
        price: 899,
        originalPrice: 1299,
        discount: 31,
        rating: 4.1,
        reviews: 2847,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&auto=format"
    }
];

function getProducts() {
    return sampleProducts;
}

function getProductById(id) {
    return sampleProducts.find(product => product.id === id);
}

function getProductsByCategory(category) {
    if (category === 'All') return sampleProducts;
    return sampleProducts.filter(product => product.category === category);
}

function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}
