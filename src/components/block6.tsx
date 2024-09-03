import AccordionMenu from "./Menu/AccordionMenu";

export const Block6 = () => {
  return (
    <section className="section-100-0 container" id="tokenisation">
      <div className="container-one">
        <div className="row d-flex align-items-center justify-content-between"  style={{minHeight: "800px"}}>
          <div className="col-12 col-md-12 col-lg-5 mb-4 mb-lg-0 order-1">
            <img
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={300}
              src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
              className="img-fluid d-block h-100"
              style={{ objectFit: "cover", height: "100%" }} 
              alt="Placeholder"
            />
          </div>
          {/* Le contenu est en second sur mobile et tablette, à droite sur desktop */}
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
                style={{ display: "inline-block", padding: "15px" }}
              >
                Mini-title block6
              </div>
            </div>

            <div className="mb-5">
              <h2 className="title-2 mb-4 title-48 bold">Big title block6</h2>
            </div>

            <div className="mb-5">
              <p
                className="text-2 mb-4 title-18"
                data-aos="fade-up"
                data-aos-duration={600}
                data-aos-delay={290}
                data-aos-easing="ease"
              >
                Description block6
              </p>
            </div>

            <div className="mb-5">
              <AccordionMenu />
            </div>

            <div className="d-flex justify-content-start gap-2">
              <a href="/signup" className="button-pblack p-20-30 border-r-10">
                Call to action block6
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
