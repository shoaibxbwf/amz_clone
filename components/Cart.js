function Cart({ isOpen, onClose, cartItems, updateQuantity, removeFromCart }) {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 z-50 overflow-hidden" data-name="cart" data-file="components/Cart.js">
                <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
                <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-xl font-bold">Shopping Cart</h2>
                            <button onClick={onClose}>
                                <i data-lucide="x" className="w-6 h-6"></i>
                            </button>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-4">
                            {cartItems.length === 0 ? (
                                <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="flex items-center space-x-4 mb-4 p-4 border rounded">
                                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-sm">{item.title}</h4>
                                            <p className="text-lg font-bold text-red-600">{formatPrice(item.price)}</p>
                                            <div className="flex items-center space-x-2 mt-2">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="bg-gray-200 px-2 py-1 rounded"
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="bg-gray-200 px-2 py-1 rounded"
                                                >
                                                    +
                                                </button>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 ml-2"
                                                >
                                                    <i data-lucide="trash-2" className="w-4 h-4"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        
                        {cartItems.length > 0 && (
                            <div className="border-t p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-bold">Total: {formatPrice(total)}</span>
                                </div>
                                <button className="w-full amazon-orange text-white py-3 rounded font-bold hover:bg-yellow-500 transition-colors">
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
    }
}
