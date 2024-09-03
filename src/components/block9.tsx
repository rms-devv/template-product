import { numberWithSpaces } from "../utils/numberSpace";

export const Block9 = () => {
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
          <h3 className="title-18 bold">Mini title block 9</h3>
          <h2 className="title-50 bold">Big-Title block 9</h2>
          <p className="title-16 bold-500">
            Une description de maxium 5 lignes
          </p>
          <button
            className="button-pblack border-r-10 p-20-30"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-delay={500}
          >
            Ouvrir mon compte
          </button>
        </div>

        <div className="mt-5 w-100">
          <div className="row gx-2 gy-3">
            <div
              className="col-12 col-md-6 col-lg-3 border-r-20 p-inline-0 mb-3"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={600}
            >
              <div className="card-detail-product">
                <div
                  className="d-flex flex-column text-center"
                  style={{ marginInline: "20px" }}
                >
                  <p className="title-16 bold-500 m-0">Title</p>
                  <p className="title-36 bold m-0">Donnée</p>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6 col-lg-3 border-r-20 mb-3"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={700}
            >
              <div className="card-detail-product">
                <div
                  className="d-flex flex-column text-center"
                  style={{ marginInline: "20px" }}
                >
                  <p className="title-16 bold-500 m-0">Durée investissement</p>
                  <p className="title-36 bold m-0">Donée €</p>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6 col-lg-3 border-r-20 mb-3"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={800}
            >
              <div className="card-detail-product">
                <div
                  className="d-flex flex-column text-center"
                  style={{ marginInline: "20px" }}
                >
                  <p className="title-16 bold-500 m-0">Montant mininimum</p>
                  <p className="title-36 bold m-0">Donnée</p>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6 col-lg-3 border-r-20 mb-3"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={900}
            >
              <div className="card-detail-product">
                <div
                  className="d-flex flex-column text-center"
                  style={{ marginInline: "20px" }}
                >
                  <p className="title-16 bold-500 m-0">
                    Nombre d’investisseurs
                  </p>
                  <p className="title-36 bold m-0">Donnée</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-100 border-r-20 d-flex flex-column"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-delay={1000}
          style={{ padding: "30px", backgroundColor: "#E6E6E6" }}
        >
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="d-flex flex-column gap-30">
              <span className="title-16 bold-400">Atteint</span>
              <span className="title-36 bold"> {numberWithSpaces(0)}€</span>
            </div>
            <div className="d-flex flex-column text-md-end mt-3 mt-md-0">
              <div className="d-flex flex-column gap-30">
                <span className="title-16 bold-400">Objectif</span>
                <span className="title-36 bold"> {numberWithSpaces(0)}€</span>
              </div>
            </div>
          </div>
          <div className="w-100 mt-3">
            <div className="progress" style={{ height: "15px" }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `10%`, height: "15px" }}
                aria-valuenow={10}
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
