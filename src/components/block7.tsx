import React from "react";
import { Block7Data } from "../type/type";

export const Block7: React.FC<Block7Data> = ({
  title,
  category,
  description,
  image,
  buttonTitle,
  redirection,
  miniTitle,
  subTitle,
  cards,
}) => {
  return (
    <section className="section-120">
      <div className="container">
        <div className="row">
          <div
            className="mb-r-20 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-30 mb-lg-0 mx-auto"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={300}
          >
            <div className="gap-10 title-18 bold">{miniTitle}</div>
            <h2 className="text-center text-lg-start title-50 bold">{title}</h2>
            <p className="title-20 bold-600">{subTitle}</p>
            <p className="title-16 bold-400 text-center text-lg-start">
              {description}
            </p>
            <a
              href={`/${redirection}`}
              className="button-pblack p-20-30 border-r-10 d-inline-block"
              style={{ width: "auto" }}
            >
              {buttonTitle}
            </a>
          </div>

          <div
            className="col-12 col-lg-5 d-flex flex-column mt-3 mt-lg-0"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={300}
            style={{ gap: "10px" }}
          >
            <div className="row gx-2 gy-2">
              {cards.map((card, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="card-detail-rendement">
                    <div className="d-flex flex-column text-start">
                      <p className="title-16 bold-500 m-0">{card.title}</p>
                      <p className="title-36 bold m-0">{card.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
