import React from "react";
import { BlockData, dataItem } from "../type/type";

export const Block5: React.FC<BlockData> = ({
  miniTitle,
  title,
  description,
  redirection,
  buttonTitle,
  block5,
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

            <p className="title-16 bold-400 text-center text-lg-start">
              {description}
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a
                href={`/${redirection}`}
                className="button-pblack p-20-30 border-r-10 d-inline-block"
                style={{ width: "auto" }}
                data-aos="fade-up"
                data-aos-duration={700}
                data-aos-delay={400}
              >
                {buttonTitle}
              </a>
            </div>
          </div>

          <div
            className="col-12 col-lg-5 d-flex flex-column mt-3 mt-lg-0"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={300}
            style={{ gap: "10px" }}
          >
            {block5 && block5.map((block, blockIndex) =>
              block.data.map((item, itemIndex) => (
                <div key={`${blockIndex}-${itemIndex}`}>
                  <div className="d-flex justify-content-between">
                    <p className="text-start m-0 title-16 bold-400">{item.title}</p>
                    <p className="text-end m-0 title-20 bold">{item.data}</p>
                  </div>
                  {itemIndex < block.data.length - 1 && <hr className="bg-black" />}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
