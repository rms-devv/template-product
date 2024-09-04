import { BlockData } from "../type/type";
import AccordionMenu from "./Menu/AccordionMenu";

export const Block6: React.FC<BlockData> = ({
  title,
  description,
  image,
  buttonTitle,
  redirection,
  miniTitle,
}) => {
  return (
    <section className="section-100-0 container" id="tokenisation">
      <div className="container-one">
        <div
          className="row d-flex align-items-center justify-content-between"
          style={{ minHeight: "800px" }}
        >
          <div className="col-12 col-md-12 col-lg-5 mb-4 mb-lg-0 order-1">
            <img
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={300}
              src={image}
              className="img-fluid d-block h-100"
              style={{ objectFit: "cover", height: "100%" }}
              alt="Placeholder"
            />
          </div>

          <div
            className="col-12 col-md-12 col-lg-6 order-2"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={300}
            data-aos-easing="ease"
          >
            <div className="mb-4">
              <div
                className="step gap-10 title-14 bold-600"
                style={{ display: "inline-block" }}
              >
                {miniTitle}
              </div>
            </div>

            <div className="mb-5">
              <h2 className="title-2 mb-4 title-48 bold">{title}</h2>
            </div>

            <div className="mb-5">
              <p
                className="text-2 mb-4 title-18"
                data-aos="fade-up"
                data-aos-duration={600}
                data-aos-delay={290}
                data-aos-easing="ease"
              >
                {description}
              </p>
            </div>

            <div className="mb-5">
              <AccordionMenu />
            </div>

            <div className="d-flex justify-content-start gap-2">
              <a
                href={`/${redirection}`}
                className="button-pblack p-20-30 border-r-10 d-inline-block"
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
