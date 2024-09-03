export const Block3 = () => {
  return (
    <section
      className="background-grey-detail-product d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="mb-r-20 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-30 mb-lg-0 mx-auto"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={300}
          >
            <h3 className=" gap-10 title-24 bold-500">
              Categorie de l'asset block 1
            </h3>
            <h2 className="text-center text-lg-start title-50 bold">
              Big title block 3
            </h2>

            <p className="title-20 bold-300 text-center text-lg-start">
              Description block 3
            </p>
            <button
              className="button-pwhite title-16 bold p-20-30 border-r-10"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={400}
              style={{marginTop: "30px"}}
            >
              Call to action block 1
            </button>
          </div>
          <div
            className="col-12 col-lg-5 d-flex flex-column mt-3 mt-lg-0"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={300}
            style={{ gap: "10px" }}
          >
            <img
              src="https://via.placeholder.com/500x300.png?text=Image+Placeholder"
              alt="Placeholder"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
