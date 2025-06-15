function Navigation() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const categories = [
            'All', 'Today\'s Deals', 'Customer Service', 'Registry', 'Gift Cards',
            'Sell', 'Electronics', 'Books', 'Home & Garden', 'Fashion'
        ];

        return (
            <nav className="amazon-light-blue text-white py-2" data-name="navigation" data-file="components/Navigation.js">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-6 overflow-x-auto">
                        <button className="flex items-center space-x-1 whitespace-nowrap">
                            <i data-lucide="menu" className="w-4 h-4"></i>
                            <span>All</span>
                        </button>
                        
                        {categories.slice(1).map((category, index) => (
                            <button 
                                key={index}
                                className="whitespace-nowrap hover:underline text-sm"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navigation component error:', error);
        reportError(error);
    }
}
