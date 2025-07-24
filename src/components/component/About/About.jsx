import about_pf from "../../../assets/image.jpeg"
import about_bg from "../../../assets/image1.jpg"

function About() {
    return (
        <>
            <section
                id="about"
                className="py-5 bg-light"
                style={{ backgroundImage: `url(${about_bg})` }}
            >
                <div className="container">
                    <h3 className="section-heading mb-6 text-center text-white" data-aos="fade-up">
                        About Me
                    </h3>
                    <div className="row">
                        <div className="d-flex justify-content-center col-md-6" data-aos="fade-right">
                            <img
                                src={about_pf}
                                alt="My Photo"
                                className="img-about"
                                width="30%"
                            />
                        </div>
                        <div className="col-md-1"></div>
                        <div
                            className="col-md-5 d-flex"
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <h1 className="text-center text-white">Riya Parmar</h1>
                            <h2 className="text-center text-white">Web Developer</h2>
                            <br />
                            <p data-aos="fade-up" style={{color:"white"}}>
                                Hello! I am a passionate individual who loves to explore technology,
                                create meaningful projects, and constantly learn new things. Welcome
                                to my portfolio!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;
