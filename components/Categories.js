function Categories() {
    try {
        const categories = [
            {
                title: "Electronics & Mobiles",
                image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop&auto=format",
                items: "2M+ items",
                description: "Smartphones, Laptops, TVs"
            },
            {
                title: "Fashion & Beauty",
                image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&auto=format",
                items: "5M+ items",
                description: "Clothing, Shoes, Cosmetics"
            },
            {
                title: "Home & Kitchen",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format",
                items: "1.5M+ items",
                description: "Appliances, Cookware, Decor"
            },
            {
                title: "Books & Education",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&auto=format",
                items: "10M+ items",
                description: "Academic, Fiction, Comics"
            },
            {
                title: "Sports & Fitness",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format",
                items: "800K+ items",
                description: "Equipment, Supplements, Wear"
            },
            {
                title: "Grocery & Gourmet",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&auto=format",
                items: "2M+ items",
                description: "Food, Beverages, Snacks"
            }
        ];

        return (
            <section className="py-12 bg-white" data-name="categories" data-file="components/Categories.js">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => (
                            <div 
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer slide-up"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <img 
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/400x300/f3f4f6/374151?text=" + encodeURIComponent(category.title);
                                    }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-xl font-bold">{category.title}</h3>
                                        <p className="text-sm opacity-90">{category.items}</p>
                                        <p className="text-xs opacity-75">{category.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Categories component error:', error);
        reportError(error);
    }
}
