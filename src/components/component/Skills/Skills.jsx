function Skills() {
    return (
        <>
            <div>
                <section
                    id="skills"
                    className="py-5"
                    style={{
                        background: "linear-gradient(to right, #050237, #090979, #00d4ff)",
                        color: "white",
                    }}
                >
                    <div className="container">
                        <h3
                            className="section-heading mb-4 text-white"
                            data-aos="fade-down"
                        >
                            My Skills
                        </h3>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <label>
                                    HTML <span className="float-end">95%</span>
                                </label>
                                <div className="progress bg-light">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "95%" }}
                                        data-aos="zoom-in-right"
                                    ></div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label>
                                    CSS <span className="float-end">90%</span>
                                </label>
                                <div className="progress bg-light">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "90%" }}
                                        data-aos="zoom-in-right"
                                    ></div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label>
                                    JavaScript <span className="float-end">70%</span>
                                </label>
                                <div className="progress bg-light">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        data-aos="zoom-in-right"
                                    ></div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label>
                                    C <span className="float-end">80%</span>
                                </label>
                                <div className="progress bg-light">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "85%" }}
                                        data-aos="zoom-in-right"
                                    ></div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label>
                                    C++ <span className="float-end">87%</span>
                                </label>
                                <div className="progress bg-light">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "88%" }}
                                        data-aos="zoom-in-right"
                                    ></div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label>
                                    SQL <span className="float-end">75%</span>
                                </label>
                                <div className="progress bg-light">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "75%" }}
                                        data-aos="zoom-in-right"
                                    ></div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label>
                                    Bootstrap <span className="float-end">90%</span>
                                </label>
                                <div className="progress bg-light">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "90%" }}
                                        data-aos="zoom-in-right"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Skills;
