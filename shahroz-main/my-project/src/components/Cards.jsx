import React from "react";

export default function Cards({ Img, Text, Link }) {
  return (
    <div className=""> {/* Adjust padding for different screen sizes */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 h-80 ">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
          <img
            src={Img}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <p className="block font-sans text-sm antialiased font-normal leading-normal break-words">
            {Text} {/* break-words ensures text wraps to the next line if necessary */}
          </p>
        </div>
        <div className="p-6 pt-0 m-auto">
          <a
            id="projects"
            href={Link}
            target="_blank"
            className="text-md text-center cursor-pointer"
          >
            See it Live!
          </a>
        </div>
      </div>
    </div>
  );
}
