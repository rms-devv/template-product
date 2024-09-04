import { BlockData } from "../type/type";
import AccordionMenuProduct from "./Menu/AccordionMenuProduct";

export const Block12: React.FC<BlockData> = ({
  title,
  description,
  buttonTitle,
  redirection,
  pitch
}) => {
  return (
    <section className="section-100-0 container " id="professionnels">
      <div className="d-flex justify-content-center">
        <div
          className="text-center col-lg-8 d-flex flex-column align-items-center gap-30"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration={700}
          data-aos-delay={400}
        >
          <h3 className="title-18 bold">{pitch}</h3>
          <h2 className="title-40 bold m-0">
            {title}
          </h2>
          <p className="title-16 bold-600 m-0">{description}</p>
          <a
          href={`/${redirection}`}
            className="button-pblack border-r-10 p-20-30"
            style={{ width: "auto" }}
          >
            {buttonTitle}
          </a>
        </div>
      </div>

      <div
        className="row gx-3 mt-70 justify-content-center col-lg-8 mx-auto"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-delay={500}
        data-aos-easing="ease"
      >
        <AccordionMenuProduct />
      </div>
    </section>
  );
};
