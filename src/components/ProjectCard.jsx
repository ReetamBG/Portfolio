function ProjectCard({ project_title, image_url, frameworks }) {
    return (
        <div
            className="card border-0 shadow-lg p-2 rounded-3 text-white position-relative"
            style={{
                width: "22rem",
                height: "32rem",
                background: "rgba(255, 255, 255, 0.07)",
                backdropFilter: "blur(12px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
            }}
        >
            {/* Subtle Glow Effect on Hover */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                }}
            ></div>

            <img
                src={image_url}
                className="card-img-top rounded-1 mb-3"
                alt="Project Preview"
                style={{
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "12px",
                }}
            />

            <div className="card-body">
                <h5 className="fs-4 fw-bold text-light">{project_title}</h5>
                <p className="text-secondary mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                    A sleek and powerful project designed for the modern web.
                </p>
                <div>
                    {frameworks.map((item, index) => {
                        return (
                            <button key={index} className="btn btn-sm btn-dark">
                                {item}
                            </button>
                        );
                    })}

                </div>
                <div className="d-flex gap-3">
                    <a className="btn btn-sm btn-light">Source</a>
                    <a className="btn btn-sm btn-light">Website</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
