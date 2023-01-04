import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-navy text-lightest-slate md:h-screen"
    >
      <div
        className="flex flex-col p-4 justify-center w-full h-screen
      max-w-screen-lg mx-auto"
      >
        <div className="pt-24 md:pt-0">
          <p className="text-4xl font-bold border-b-4 border-lightest-slate inline">
            <span className="text-cyan">04.</span> Contact
          </p>
          <p className="py-6 text-lightest-slate">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/5a8f8c61-cb49-4ea5-9081-e5d0c5713c05"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-navy border-2 border-lightest-slate rounded-md
              text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-navy border-2 border-lightest-slate rounded-md
              text-white focus:outline-none"
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-navy border-2 border-lightest-slate rounded-md
              text-white focus:outline-none"
            ></textarea>

            <button
              className="text-cyan border-2 border-cyan
            px-6 py-3 my-8 mx-auto 
            rounded-md hover:scale-110 duration-300
            flex items-center"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
