import Link from "next/link";
import React from "react";

const f1page = () => {
  return (
    <div>
      <h1>f1page</h1>
      <div>
        <Link href="/f1/f2">F2</Link>
      </div>
    </div>
  );
};

export default f1page;
