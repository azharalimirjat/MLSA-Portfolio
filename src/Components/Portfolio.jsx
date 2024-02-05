/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "JavaScript in Simple for Beginners 🎉",
    description:
      "Get started with JavaScript sample codes with usefull comments to learn easily.",
    url: "https://github.com/azharalimirjat/JavaScript",
  },
  // {
  //   title: "Web Development for Beginners",
  //   description:
  //     "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
  //   url: "https://github.com/microsoft/web-dev-for-beginners",
  // },
  {
    title: "DSA PBL Using Java",
    description:
      "I've used the concepts of DSA to handle the data.The PBL is based on the Crashes of a city from 2010 to 2018.",
    url: "https://github.com/azharalimirjat/DSA_PBL",
  },
  {
    title: "Learn Java",
    description:
      "Easy to medium questions to understand and learn Java language.",
    url: "https://github.com/azharalimirjat/Java",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
