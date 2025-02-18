import { useEffect, useState, useRef } from "react";


function Contact() {

    const [messageDetails, setMessageDetails] = useState({})

    function handleMessageDetailsChange(e) {
        setMessageDetails({...messageDetails, [e.target.name]: e.target.value})
    }

    function handleSendMessage() {
        console.log(messageDetails)
    }

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
            id="contact"
            style={{ backgroundImage: "url('/images/background_4_black.png')", backgroundSize: 'cover', height: "100%", width: "100%" }}
            className="d-flex justify-content-center pb-5 py-5"
        >
            <div ref={animateRef} className="ease-in-from-right container">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-6 col-lg-6 order-1 order-md-2 mb-5 font-main text-md-end text-white font-hagrid">
                        <div className="row justify-content-end">
                            <div className="display-3">
                                <p>Contact <span className="text-cyan">Me</span></p>
                                <p className="text-secondary fs-4 ps-3">-- Get in touch --</p>
                                <div className="row">
                                    <a target="_blank" href="https://www.linkedin.com/in/reetam-borgohain-058063260/">
                                        <button type="button" className="btn btn-dark mx-2 mt-3">
                                            <img src="/images/person_icon.png" alt="LinkedIn" style={{ width: "20px", marginRight: "8px", position: "relative", top: "-2px" }} />
                                            Reetam Borgohain
                                        </button>
                                    </a>
                                </div>
                                <a target="_blank" href="#">
                                    <button type="button" className="btn btn-dark mx-2 mt-3">
                                        <img src="/images/location_icon.png" alt="LinkedIn" style={{ width: "20px", marginRight: "8px", position: "relative", top: "-2px" }} />
                                        Jorhat, Assam, India
                                    </button>
                                </a>
                                <a target="_blank" href="#">
                                    <button type="button" className="btn btn-dark mx-2 mt-3">
                                        <img src="/images/gmail_icon.png" alt="LinkedIn" style={{ width: "20px", marginRight: "8px", position: "relative", top: "-2px" }} />
                                        Email
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-md-6 col-lg-6 order-2 order-md-1 text-white" data-bs-theme="dark">
                        <div className="row">
                            <p className="fs-4 font-hagrid mb-4">
                                <div className="text-cyan">Message Me</div>
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="form-floating mb-3">
                                    <input onChange={handleMessageDetailsChange} type="text" className="form-control bg-black" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Name</label>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="form-floating">
                                    <input onChange={handleMessageDetailsChange} type="email" className="form-control bg-black mb-3" id="floatingInput" placeholder="email" />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <input onChange={handleMessageDetailsChange} type="text" className="form-control bg-black" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Subject</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea onChange={handleMessageDetailsChange} className="form-control bg-black mb-4" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "150px" }}></textarea>
                                    <label htmlFor="floatingTextarea2">Message</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={handleSendMessage} className="btn btn-danger col-5 col-lg-3 rounded-3 mx-3">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
