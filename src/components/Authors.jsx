import { data } from "../helpers/data";
import { useState } from "react";
import Author from "./Author";

const Authors = () => {
  console.log(data);

  return (
    <div className="authors-container flex flex-row flex-wrap justify-center items-center gap-16 m-8">
      {data.map((authorItem) => (
        <Author key={authorItem.id} authorItem={authorItem} />
      ))}
    </div>
  );
};

export default Authors;
