import React from "react";
import Card from "../Card/Card";

export default function Results({ results }) {

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 2xl:grid-col-5 max-w-6xl mx-auto items-center justify-center py-4">
      {results.map((result) => (
        <Card key={result.id} result={result}/>
      ))}
    </div>
  );
}
