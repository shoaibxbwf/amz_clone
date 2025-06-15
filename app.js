function App() {
    try {
        const [products] = React.useState(getProducts());
        const [isCartOpen, setIsCartOpen] = React.useState(false);
        const {
            cartItems,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart
        } = useCart();

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const toggleCart = () => {
            setIsCartOpen(!isCartOpen);
        };

        const handleAddToCart = (product) => {
            addToCart(product);
            console.log(`Added ${product.title} to cart`);
        };

        const handleBackToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        return (
            <div className="min-h-screen flex flex-col" data-name="app" data-file="app.js">
                <Header cartItems={cartItems} toggleCart={toggleCart} />
                <Navigation />
                <Hero />
                <main className="flex-1">
                    <Categories />
                    <IndianBrands />
                    <Deals />
                    <ProductGrid products={products} onAddToCart={handleAddToCart} />
                </main>
                <Footer onBackToTop={handleBackToTop} />
                <BackToTop />
                
                <Cart
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    cartItems={cartItems}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
