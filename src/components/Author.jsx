import { useState } from "react";
const Author = ({ authorItem }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        key={authorItem.id}
        onClick={() => {
          setShow(!show);
        }}
        className="author-card flex border w-80 border-yellow-400 p-4 gap-4"
      >
        {!show ? (
          <div className="author-image w-72  overflow-hidden  bg-slate-400 ">
            <img
              className="object-cover h-72 w-full"
              src={authorItem.imageUrl}
              alt={authorItem.name}
            />
            <a className="border border-yellow-400 p-2 block text-yellow-400 font-bold text-xl  text-center">
              {authorItem.name}
            </a>
          </div>
        ) : (
          <div className="author-info flex flex-col  w-full  gap-8">
            <p>{authorItem.name}</p>
            <p>{authorItem.notableWorks}</p>
            <p>{authorItem.year}</p>
            <p>{authorItem.countries}</p>
            <a
              href={authorItem.wiki}
              className="p-2 w-32 bg-yellow-400  text-slate-800"
            >
              Read More
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Author;
