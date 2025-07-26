import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const result = await emailjs.send(
        "service_9gswh3d", // ✅ Your EmailJS Service ID
        "template_qm6dvun", // ✅ Your EmailJS Template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          message: formData.message,
          to_email: "coprevosolutions@gmail.com", // ✅ Make sure to add this variable to your EmailJS template
        },
        "QnwTKlygJd5eKVrgl" // ✅ Your EmailJS Public Key
      );

      console.log("EmailJS Response:", result);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            ✅ Message Sent!
          </h2>
          <p className="text-gray-700 mb-6">
            Thank you for contacting us. We’ll get back to you shortly.
          </p>
          <button
            onClick={() => setStatus("")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-4"
          >
            Send Another Message
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        />

        <textarea
          name="message"
          placeholder="Briefly describe what you're looking for"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 h-24"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">
            ❌ Failed to send message. Please try again.
          </p>
        )}

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-blue-600 underline hover:text-blue-800"
          >
            ← Back to Home
          </button>
        </div>
      </form>
    </div>
  );
}
