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
            style={{ backgroundImage: "url('/images/background_4.png')", backgroundSize: 'cover', height: "100%", width: "100%" }}
            className="d-flex justify-content-center pb-5"
        >
            <div ref={animateRef} className="ease-in-from-right container">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-6 order-1 order-md-2 mb-5 font-main text-md-end text-white font-hagrid">
                        <div className="display-3">
                            <p>About <span className="text-cyan">Me</span></p>
                            <a target="_blank" href="https://drive.google.com/file/d/14nfw8ii4sMMpztdkYVp_m78IuyEmZvDq/view?usp=drive_link"><button type="button" class="btn btn-danger mx-1 mt-3">My Resume</button></a>
                            <a target="_blank" href="https://github.com/ReetamBG"><button type="button" class="btn btn-light mx-1 mt-3">Github</button></a>
                            <a target="_blank" href="https://www.linkedin.com/in/reetam-borgohain-058063260/"><button type="button" class="btn btn-dark mx-1 mt-3">Linkedin</button></a>
                        </div>
                        {/* <div className="fs-4 mt-5">
                            <p>Skills</p>
                            <button type="button" class="btn btn-dark btn-sm mx-1 my-1">Machine Learning</button>
                            <button type="button" class="btn btn-dark btn-sm mx-1 my-1">Deep Learning</button>
                            <button type="button" class="btn btn-dark btn-sm mx-1 my-1">Github</button><br/>
                            <button type="button" class="btn btn-dark btn-sm mx-1 my-1">Linux</button>
                            <button type="button" class="btn btn-dark btn-sm mx-1 my-1">NLP</button>
                            <button type="button" class="btn btn-dark btn-sm mx-1 my-1">Github</button>
                        </div> */}
                    </div>

                    <div className="col-10 col-md-6 order-2 order-md-1 text-white">
                        <p className="fs-3 font-hagrid">
                            I'm <span className="text-cyan">Reetam</span>, an aspiring <span className="text-cyan">Data Scientist</span>
                        </p>
                        <p className="font-oxanium fs-5 text-secondary">
                            {/* Hey, I’m a Computer Science student with a passion for Machine Learning, Data Science, and Software Development. I love turning ideas into smart, efficient solutions—whether it’s a movie recommendation system, a WhatsApp chat analyzer, or a car price predictor.<br />
                        I had the incredible opportunity to intern at IIT Guwahati, where I optimized ML models for IoT devices. My goal? To push the boundaries of ML engineering and build AI-driven systems that make an impact.<br />
                        Always learning, always experimenting—ready to take on the next big challenge! <br /> */}
                            Hey, I’m a Computer Science student passionate about Machine Learning and Software Development.<br /><br />
                            I’ve built multiple AI-powered solutions, from hybrid recommendation systems to advanced data analytics tools.<br />
                            I also worked on various ML projects and interned at IIT Guwahati, where I optimized models for IoT applications.<br /><br />
                            Constantly learning, continuously building—driven to create impactful technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
