import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h1>Details of Page {params.productId}</h1>
    </>
  );
};

export default page;
