import React from "react";
import Link from "next/link";


const F4Page = () => {
  return (
    <>
      <h1>F4Page</h1>
      <div><Link href="/f1/f3">F3</Link></div>
      <div><Link href="/about">About</Link></div>
    </>
  );
};

export default F4Page;
