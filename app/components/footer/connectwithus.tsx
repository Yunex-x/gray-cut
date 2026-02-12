'use client'
import React from "react";

const ConnectWithUs = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <h1 className="  mb-4">
        CONNECT WITH US!
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 w-full"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 min-w-0 py-3.5 px-4 border  focus:outline-none"
        />

        <button
          type="submit"
          className="bg-primary py-4 px-5 text-sm  whitespace-nowrap"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default ConnectWithUs;
