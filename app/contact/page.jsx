'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

export default function page() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message received!');
      setFormData({ name: '', email: '', message: '' });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white p-6 md:p-12 grid place-items-center" id="contact">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-300 to-purple-500 text-transparent bg-clip-text mb-4">
          Contact Me
        </h1>
        <p className="text-gray-400 mb-10">
          Have a project in mind? I'd love to hear from you. Reach out through any of the channels below.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#151515] rounded-2xl p-6 border border-[#1F1F1F] relative overflow-hidden">
            <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-2xl opacity-20" />
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="text-green-400" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-gray-300">f13ray@gmail.com</p>
          </div>

          <div className="bg-[#151515] rounded-2xl p-6 border border-[#1F1F1F] relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-2xl opacity-20" />
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="text-yellow-400" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="text-gray-300">+27 74 799 6927</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="bg-[#1A1A1A] border border-[#2A2A2A] p-4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              className="bg-[#1A1A1A] border border-[#2A2A2A] p-4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message"
            className="bg-[#1A1A1A] border border-[#2A2A2A] p-4 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className="self-start bg-sky-500 hover:bg-sky-600 transition-colors px-6 py-3 rounded-xl font-semibold text-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
