import React from "react";

const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  return (
    <>
      <h1>Details of Page {(await params).productId}</h1>
    </>
  );
};

export default page;
