import { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

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
            style={{ backgroundImage: "url('/images/background_2.png')", backgroundSize: '50%',  backgroundRepeat: "no-repeat", height: "100%", width: "100%", paddingTop: "10%" }}
            className="d-flex justify-content-center pb-5 my-dark-bg"
        >
            <div ref={animateRef} className="ease-in-from-left container">
                <div className="row mb-4 justify-content-center justify-content-md-start">
                    <div className="col-10 col-md-12 font-hagrid mb-5">
                        <p className="display-3 text-white">Checkout <span className="text-cyan">My Work</span></p>
                        <p className="text-secondary fs-4 ps-3">Here goes some of my projects</p>
                    </div>
                </div>
                <div className="row justify-content-center gap-4 px-4 px-md-0">
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                project_title={project.title}
                                image_url={project.image}
                                frameworks={project.frameworks}
                                project_description={project.description}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;
