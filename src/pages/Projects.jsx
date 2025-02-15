import { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
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
            style={{ backgroundImage: "url('/images/background_2.png')", backgroundSize: 'cover', height: "100vh", paddingTop: "10%" }}
            className="d-flex justify-content-center"
        >
            <div ref={animateRef} className="ease-in-from-left container">
                <div className="row mb-5 pb-5 justify-content-center justify-content-md-start">
                    <div className="col-10 col-md-12 display-5 text-white font-hagrid">
                        Checkout My Work
                    </div>
                </div>
                <div className="row justify-content-center gap-5">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}

export default Projects;
