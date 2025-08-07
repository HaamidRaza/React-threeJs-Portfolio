import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();

    const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
    useEffect(() => {
      const hasQuery = location.search.length > 0;
      if (hasQuery) {
        navigate(location.pathname + location.hash, { replace: true });
      }
    }, [location, navigate]);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    try {
      await emailjs.send(
        "service_o2b50io",
        "template_48co3za",
        {
          title: form.email,
          name: form.name,
          to_email: "achatheekhai9@gmail.com",
          message: form.message,
        },
        "lbtzQQ2JeQis386Ve"
      );
      setLoading(false);
      Swal.fire({
        title: "Message Delivered!",
        text: "Will Be In Contact Soon...",
        icon: "success",
        confirmButtonText: "Great!",
        background: "#1a1a1a",
        color: "#f1f1f1",
        confirmButtonColor: "#3282F6",
        iconColor: "#3282F6",
      });
    } catch (e) {
      console.log(e);
      Swal.fire({
        title: "ERROR",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "Close",
        background: "#1f1f1f",
        color: "#fff",
      });
    }
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section className="c-space my-20" id="#contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/bg-city.webp"
          alt="terminal"
          className="absolute inset-0 min-h-screen opacity-30 xs:opacity-20"
        />
        <div className="contact-container">
          <h3 className="head-text">Connect with me</h3>
          <p className="text-lg text-white-600 mt-1">
            If you're looking for someone who's passionate, honest, quick to
            adapt, and always eager to learn, I'm your guy. I enjoy solving
            problems and finding smart, simple solutions.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Haamid"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="haamidshaikh1@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Messaage</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Hey, You Are Hired...."
              />
            </label>
            <button className="field-btn hover:bg-[#2e2e3b]" type="submit" disabled={loading}>
              {loading ? "Delivering.." : "Send Message"}
              <img
                src="assets/arrow-up.png"
                alt="arrow"
                className="field-btn-arrow h-3"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
