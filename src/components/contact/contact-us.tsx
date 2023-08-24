import { useEffect } from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { FieldValues, useForm } from "react-hook-form";
import boxes from "../../data/contact-details";
import "react-toastify/dist/ReactToastify.css";
import "../../css/contact.css";

function Contact() {
  interface FormData {
    email: string;
    message: string;
  }

  const { register, handleSubmit, reset } = useForm<FormData>();

  let onSubmit = (data: FieldValues) => {
    toast.info("Your message has been successfully sent!");
    reset();

    // code to send the message to the NGO via an external library
  };

  useEffect(() => {
    toast.info("Thank you for reaching out to us!");
  }, []);

  return (
    <section>
      <div className="container">
        <div className="contact">
          <h2 className="link__heading" data-aos="flip-up">
            Contact Us!
          </h2>
          <div className="contact__header">
            <div className="contacts-boxes">
              {boxes.map((b) => (
                <div key={b.title} data-aos="zoom-in" className="contact-box">
                  <span>{b.icon}</span>
                  <h3 className="contact__title">{b.title}</h3>
                  <p className="contact__desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="contact__body block--skewed-left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  {...register("email")}
                  placeholder="Enter your email"
                  id="contact-email"
                  type="email"
                  maxLength={30}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  {...register("message")}
                  placeholder="Enter your message"
                  name="message"
                  id="contact-message"
                  cols={30}
                  rows={10}
                  minLength={10}
                  required
                ></textarea>
              </div>
              <button
                className="btn btn--outline btn--block contact__btn"
                type="submit"
              >
                Submit
              </button>
            </form>
            <div className="greet">
              <h2 className="greet__title">Get in touch</h2>
              <p className="greet__liability">
                &gt; By getting in touch with us, you'll be contributing to free
                training sessions that equip Lebanese youth with essential
                skills and help them find suitable jobs.
                <br />
                <hr />
                &gt; Together, we can uplift communities, unleash potential, and
                pave the way for a stronger, more prosperous generation.
                <br />
                <hr />
                &gt; Your participation can spark a positive impact that ripples
                through generations. Contact us today and be part of this
                journey.
              </p>
              <div className="social-apps">
                <span className="clickable">
                  <FiFacebook fontSize="2em" />
                </span>
                <span className="clickable">
                  <FiInstagram fontSize="2em" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </section>
  );
}

export default Contact;
