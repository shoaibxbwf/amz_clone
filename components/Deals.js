function Deals() {
    try {
        const [timeLeft, setTimeLeft] = React.useState({
            hours: 23,
            minutes: 45,
            seconds: 30
        });

        React.useEffect(() => {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev.seconds > 0) {
                        return { ...prev, seconds: prev.seconds - 1 };
                    } else if (prev.minutes > 0) {
                        return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                    } else if (prev.hours > 0) {
                        return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                    }
                    return prev;
                });
            }, 1000);

            return () => clearInterval(timer);
        }, []);

        const deals = [
            {
                title: "Lightning Deal",
                discount: "45% OFF",
                product: "OnePlus Buds Z2",
                price: 2799,
                originalPrice: 4999,
                image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop&auto=format"
            },
            {
                title: "Deal of the Day",
                discount: "60% OFF",
                product: "Fabindia Kurta Set",
                price: 1199,
                originalPrice: 2999,
                image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=200&h=200&fit=crop&auto=format"
            },
            {
                title: "Special Offer",
                discount: "35% OFF",
                product: "Prestige Cooker 5L",
                price: 1699,
                originalPrice: 2599,
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&auto=format"
            }
        ];

        return (
            <section className="py-12 amazon-orange" data-name="deals" data-file="components/Deals.js">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-4">Today's Deals</h2>
                        <div className="flex justify-center items-center space-x-4 text-white">
                            <span className="text-lg">Ends in:</span>
                            <div className="flex space-x-2">
                                <div className="bg-white text-black px-3 py-2 rounded font-bold">
                                    {String(timeLeft.hours).padStart(2, '0')}
                                </div>
                                <span className="text-2xl">:</span>
                                <div className="bg-white text-black px-3 py-2 rounded font-bold">
                                    {String(timeLeft.minutes).padStart(2, '0')}
                                </div>
                                <span className="text-2xl">:</span>
                                <div className="bg-white text-black px-3 py-2 rounded font-bold bounce-in">
                                    {String(timeLeft.seconds).padStart(2, '0')}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {deals.map((deal, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-center">
                                    <img 
                                        src={deal.image}
                                        alt={deal.product}
                                        className="w-20 h-20 object-cover rounded mx-auto mb-4"
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/200x200/f3f4f6/374151?text=" + encodeURIComponent(deal.product);
                                        }}
                                    />
                                    <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                                        {deal.discount}
                                    </span>
                                    <h3 className="text-lg font-bold mt-2">{deal.product}</h3>
                                    <div className="flex items-center justify-center space-x-2 mt-2">
                                        <span className="text-xl font-bold text-red-600">{formatPrice(deal.price)}</span>
                                        <span className="text-gray-500 line-through text-sm">{formatPrice(deal.originalPrice)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Deals component error:', error);
        reportError(error);
    }
}
