import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  if ((await params).slug?.length === 2) {
    return (
      <h1>
        Viewing Docs for Feature {(await params).slug[0]} and Concept{" "}
        {(await params).slug[1]}
      </h1>
    );
  } else if ((await params).slug?.length === 1) {
    return <h1>Viewing Docs for Feature {(await params).slug[0]}</h1>;
  }
  return <div>Docs Page</div>;
};

export default page;
