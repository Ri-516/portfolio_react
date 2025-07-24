import { useRef } from "react"
import About from "../components/component/About/About"
import Footer from "../components/component/Footer/Footer"
import Header from "../components/component/Header/Header"
import Hobbies from "../components/component/Hobbies/Hobbies"
import Skills from "../components/component/Skills/Skills"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fb1vqkq', 'template_iu4hqai', form.current, {
                publicKey: 'xDIJPUe6rLkSeq8iG',
            })
            .then(
                () => {
                    toast.success("Email sent successfully!");
                    form.current.reset(); // ✅ Reset form
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    toast.error("Failed to send email. Please try again.");
                },
            );
    };

    return (
        <>
            <Header />
            <About />
            <Hobbies />
            <Skills />

            <section id="resume" className="py-5">
                <div className="container text-center">
                    <h3 className="section-heading mb-4" data-aos="fade-right">My Resume</h3>
                    <p data-aos="fade-up">Click the button below to view or download my resume.</p>
                    <a href="resume.pdf.pdf">

                        View Resume
                    </a>
                </div>
            </section>

            <section id="contact" className="py-5 bg-light">
                <div className="container">
                    <h3 className="section-heading mb-4" data-aos="fade-up">Contact Me</h3>
                    <form id="contact-form" onSubmit={sendEmail} ref={form}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Name</label>
                                <input type="text" name="from_name" className="form-control" required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input type="email" name="from_email" className="form-control" required />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Message</label>
                                <textarea name="message" className="form-control" rows="4" required></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Send Email</button>
                            </div>
                        </div>
                    </form>


                </div>
            </section>


            <Footer />
                  <ToastContainer position="top-center" autoClose={3000} />

        </>
    )
}
export default HomePage