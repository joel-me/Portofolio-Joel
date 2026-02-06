import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wbe7xrr",   // GANTI
        "template_64z09kr",  // GANTI
        form.current,
        "5oB11vLK_hGoZaxMN"     // GANTI
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
          Let's Create Together
        </h2>
        <p className="text-neutral-500 mb-12 max-w-lg mx-auto">
          Have a project in mind? Looking for a collaboration?
          Or just want to say hi? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col items-center justify-center p-8 bg-neutral-50 rounded-lg">
            <Mail className="w-10 h-10 mb-4 text-neutral-800" />
            <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Email Me</h3>
            <a href="mailto:joelsembiring700@gmail.com" className="text-neutral-600 hover:text-black transition-colors">
              joelsembiring700@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-neutral-50 rounded-lg">
            <div className="flex gap-6 mb-4">
              <Instagram className="w-8 h-8 text-neutral-800" />
              <Linkedin className="w-8 h-8 text-neutral-800" />
              <Twitter className="w-8 h-8 text-neutral-800" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Socials</h3>
            <p className="text-neutral-600">@joel_smb</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4 text-left">
          <div>
            <label className="block text-xs uppercase tracking-widest mb-2 text-neutral-500">Name</label>
            <input
              name="user_name"
              type="text"
              required
              className="w-full bg-transparent border-b border-neutral-300 py-2 focus:border-black focus:outline-none transition-colors"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest mb-2 text-neutral-500">Email</label>
            <input
              name="user_email"
              type="email"
              required
              className="w-full bg-transparent border-b border-neutral-300 py-2 focus:border-black focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest mb-2 text-neutral-500">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-neutral-300 py-2 focus:border-black focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 mt-8 uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
