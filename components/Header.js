function Header({ cartItems, toggleCart }) {
    try {
        const [searchQuery, setSearchQuery] = React.useState('');
        
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleSearch = (e) => {
            e.preventDefault();
            console.log('Searching for:', searchQuery);
        };

        return (
            <header className="amazon-blue text-white sticky top-0 z-50" data-name="header" data-file="components/Header.js">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                                    alt="Amazon"
                                    className="h-8 w-auto"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'block';
                                    }}
                                />
                                <div className="text-white font-bold text-2xl" style={{display: 'none'}}>
                                    <span className="bg-white text-black px-2 py-1 rounded">amazon</span>
                                    <span className="text-sm ml-1">.in</span>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center text-sm">
                                <i data-lucide="map-pin" className="w-4 h-4 mr-1"></i>
                                <div>
                                    <div className="text-xs text-gray-300">Deliver to</div>
                                    <div className="font-bold">Mumbai 400001</div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
                            <div className="flex">
                                <select className="bg-gray-200 text-black px-2 py-2 rounded-l border-r border-gray-300">
                                    <option>All Categories</option>
                                    <option>Electronics</option>
                                    <option>Books</option>
                                    <option>Fashion</option>
                                    <option>Home & Kitchen</option>
                                </select>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search Amazon.in"
                                    className="flex-1 px-4 py-2 text-black search-focus"
                                />
                                <button type="submit" className="amazon-orange px-4 py-2 rounded-r">
                                    <i data-lucide="search" className="w-5 h-5"></i>
                                </button>
                            </div>
                        </form>

                        <div className="flex items-center space-x-6">
                            <div className="hidden md:flex items-center text-sm">
                                <i data-lucide="globe" className="w-4 h-4 mr-1"></i>
                                <span>EN</span>
                            </div>
                            
                            <div className="text-sm">
                                <div className="text-xs">Hello, Sign in</div>
                                <div className="font-bold">Account & Lists</div>
                            </div>

                            <div className="text-sm mobile-hidden">
                                <div className="text-xs">Returns</div>
                                <div className="font-bold">& Orders</div>
                            </div>

                            <button 
                                onClick={toggleCart}
                                className="relative flex items-center"
                            >
                                <i data-lucide="shopping-cart" className="w-6 h-6"></i>
                                {cartItems.length > 0 && (
                                    <span className="cart-badge">{cartItems.length}</span>
                                )}
                                <span className="ml-1 font-bold">Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
