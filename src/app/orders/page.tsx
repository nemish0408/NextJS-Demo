"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Orders = () => {
  const router = useRouter();
  
  const placeOrder = () => {
    console.log("Order Placed");
    router.replace("/");
  };
  return (
    <div className="w-full pt-8 text-center">
      <button
        onClick={() => placeOrder()}
        className="mx-auto px-3 py-2 ease-in-out duration-300 bg-black text-white border-2 border-black rounded-xl hover:bg-white hover:text-black"
      >
        Place Order
      </button>
    </div>
  );
};

export default Orders;
