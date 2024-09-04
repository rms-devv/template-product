import React from "react";
import Marquee from "react-fast-marquee";
import { Block10Data } from "../type/type";

export const Block10: React.FC<Block10Data> = ({
  title,
  description,
  images,
}) => {
  return (
    <section className="section-100-0 d-flex flex-column justify-content-center">
      <div
        className="container text-center mb-5"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-delay={300}
      >
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-between text-center text-md-start">
            <div className="col-12 col-lg-5 mb-2 mb-md-0">
              <h2 className="title-40 bold">{title}</h2>
            </div>
            <div className="col-12 col-lg-5">
              <p className="mb-0 title-18 bold-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <Marquee speed={20} gradient={false} style={{ display: "flex" }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="border-r-20"
              style={{
                width: "400px",
                height: "300px",
                marginRight: "20px",
                padding: "0",
              }}
            />
          ))}
        </Marquee>
      </div>
      <div style={{ overflow: "hidden", marginTop: "20px" }}>
        <Marquee
          speed={20}
          gradient={false}
          direction="right"
          style={{ display: "flex" }}
        >
          {images.map((image, index) => (
            <img
              key={`reverse-${index}`}
              src={image.src}
              alt={image.alt}
              className="border-r-20"
              style={{
                width: "400px",
                height: "300px",
                marginRight: "20px",
                padding: "0",
              }}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
