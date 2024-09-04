// Block1.tsx
import React from "react";
import { BlockData } from "../type/type"; // Assurez-vous que ce chemin est correct



export const Block1: React.FC<BlockData> = ({
  title,
  category,
  description,
  image,
  buttonTitle,
  redirection
}) => {
  return (
    <div
      className="background-detail-product d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: `url(${image}) center center/cover no-repeat`,
      }}
    >
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-delay={300}
        data-aos-easing="ease"
      >
        <h3 className="title-24 bold-500 white" style={{ opacity: "0.6" }}>
          {category}
        </h3>
        <h2 className="title-50 bold white">{title}</h2>
        <p className="title-20 bold-300 white" style={{ opacity: "0.6" }}>
          {description}
        </p>
        <a
          href={`/${redirection}`}
          className="button-pwhite p-20-30 border-r-10 d-inline-block"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-delay={400}
        >
          {buttonTitle}
        </a>
      </div>
    </div>
  );
};
