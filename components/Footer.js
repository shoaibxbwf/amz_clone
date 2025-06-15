function Footer({ onBackToTop }) {
    try {
        const footerSections = [
            {
                title: "Get to Know Us",
                links: ["Careers", "Blog", "About Amazon", "Investor Relations", "Amazon Devices", "Amazon Science"]
            },
            {
                title: "Make Money with Us",
                links: ["Sell products on Amazon", "Sell on Amazon Business", "Sell apps on Amazon", "Become an Affiliate", "Advertise Your Products", "Self-Publish with Us"]
            },
            {
                title: "Amazon Payment Products",
                links: ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"]
            },
            {
                title: "Let Us Help You",
                links: ["Amazon and COVID-19", "Your Account", "Your Orders", "Shipping Rates & Policies", "Returns & Replacements", "Manage Your Content and Devices"]
            }
        ];

        return (
            <footer className="amazon-blue text-white mt-12" data-name="footer" data-file="components/Footer.js">
                <div className="bg-gray-700 py-4">
                    <div className="container mx-auto px-4 text-center">
                        <button 
                            onClick={onBackToTop}
                            className="text-white hover:underline transition-all duration-300 hover:scale-105"
                        >
                            Back to top
                        </button>
                    </div>
                </div>
                
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {footerSections.map((section, index) => (
                            <div key={index} className="slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                                <h3 className="font-bold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href="#" className="text-gray-300 hover:underline text-sm hover:text-white transition-colors duration-200">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="border-t border-gray-600 py-4">
                    <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
                        <p>&copy; 2025 Amazon Clone. All rights reserved. | Cloned by Shoaib</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
