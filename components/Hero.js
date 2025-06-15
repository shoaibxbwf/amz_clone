function Hero() {
    try {
        return (
            <section className="hero-gradient text-white py-12 fade-in" data-name="hero" data-file="components/Hero.js">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="slide-up">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Great deals on everything
                            </h1>
                            <p className="text-xl mb-8 text-gray-200">
                                Shop millions of products at amazing prices with fast, free delivery
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="amazon-orange text-black px-8 py-3 rounded font-bold hover:bg-yellow-500 transition-all duration-300 hover:scale-105">
                                    Shop Now
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block bounce-in">
                            <img 
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                                alt="Shopping"
                                className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 container mx-auto px-4">
                    <div className="text-center slide-up">
                        <h3 className="text-2xl font-bold mb-2">100M+</h3>
                        <p className="text-gray-300">Products</p>
                    </div>
                    <div className="text-center slide-up">
                        <h3 className="text-2xl font-bold mb-2">Fast</h3>
                        <p className="text-gray-300">Delivery</p>
                    </div>
                    <div className="text-center slide-up">
                        <h3 className="text-2xl font-bold mb-2">24/7</h3>
                        <p className="text-gray-300">Support</p>
                    </div>
                    <div className="text-center slide-up">
                        <h3 className="text-2xl font-bold mb-2">Secure</h3>
                        <p className="text-gray-300">Payment</p>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
