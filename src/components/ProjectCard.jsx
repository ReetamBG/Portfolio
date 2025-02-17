function ProjectCard(props) {
    return (
        <div
            className="card d-flex shadow-lg p-0 rounded-3 overflow-hidden text-white position-relative border-0 border-secondary my-3"
            style={{
                maxWidth: "25em",
                height: "32rem",
                background: "url(images/background_4_black.png)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Subtle Glow Effect on Hover */}
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

            {/* Ensure content fills the remaining space */}
            <div className="card-body d-flex flex-column">
                <h5 className="fs-5 fw-bold text-light mb-4">{props.project_title}</h5>
                <p className="text-secondary mb-4" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                    {props.project_description}
                </p>

                {/* Grouped frameworks and buttons together */}
                <div className="d-flex flex-wrap gap-2 mt-auto">
                    {/* Frameworks */}
                    {props.frameworks.map((item, index) => (
                        <button key={index} className="btn btn-sm btn-dark px-2 py-1 rounded-5 border-secondary">
                            {item}
                        </button>
                    ))}

                    {/* GitHub & Website buttons */}
                    <button className="btn btn-sm my-dark-bg px-3 my-1 rounded-2 border-secondary text-light"><i className="fa-brands fa-github me-2"></i>Github</button>
                    <button className="btn btn-sm btn-light px-3 my-1 rounded-2">Website</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;





// function ProjectCard({ project_title, image_url, frameworks }) {
//     return (
//         <div
//             className="card border-0 shadow-lg p-2 rounded-3 text-white position-relative"
//             style={{
//                 width: "22rem",
//                 height: "32rem",
//                 background: "rgba(255, 255, 255, 0.07)",
//                 backdropFilter: "blur(12px)",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
//             }}
//         >
//             {/* Subtle Glow Effect on Hover */}
//             <div
//                 className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
//                 style={{
//                     background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
//                     opacity: 0,
//                     transition: "opacity 0.3s ease",
//                 }}
//             ></div>

//             <img
//                 src={image_url}
//                 className="card-img-top rounded-1 mb-3"
//                 alt="Project Preview"
//                 style={{
//                     height: "180px",
//                     objectFit: "cover",
//                     borderRadius: "12px",
//                 }}
//             />

//             <div className="card-body">
//                 <h5 className="fs-4 fw-bold text-light">{project_title}</h5>
//                 <p className="text-secondary mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
//                     A sleek and powerful project designed for the modern web.
//                 </p>
//                 <div>
//                     {frameworks.map((item, index) => {
//                         return (
//                             <button key={index} className="btn btn-sm btn-dark">
//                                 {item}
//                             </button>
//                         );
//                     })}

//                 </div>
//                 <div className="d-flex gap-3">
//                     <a className="btn btn-sm btn-light">Source</a>
//                     <a className="btn btn-sm btn-light">Website</a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProjectCard;
