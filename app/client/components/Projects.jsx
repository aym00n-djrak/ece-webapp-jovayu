import React from "react";
import Image from "next/image";

const Projects = () => {
  const myLoader = ({ src, width, quality }) => {
    return `https://i.seadn.io/gae/p9jPZKQ04Vm86g9p4nzJKgi9Ap2T7s07quXvV2W4IDf7S0ckTH8l2-FuH_43it1YhPeCvK_di70XSlsVTul5LsIOuuHrPykhgZKE?auto=format&w=1920`;
  };

  const myLoader2 = ({ src, width, quality }) => {
    return "https://64.media.tumblr.com/4616f37446e226a63bd0742f37a14c8a/tumblr_n48kjpfo4S1qg6rkio1_500.gifv";
  };

  const myLoader3 = ({ src, width, quality }) => {
    return "https://media0.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e472o4lgrhrtydn7q8oz8h7yor6oc9xtvmb9huaxcfj&rid=giphy.gif&ct=g";
  };

  return (
    <>
      <div id="projects" className="flex grid place-items-center m-10 text-primary">
        <h2 className="m-10">Some WebSite :</h2>
        <div className="flex grid grid-cols-3 gap-4">
          <div><h3 className="m-3">Hacker News :</h3>
          <p className="m-3">Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham s investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as anything that gratifies one s intellectual curiosity.</p>
          </div>
          <a
            href="https://news.ycombinator.com/"
            className=" transform transition-all rounded-lg shadow-2xl hover:scale-110 m-4"
          >
            <Image
              loader={myLoader}
              src="https://i.seadn.io/gae/p9jPZKQ04Vm86g9p4nzJKgi9Ap2T7s07quXvV2W4IDf7S0ckTH8l2-FuH_43it1YhPeCvK_di70XSlsVTul5LsIOuuHrPykhgZKE?auto=format&w=1920"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>
          <div>
          <h3>Buy me a coffee :</h3>
          <p className="m-3">Buy Me A Coffee is a simple, meaningful way to fund your creative work. It is a place where you can receive financial support from your fans and followers in exchange for exclusive rewards. It is a place where you can share your work, connect with your audience, and earn money doing what you love.</p>
          </div>
          <a
            href="https://www.buymeacoffee.com/remyjovaF"
            className=" transform transition-all rounded-lg shadow-2xl hover:scale-110 m-4"
          >
            <Image
              loader={myLoader2}
              src="https://64.media.tumblr.com/4616f37446e226a63bd0742f37a14c8a/tumblr_n48kjpfo4S1qg6rkio1_500.gifv"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>

          <div>
          <h3>GitHub :</h3>

          <p className="m-3">GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.</p>
          </div>
          <a
            href="https://github.com/aym00n-djrak"
            className=" transform transition-all rounded-lg shadow-2xl hover:scale-110 m-4"
          >
            <Image
              loader={myLoader3}
              src="https://media0.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e472o4lgrhrtydn7q8oz8h7yor6oc9xtvmb9huaxcfj&rid=giphy.gif&ct=g"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
