function ProductCard({ product, onAddToCart }) {
    try {
        const [imageLoaded, setImageLoaded] = React.useState(false);
        const [imageError, setImageError] = React.useState(false);
        
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleAddToCart = () => {
            onAddToCart(product);
        };

        const renderStars = (rating) => {
            const stars = [];
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;

            for (let i = 0; i < fullStars; i++) {
                stars.push(<i key={i} data-lucide="star" className="w-4 h-4 fill-yellow-400 text-yellow-400"></i>);
            }
            
            if (hasHalfStar) {
                stars.push(<i key="half" data-lucide="star-half" className="w-4 h-4 fill-yellow-400 text-yellow-400"></i>);
            }

            return stars;
        };

        return (
            <div className="bg-white rounded-lg shadow product-hover p-4" data-name="product-card" data-file="components/ProductCard.js">
                <div className="relative mb-4">
                    {!imageLoaded && !imageError && (
                        <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                        </div>
                    )}
                    <img 
                        src={product.image} 
                        alt={product.title}
                        className={`w-full h-48 object-cover rounded ${imageLoaded ? 'block' : 'hidden'}`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => {
                            setImageError(true);
                            setImageLoaded(true);
                        }}
                    />
                    {imageError && (
                        <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <i data-lucide="image" className="w-8 h-8 mx-auto mb-2"></i>
                                <p className="text-sm">Product Image</p>
                            </div>
                        </div>
                    )}
                    {product.discount && imageLoaded && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                            -{product.discount}%
                        </span>
                    )}
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.title}
                </h3>
                
                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <span className="text-2xl font-bold text-red-600">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                                {formatPrice(product.originalPrice)}
                            </span>
                        )}
                    </div>
                </div>

                <button 
                    onClick={handleAddToCart}
                    className="w-full amazon-orange text-white py-2 rounded font-semibold hover:bg-yellow-500 transition-colors"
                >
                    Add to Cart
                </button>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
    }
}
