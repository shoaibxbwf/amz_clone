function IndianBrands() {
    try {
        const brands = [
            {
                name: "Fabindia",
                logo: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=150&h=80&fit=crop&auto=format",
                category: "Fashion & Home"
            },
            {
                name: "Tata",
                logo: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&h=80&fit=crop&auto=format",
                category: "Consumer Goods"
            },
            {
                name: "Himalaya",
                logo: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=150&h=80&fit=crop&auto=format",
                category: "Health & Beauty"
            },
            {
                name: "Prestige",
                logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=80&fit=crop&auto=format",
                category: "Kitchen Appliances"
            },
            {
                name: "Biba",
                logo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=150&h=80&fit=crop&auto=format",
                category: "Women's Fashion"
            },
            {
                name: "Amul",
                logo: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=150&h=80&fit=crop&auto=format",
                category: "Dairy Products"
            },
            {
                name: "Patanjali",
                logo: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=150&h=80&fit=crop&auto=format",
                category: "Ayurvedic Products"
            },
            {
                name: "Boat",
                logo: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=150&h=80&fit=crop&auto=format",
                category: "Audio Electronics"
            }
        ];

        return (
            <section className="py-8 bg-gray-50" data-name="indian-brands" data-file="components/IndianBrands.js">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-6">Popular Indian Brands</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {brands.map((brand, index) => (
                            <div 
                                key={index}
                                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 cursor-pointer text-center hover:scale-105"
                            >
                                <img 
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-full h-12 object-cover rounded mb-2"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/150x80/f3f4f6/374151?text=" + encodeURIComponent(brand.name);
                                    }}
                                />
                                <h3 className="font-semibold text-sm">{brand.name}</h3>
                                <p className="text-xs text-gray-600">{brand.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('IndianBrands component error:', error);
        reportError(error);
    }
}
