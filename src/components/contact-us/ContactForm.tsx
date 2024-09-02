"use client";

import { useState } from "react";
import { submitContactForm } from "./actions";

function ContactForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmitForm: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setSubmitSuccess(false);
    setSubmitError(null);

    const formData = new FormData(event.target as HTMLFormElement);
    const data = await submitContactForm(formData);

    if (data.success) {
      setSubmitSuccess(true);
    } else {
      setSubmitError(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center lg:items-stretch gap-8">
      <h2 className="text-headingRegMob lg:text-headingReg text-primary font-title font-bold">
        Get in Touch:
      </h2>
      <div className="px-8 bg-white py-2 rounded-lg w-full">
        {!submitSuccess && (
          <form onSubmit={onSubmitForm} className="flex flex-col w-full gap-10">
            <div className="flex gap-4 lg:gap-6">
              <label
                htmlFor="name"
                className="lg:grow flex flex-col font-bold text-primary"
              >
                Name *
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="input font-normal w-full"
                  required
                />
              </label>
              <label
                htmlFor="email"
                className="grow flex flex-col font-bold text-primary"
              >
                Email *
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="input font-normal w-full"
                  required
                />
              </label>
            </div>
            <label
              htmlFor="message"
              className="grow flex flex-col font-bold text-primary"
            >
              Message *
              <textarea
                id="message"
                name="message"
                className="input font-normal w-full"
                required
              />
            </label>
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            ></input>
            {submitError && (
              <p className="text-sm text-red-500">{submitError}</p>
            )}
            <div className="flex justify-end">
              <button className="btn btn--primary" type="submit">
                Send Message
              </button>
            </div>
          </form>
        )}
        {submitSuccess && <p>Your message has been sent successfully!</p>}
      </div>
    </div>
  );
}

export default ContactForm;
