import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setResponseMsg("Please fill all fields");
      return;
    }

    setLoading(true);
    setResponseMsg(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResponseMsg(data.msg || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setResponseMsg(data.msg || "Failed to send message.");
      }
    } catch (error) {
      setResponseMsg("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to drop a message. I’d love to connect!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="5"
            required
          />
        </div>

        <button className="contact-btn" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {responseMsg && (
          <p style={{ marginTop: "1rem", color: "#B19CD9", fontWeight: "600" }}>
            {responseMsg}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
