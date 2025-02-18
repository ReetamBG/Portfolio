function ProjectCard(props) {
    return (
        <div
            className="card d-flex shadow-lg p-0 rounded-3 overflow-hidden text-white position-relative border-0 border-secondary my-3"
            style={{
                // maxWidth: "26em",
                minHeight: "32rem",
                background: "url(images/background_4_black.png)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4"></div>

            <img
                src={props.image_url}
                className="card-img-top rounded-top-2 mb-3"
                alt="Project Preview"
                style={{
                    height: "40%",
                    objectFit: "cover",
                }}
            />

            <div className="card-body d-flex flex-column">
                <h5 className="fs-5 fw-bold text-light mb-4">{props.project_title}</h5>
                <p className="text-secondary mb-4" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                    {props.project_description}
                </p>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                    {/* Frameworks */}
                    <div>
                        {props.frameworks.map((item, index) => (
                            <button key={index} className="btn btn-sm btn-dark mx-1 my-1 rounded-5 my-button-small">
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* GitHub & Website buttons */}
                    <div>
                        <button className="btn btn-sm my-dark-bg px-3 my-1 rounded-2 border-secondary text-light"><i className="fa-brands fa-github me-2"></i>Github</button>
                        <button className="btn btn-sm btn-light px-3 my-1 rounded-2 ms-2">Website</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
