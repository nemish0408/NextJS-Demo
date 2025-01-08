import React from "react";

const page = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing Docs for Feature {params.slug[0]} and Concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing Docs for Feature {params.slug[0]}</h1>;
  }
  return <div>Docs Page</div>;
};

export default page;
