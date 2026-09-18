import React, { useState } from "react";
import Heading from "../Components/Heading";
import { FiCheckCircle, FiLoader } from "react-icons/fi";

const Contact = React.forwardRef(function Contact(props, ref) {
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const labelStyle = "text-text-secondary text-xs font-medium tracking-wide";
  const inpStyle =
    "w-full text-text-secondary text-sm bg-surface-hover p-2.5 rounded-lg placeholder-text-muted/70 border border-border-subtle outline-none focus:border-orange-500/60 focus:bg-card transition-all duration-200 placeholder:text-xs";
  const opStyle = "text-text-secondary text-xs bg-surface-hover";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section ref={ref} data-name="Contact" className="scroll-mt-28">
      <div className="mb-10">
        <Heading FWord="LET'S WORK" LWord="TOGETHER" />
      </div>

      <div className="bg-card backdrop-blur-xl border border-border-subtle p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] group-hover:bg-orange-500/10 transition-all duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] group-hover:bg-orange-500/10 transition-all duration-700"></div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center text-center py-12 px-4 gap-4 relative z-10 animate-fadeIn">
            <div className="h-16 w-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-2">
              <FiCheckCircle size={36} />
            </div>
            <h3 className="text-text-main text-2xl font-bold tracking-tight">
              Message Received!
            </h3>
            <p className="text-text-secondary max-w-md text-sm sm:text-base leading-relaxed">
              Thank you for reaching out. Your message has been sent successfully, and I will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 px-6 py-2.5 rounded-full bg-border-subtle border border-border-strong text-text-main text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <input type="hidden" name="access_key" value="7c1f17e0-6906-49bd-aa91-c2859b180050" />

            {/* Name + Email row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col flex-1 gap-2.5">
                <label htmlFor="name" className={labelStyle}>Your Full Name</label>
                <input name="name" id="name" type="text" placeholder="John Doe" className={inpStyle} required />
              </div>
              <div className="flex flex-col flex-1 gap-2.5">
                <label htmlFor="email" className={labelStyle}>Email Address</label>
                <input name="email" id="email" type="email" placeholder="john@example.com" className={inpStyle} required />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2.5">
              <label htmlFor="subject" className={labelStyle}>Subject of Interest</label>
              <div className="relative">
                <select
                  name="subject"
                  id="subject"
                  defaultValue="freelance"
                  className={`${inpStyle} appearance-none cursor-pointer`}
                >
                  <option value="freelance" className={opStyle}>Freelance Project</option>
                  <option value="job" className={opStyle}>Job Opportunity</option>
                  <option value="hi" className={opStyle}>Just Saying Hi!</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C2.185 5.355 2.403 5 2.808 5h10.384a.207.207 0 0 1 .173.344l-4.796 5.482a.25.25 0 0 1-.397 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2.5">
              <label htmlFor="message" className={labelStyle}>Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell me about your project..."
                className={inpStyle}
                rows="6"
                required
              />
            </div>

            {/* Error banner */}
            {status === "error" && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-text-main text-[var(--bg-base)] font-bold py-4 rounded-2xl text-lg tracking-widest uppercase hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-orange-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <FiLoader className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
});

export default Contact;
