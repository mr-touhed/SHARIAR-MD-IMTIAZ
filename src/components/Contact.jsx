
import  { useContext, useRef } from "react";
import { MdEmail, MdWhatsapp, MdLocationOn } from "react-icons/md";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "./SectionTitle";
import { NavigateContxt } from "../Context/NavigateContext";

const Contact = () => {
  const {contacthref} = useContext(NavigateContxt)
  const emailServiceId =  "";
  const emailTemplateId =  "";
  const emailPublicKey =  "";

  const form = useRef(null);
  const contactInfo = [
    { logo: <MdEmail />, text: "shariar.md.imtiaz@gmail.com" },
    { logo: <MdWhatsapp />, text: "+8801750 310 100 [whatsapp]" },
    {
      logo: <MdLocationOn />,
      text: "Seoul, South Korea",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          `${emailServiceId}`,
          `${emailTemplateId}`,
          form.current,
          `${emailPublicKey}`
        )
        .then(
          (result) => {
            //console.log(result.text);
          },
          (error) => {
            //console.log(error.text);
          }
        );
    } else {
      console.error("Form is not defined");
    }
  };
  const notify = () => toast.success("Message sent!");

  return (
    <section id="contact my-8" ref={contacthref}>
     
        <SectionTitle>
            Contact
        </SectionTitle>

        <div className="text-center mt-8 dark:bg-slate-800 ">
          <p className="dark:text-neutral-100  mt-3 text-xl">Get in touch</p>

          <div
            className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl md:p-6 p-2 rounded-lg mx-auto"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col flex-1 gap-5"
            >
              <input
                name="from_name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                name="from_email"
                type="Email"
                placeholder="Your Email Address"
                className="input input-bordered w-full"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered"
                rows={10}
              ></textarea>
              <input
                onClick={notify}
                type="submit"
                value="Send Message"
                className="btn max-w-xs border border-teal-500 bg-white hover:bg-teal-500"
              />
            </form>
            <div className="flex flex-col  gap-7 ">
              <div>
                <h1 className="font-semibold text-xl text-left dark:text-neutral-100">
                  Contact Information
                </h1>
                <p className="text-left text-lg py-2 dark:text-neutral-100">
                  Please email me to reach out.
                </p>
              </div>
              {contactInfo.map((contact, i) => (
                <div
                  key={i}
                  className="flex flex-row  
                  text-left gap-4 flex-wrap items-center p-4 border border-teal-100 rounded-lg"
                >
                  <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-teal-600 rounded-full">
                    {contact.logo}
                  </div>
                  <p className="md:text-base text-sm  break-words dark:text-neutral-100">
                    {contact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer />
    
    </section>
  );
};

export default Contact;
