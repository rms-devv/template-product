import { BlockData } from "../type/type";

export const Block15: React.FC<BlockData> = ({
  title,
  miniTitle,
  description,
  redirection,
  buttonTitle,
}) => {
  return (
    <section className="section-120">
      <div className="container">
        <div
          className="row custom-bg-container border-r-20"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-delay={300}
        >
          <div className="mb-r-20  col-10 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-30 mb-lg-0 mx-auto">
            <div
              className="step gap-10 title-14 bold-600"
              style={{ display: "inline-block", padding: "15px" }}
            >
              {miniTitle}
            </div>
            <h2 className="text-center text-lg-start title-40 bold">{title}</h2>
            <p className="title-18 bold-500 text-center text-lg-start">
              {description}
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a
                href={`/${redirection}`}
                className="button-pblack p-20-30 border-r-10 d-inline-block"
                style={{ width: "auto" }}
              >
                {buttonTitle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
