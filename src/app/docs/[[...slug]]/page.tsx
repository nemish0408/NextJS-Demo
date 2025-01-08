import React from "react";

// Define the type for the component props
interface PageProps {
  params: {
    slug?: string[]; // Catch-all route may be undefined or a string array
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
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

export default Page;
