import React from "react";
import Cards from "../components/Cards";
import Profile from "../assets/Profile.jpeg";
function Projects() {
  return (
    <div className="pt-8">
      <h1 className="text-3xl ml-12  underline relative pb-10">Projects</h1>
      <div className="sm:w-[70%] m-auto py-10">
        <div className="flex items-center justify-evenly flex-wrap gap-6">
          <Cards
            Img={Profile}
            Text={`dasdasdasdasdasdfddasdasdasdasdasdadadasdasfdsf`}
            Link={``}
          />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Projects;
