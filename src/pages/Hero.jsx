import { useEffect, useRef } from "react";

function Hero() {
    const animateRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (animateRef.current) {
                const rect = animateRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Fully visible (animate in)
                if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
                    animateRef.current.classList.add("animate");
                }
                // Fully out of view (reset animation)
                else if (rect.bottom <= 0 || rect.top >= windowHeight) {
                    animateRef.current.classList.remove("animate");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run on page load

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div 
            style={{ backgroundImage: "url('/images/background_1_black.png')", backgroundSize: 'cover', height: "100vh", width: "100%"}}
            className="d-flex justify-content-center align-items-center"
        >
            <div ref={animateRef} className="ease-in-from-left container justify-content-center">
                <div className="row justify-content-center justify-content-md-start">
                    <div className="col-10 col-md-8">
                        <div className="display-1 text-white font-hagrid mb-4">
                            <span>Hi, I'm </span>
                            <span className="text-cyan">Reetam Borgohain,</span>
                        </div>
                        <div className="display-6 text-white font-oxanium">
                            an aspiring Data Scientist
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
