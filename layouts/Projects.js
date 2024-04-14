import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { useRouter } from 'next/router'

const Contact = ({ data }) => {
  const router = useRouter()
  const [route, setRoute] = useState('/')
  const { frontmatter } = data;
  const { title } = frontmatter;

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/" + route)
    setLoading(true);

    emailjs
      .send(
        "service_pmu6moj",
        "template_k1w6z06",
        {
          from_name: form.name,
          to_name: "Javaid Khan",
          from_email: form.email,
          to_email: "relaxjavaid@gmail.com",
          message: form.message,
        },
        "user_7vLFgIaaTCvbsnjsvuYm0"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, We will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt=""
            />
          </div>
          <div className="animate lg:col-5">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Send A Message</h2>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input w-full"
                  name="name"
                  placeholder="Full Name"

                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input w-full"
                  placeholder="Email Address"
                  required
                />
              </div>
              {/* <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  required
                />
              </div> */}
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea name="message"
                  value={form.message}
                  required
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="form-textarea w-full" rows="6" />
              </div>
              <button onChange={(e) => { setRoute(e.target.value) }} type="submit" className="btn btn-primary block w-full">
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
