function ProductGrid({ products, onAddToCart }) {
    try {
        const [selectedCategory, setSelectedCategory] = React.useState('All');
        
        const categories = ['All', 'Electronics', 'Fashion', 'Books', 'Home & Kitchen', 'Sports', 'Beauty', 'Grocery'];
        
        const filteredProducts = getProductsByCategory(selectedCategory);

        return (
            <section className="py-12 fade-in" data-name="product-grid" data-file="components/ProductGrid.js">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
                        <p className="text-gray-600 text-lg">Discover amazing deals on top-quality products</p>
                    </div>
                    
                    <div className="flex justify-center mb-8 overflow-x-auto">
                        <div className="flex gap-2 bg-white p-2 rounded-lg shadow min-w-max">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded font-medium transition-all duration-300 whitespace-nowrap ${
                                        selectedCategory === category
                                            ? 'amazon-orange text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                            <div key={product.id} className="slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                                <ProductCard 
                                    product={product} 
                                    onAddToCart={onAddToCart}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ProductGrid component error:', error);
        reportError(error);
    }
}
