import { BlockData } from "../type/type";

export const Block4: React.FC<BlockData> = ({
  title,
  description,
  image,
  buttonTitle,
  redirection,
  miniTitle,
}) => {
  return (
    <section className="section-120 d-flex align-items-center">
      <div className="container">
        <div className="row w-100 d-flex align-items-center justify-content-center">
          {/* Image Column */}
          <div
            className="col-12 mb-r-20 col-lg-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-30"
            data-aos="fade-up"
            style={{ gap: "30px" }}
            data-aos-duration={700}
            data-aos-delay={300}
          >
            <img
              src={image}
              alt="Placeholder"
              style={{ height: "500px", width: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Spacer Column */}
          <div className="col-12 col-lg-1 d-none d-lg-block"></div>

          {/* Text Content Column */}
          <div
            className=" col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-30"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={400}
          >
            <div className="gap-10 title-18 bold m-0">{miniTitle}</div>
            <h2 className="text-center text-lg-start title-50 bold m-0">
              {title}
            </h2>
            <p className="title-16 bold-400 text-center text-lg-start m-0">
              {description}
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <a
                href={`/${redirection}`}
                className="button-pblack p-20-30 border-r-10 m-0 d-inline-block"
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
