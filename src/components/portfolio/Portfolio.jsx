import "./portfolio.css";

import IMG1 from "https://media.discordapp.net/attachments/1295456424759136367/1295465151390027926/image-6.png?ex=670f6830&is=670e16b0&hm=b3fdab5a6e82dc5406f6b61c13455e60ec466199666ae00980ea497310c6d570&=&format=webp&quality=lossless&width=424&height=676";
import IMG2 from "https://media.discordapp.net/attachments/1295456424759136367/1295465152014974989/image-5.png?ex=670f6830&is=670e16b0&hm=30bbbc470d4e8526f283956fa6145933e4d2fddfb11dba1ae6727249fe3d6638&=&format=webp&quality=lossless&width=508&height=676";
import IMG3 from "https://mir-s3-cdn-cf.behance.net/project_modules/1400/cdc450198990449.664aa3dc2d158.png";
import IMG4 from "https://mir-s3-cdn-cf.behance.net/project_modules/1400/525a00201982027.667dcab9cb974.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "LothusShop",
      img: IMG1,
      description:
        "Website",
      technologies: "React",
      link: "/",
    },
    {
      id: 2,
      title: "LothusHost",
      img: IMG2,
      description:
        "Website",
      technologies: "React",
      link: "/",
    },
    {
      id: 3,
      title: "Nuuvem",
      img: IMG3,
      description:
        "Website",
      technologies: "React",
      link: "/",
    },
    {
      id: 4,
      title: "Storigan",
      img: IMG4,
      description:
        "Website",
      technologies: "React",
      link: "/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
