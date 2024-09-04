import React from "react";
import { Block9Data } from "../type/type";
import { numberWithSpaces } from "../utils/numberSpace";

export const Block9: React.FC<Block9Data> = ({
  title,
  miniTitle,
  description,
  buttonTitle,
  redirection,
  cards,
  achieved,
  goal,
}) => {
  const progressPercentage = (achieved / goal) * 100;

  return (
    <section
      className="section-120 m-0 d-flex flex-column align-items-center justify-content-center"
      style={{ gap: "30px" }}
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-delay={300}
    >
      <div className="container">
        <div
          className="col-12 col-lg-8 text-center mx-auto"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-delay={400}
        >
          <h3 className="title-18 bold">{miniTitle}</h3>
          <h2 className="title-50 bold">{title}</h2>
          <p className="title-16 bold-500">{description}</p>
          <a
            href={`/${redirection}`}
            className="button-pblack border-r-10 p-20-30 d-inline-block"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={500}
          >
            {buttonTitle}
          </a>
        </div>

        <div className="w-100 mt-50">
          <div className="row gx-2 gy-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-3 border-r-20 p-inline-0"
                data-aos="fade-up"
                data-aos-duration={700}
                data-aos-delay={600 + index * 100}
              >
                <div className="card-detail-product">
                  <div
                    className="d-flex flex-column text-center"
                    style={{ marginInline: "20px" }}
                  >
                    <p className="title-16 bold-500 m-0">{card.title}</p>
                    <p className="title-36 bold m-0">{card.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-100 border-r-20 d-flex flex-column"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-delay={1000}
          style={{ padding: "30px", backgroundColor: "#E6E6E6", marginTop: "8px" }}
        >
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="d-flex flex-column gap-30">
              <span className="title-16 bold-400">Atteint</span>
              <span className="title-36 bold">{numberWithSpaces(achieved)}€</span>
            </div>
            <div className="d-flex flex-column text-md-end mt-3 mt-md-0">
              <div className="d-flex flex-column gap-30">
                <span className="title-16 bold-400">Objectif</span>
                <span className="title-36 bold">{numberWithSpaces(goal)}€</span>
              </div>
            </div>
          </div>
          <div className="w-100 mt-3">
            <div className="progress" style={{ height: "15px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progressPercentage}%`, height: "15px", backgroundColor: "#65FF90" }}
                aria-valuenow={progressPercentage}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
