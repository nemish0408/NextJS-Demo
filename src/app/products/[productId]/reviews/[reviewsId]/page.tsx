import React from "react";
import { notFound } from "next/navigation";

const page = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewsId: string }>;
}) => {
  if (parseInt((await params)?.reviewsId) > 100) {
    notFound();
  }
  return (
    <>
      <h1>
        Details of Review {(await params)?.reviewsId} for product {(await params)?.productId}
      </h1>
    </>
  );
};

export default page;
