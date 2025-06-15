function BackToTop() {
    try {
        const [isVisible, setIsVisible] = React.useState(false);

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        React.useEffect(() => {
            const toggleVisibility = () => {
                if (window.pageYOffset > 300) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };

            window.addEventListener('scroll', toggleVisibility);
            return () => window.removeEventListener('scroll', toggleVisibility);
        }, []);

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        if (!isVisible) return null;

        return (
            <button
                onClick={scrollToTop}
                className="back-to-top fade-in"
                data-name="back-to-top"
                data-file="components/BackToTop.js"
            >
                <i data-lucide="arrow-up" className="w-6 h-6"></i>
            </button>
        );
    } catch (error) {
        console.error('BackToTop component error:', error);
        reportError(error);
    }
}
