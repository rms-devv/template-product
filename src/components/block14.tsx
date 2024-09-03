import React from "react";
import signImg from "../assets/logo/sign.png"; // Assurez-vous que ce chemin est correct

export const Block14 = () => {
  return (
    <section
      className="d-flex section-120 justify-content-center align-items-center"
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-delay={300}
      data-aos-easing="ease"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container d-flex justify-content-center pb-r-20"
        style={{
          backgroundColor: "#E4E4E4",
          minHeight: "500px",
          borderRadius: "20px",
          display: "flex",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        <div
          className="col-12 col-lg-3 position-relative border-res-card"
          style={{
            backgroundColor: "grey",
            padding: "30px",
            minHeight: "500px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <h3 className="title-14 bold-500 black">Poste de la personne</h3>
          <h4 className="title-20 bold black">Poste de la personne Nom & prenom</h4>
          <p className="title-14 bold-400 black">
            Parcours de la personne en 3 lignes maximum
          </p>
        </div>
        <div className="col-12 col-lg-9 p-90-r d-flex flex-column justify-content-center">
          <div className="svg-container" style={{ marginBottom: "20px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
            >
              <path
                d="M16.0419 60.6239C12.4361 56.7959 10.5 52.5 10.5 45.5361C10.5 33.288 19.0978 22.3078 31.6071 16.8811L34.7315 21.7028C23.0581 28.0189 20.7766 36.211 19.8647 41.377C21.7442 40.4051 24.2045 40.0631 26.6165 40.2868C32.9318 40.8723 37.9092 46.0565 37.9092 52.5C37.9092 59.2655 32.4246 64.75 25.6591 64.75C21.9034 64.75 18.3119 63.0333 16.0419 60.6239ZM51.0419 60.6239C47.4362 56.7959 45.5 52.5 45.5 45.5361C45.5 33.288 54.0978 22.3078 66.6071 16.8811L69.7316 21.7028C58.058 28.0189 55.7767 36.211 54.8646 41.377C56.7441 40.4051 59.2046 40.0631 61.6165 40.2868C67.9319 40.8723 72.9092 46.0565 72.9092 52.5C72.9092 59.2655 67.4247 64.75 60.6592 64.75C56.9034 64.75 53.312 63.0333 51.0419 60.6239Z"
                fill="black"
              />
            </svg>
          </div>
          <h3 className="mb-3 title-32 bold">Le titre du mot de la personne</h3>
          <p className="title-16 bold-400">
            Texte de la personne en maximum 6 lignes
          </p>
          <img src={signImg} alt="sign" className="img-fluid w-50" />
        </div>
      </div>
    </section>
  );
};
