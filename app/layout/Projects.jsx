import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cyber from "../public/cyber.jpg";

const Projects = () => {
  return (
    <div id="projects" class="grid place-items-center h-screen m-4 p-4">
      <h2>My projects :</h2>
      <div class="items-align p-2">
        <Link href="https://eu.gear.cdprojektred.com/game/cyberpunk-2077.html">
          <Image src={Cyber} alt="Picture of the author"></Image>
        </Link>{" "}
      </div>

      <div class="p-2 ">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/BnnbP7pCIvQ"
          title="Cyberpunk: Edgerunners — Ending Theme | Let You Down by Dawid Podsiadło | Netflix"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="p-2 ">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/KvMY1uzSC1E"
          title="Cyberpunk: Edgerunners | “I Really Want to Stay At Your House” by Rosa Walton | Music Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="p-2 ">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/49FB9hhoO6c"
          title="Where Is My Mind?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Projects;
