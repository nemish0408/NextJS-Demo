import React from "react";
import { notFound } from "next/navigation";

const page = ({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) => {
  if (parseInt(params?.reviewsId) > 100) {
    notFound();
  }
  return (
    <>
      <h1>
        Details of Review {params?.reviewsId} for product {params?.productId}
      </h1>
    </>
  );
};

export default page;
