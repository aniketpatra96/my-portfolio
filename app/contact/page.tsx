"use client";
import { motion } from "framer-motion";
import { FormEvent, ReactElement, RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@heroui/progress";

export default function ContactPage(): ReactElement {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const text: string = "Say Hello";

  const form: RefObject<HTMLFormElement | null> =
    useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        form.current || "",
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form?.current?.reset();
        },
        () => {
          setError(true);
        }
      );
    setLoading(false);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full lg:w-1/2 bg-red-50 rounded-xl text-lg flex flex-col gap-6 justify-center p-6 sm:p-8 md:p-12"
        >
          <span className="text-base sm:text-lg">Dear Lama Dev,</span>

          <textarea
            title="user_message"
            rows={6}
            className="w-full bg-transparent border-b-2 border-b-black outline-none resize-none py-3 text-base"
            name="user_message"
          />

          <span className="text-base sm:text-lg">My mail address is:</span>

          <input
            title="user_email"
            name="user_email"
            type="text"
            className="w-full bg-transparent border-b-2 border-b-black outline-none py-2 text-base"
          />

          <span className="text-base sm:text-lg">Regards</span>

          {loading ? (
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
              <div className="flex items-center gap-4">
                <CircularProgress
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  aria-label="Loading..."
                  color="primary"
                  size="md"
                />
                <div
                  className="w-8 h-8 rounded-full border-4 border-gray-300 border-t-transparent animate-spin"
                  aria-hidden="true"
                />
              </div>
              <span className="text-gray-600 font-medium">Sending…</span>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full md:w-auto bg-purple-200 rounded font-semibold text-gray-600 p-3 sm:px-6 sm:py-4"
            >
              Send
            </button>
          )}

          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}

          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}
