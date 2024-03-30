import React, { useState } from "react";

const Payment = () => {
  // State variables for payment form fields
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle the form submission, such as sending data to a server
    console.log("Form submitted!");
  };

  return (
    <div className="font-montserrat flex justify-center items-center h-screen">
      <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-center items-center gap-5">
        <div className="text-red-500 text-2xl font-semibold leading-9">Payment Information</div>
        <form onSubmit={handleSubmit} className="w-full sm:w-[50%] flex flex-col gap-5">
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <input
            type="text"
            placeholder="Card Holder Name"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            className="p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
