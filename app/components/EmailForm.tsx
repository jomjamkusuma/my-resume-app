import React from "react";
import Link from "next/link";
import { Input } from "../components/FormInput";

const EmailForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 h-screen w-screen backdrop-blur-xs">
      <div className="rounded-lg bg-[#000] border-1 border-white/20 w-3/4 md:w-fit">
        <div className="">
          <div className="flex justify-end border-gray-600">
            <Link href="/" scroll={false}>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="px-4 md:px-5 space-y-4">
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <fieldset>
                  <label htmlFor="firstname">First name</label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </fieldset>
                <fieldset>
                  <label htmlFor="lastname">Last name</label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </fieldset>
              </div>
              <fieldset className="mb-4">
                <label htmlFor="email">Email Address</label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                />
              </fieldset>
              <button
                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="submit"
              >
                Connect &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
