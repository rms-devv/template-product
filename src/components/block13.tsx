import { useState } from "react";
import zap from "../assets/logo/zap.svg";

export const Block13 = () => {
    const [selectedDuration, setSelectedDuration] = useState("");
    const handleSelect = (experience: string) => {
        setSelectedDuration(experience);
      };
    return (
        <section className="section-120" style={{background: "#E4E4E4"}}>
        <div className="container">
          <div className="row">
            <div
              className="mb-r-20 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-30 mb-lg-0 mx-auto"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={300}
            >
              <div className=" gap-10 title-18 bold">
                Mini title block 13
              </div>
              <h2 className="text-center text-lg-start title-50 bold">
              Titre mettant en avant le potentiel de l’invest
              </h2>

              <p className="title-16 bold-400 text-center text-lg-start">
              Description de 5 lignes maximum
              </p>
            </div>
            <div
              className="col-12 col-lg-5 d-flex flex-column mt-3 mt-lg-0"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={300}
              style={{ gap: "10px" }}
            >
              <div className="card-rendement">
                <h3 className="title-32 bold">Calculer votre rendement</h3>

                <div className="d-flex align-items-center mb-3">
                  <img src={zap} alt="zap" style={{ marginRight: "10px" }} />
                  <p className="title-16 bold-600 mb-0">
                    Entrez le montant que vous souhaitez investir
                  </p>
                </div>

                <input
                  type="text"
                  className="input-card-product w-100 title-18"
                  placeholder="Entrez votre montant"
                />

                <div className="d-flex align-items-center mb-3 mt-3">
                  <img src={zap} alt="zap" style={{ marginRight: "10px" }} />
                  <p className="title-16 bold-600 mb-0">Choisissez la durée</p>
                </div>

                <p className="title-16 bold-600 mb-3">
                  Chaque durée vous rapportera un bénéfice différent
                </p>

                <div className="row w-100">
                  {["1 an", "2 ans", "5 ans"].map((duration, index) => (
                    <div
                      key={duration}
                      className="col-12 col-lg-4 d-flex justify-content-center mb-2"
                    >
                      <div
                        className={`experience-box ${
                          selectedDuration === duration
                            ? "selected-product"
                            : ""
                        }`}
                        onClick={() => handleSelect(duration)}
                      >
                        {duration}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="button-p-purple title-16 bold w-100">
                  Effectuez ma simulation
                </button>

                <p className="title-14 bold-500 mt-3">
                  Profitez de taux d'intérêt compétitifs et flexibles pour faire
                  fructifier vos économies, que ce soit en euros ou en
                  cryptomonnaies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}