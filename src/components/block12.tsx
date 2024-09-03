import AccordionMenuProduct from "./Menu/AccordionMenuProduct";

export const Block12 = () => {
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
          <h3 className="title-18 bold">Pitch du Projet</h3>
          <h2 className="title-40 bold">
            Titre mettant en avant la foire aux questions
          </h2>
          <p className="title-16 bold-600">déscription de maximum 2 lignes</p>
          <a
            href="/signup"
            className="button-pblack border-r-10 p-20-30"
            style={{ width: "auto" }}
          >
            Call to action
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
