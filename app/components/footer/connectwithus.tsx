'use clinet'
import React from "react";

const ConnectWithUs = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1>CONNECT WITH US!</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" className="py-8 px-5" />
        <button type="submit" className="bg-primary py-8 px-4">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default ConnectWithUs;
