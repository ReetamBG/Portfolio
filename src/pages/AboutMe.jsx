import { useEffect, useRef } from "react";

function AboutMe() {
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
            style={{ backgroundImage: "url('/images/background_4.png')", backgroundSize: 'cover', height: "100%" }}
            className="100-vw d-flex justify-content-center pb-5"
        >
            <div ref={animateRef} className="ease-in-from-right container">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-6 order-1 order-md-2 mb-5 font-main display-3 text-md-end text-white font-hagrid">
                        <p>About <span className="text-cyan">Me</span></p>
                        <button type="button" class="btn btn-danger mx-1 mt-3">My Resume</button>
                        <button type="button" class="btn btn-light mx-1 mt-3">Github</button>
                        <button type="button" class="btn btn-dark mx-1 mt-3">Linkedin</button>
                    </div>
                    
                    <div className="col-10 col-md-6 order-2 order-md-1 text-white">
                        <p className="fs-3 font-hagrid">
                            I'm <span className="text-cyan">Reetam</span>, an aspiring <span className="text-cyan">Data Scientist</span>
                        </p>
                        <p className="font-oxanium fs-5 text-secondary">
                            {/* Hey, I’m a Computer Science student with a passion for Machine Learning, Data Science, and Software Development. I love turning ideas into smart, efficient solutions—whether it’s a movie recommendation system, a WhatsApp chat analyzer, or a car price predictor.<br />
                        I had the incredible opportunity to intern at IIT Guwahati, where I optimized ML models for IoT devices. My goal? To push the boundaries of ML engineering and build AI-driven systems that make an impact.<br />
                        Always learning, always experimenting—ready to take on the next big challenge! <br /> */}
                            Hey, I’m a Computer Science student with a passion for Machine Learning, and Software Development.<br /><br />
                            I've build multiple AI-powered solutions, from recommendation systems to data analytics tools.<br />
                            Worked on multiple ML projects and interned at IIT Guwahati, optimizing models for IoT.<br /><br />
                            Always learning, always building—excited to create impactful technology.<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
