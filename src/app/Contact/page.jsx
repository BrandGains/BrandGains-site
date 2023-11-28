"use client";
import React, { useState } from "react";


const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        companyname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setCompanyname("");
      setEmail("");
      setMessage("");
    }
    setTimeout(() => {
      setError([]);
    }, 5000);
  };

  return (
    <>
      <div className="min-h-screen">
        <h1 className="text-center text-blue-950 text-6xl my-6 font-bold">
          Make Your Brand Grow
        </h1>
        <div className="relative flex items-top justify-center sm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight">
                    Let&apos;s Connect
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 mt-2">
                    Ready to turn ideas into reality? Fill in the form below,
                    and let&apos;s start a conversation.
                  </p>

                  <div className="flex items-center mt-2 text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      brandgains@gmail.com
                    </div>
                  </div>
                </div>

                <form className="p-6 flex flex-col justify-center">
                  <div className="bg-slate-100 flex flex-col mt-2 rounded-md">
                    {error &&
                      error.map((e, index) => (
                        <div
                          key={index}
                          className={`${
                            success ? "text-green-800" : "text-red-600"
                          } px-5 py-2`}
                        >
                          *{e}
                        </div>
                      ))}
                  </div>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      onChange={(e) => setFullname(e.target.value)}
                      value={fullname}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="company" className="hidden">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company Name"
                      onChange={(e) => setCompanyname(e.target.value)}
                      value={companyname}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="message" className="hidden">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message..."
                      rows="4"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold resize-none focus:border-indigo-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
