import React from "react";
import { BlockData } from "../type/type"; // Assurez-vous que le chemin est correct
import ScrollableCards from "./Menu/ScrollPictures";


export const Block16: React.FC<BlockData> = ({ block16 }) => {
  if (!block16 || block16.length === 0) {
    return null;
  }

  // Assurer que le premier élément de block16 est utilisé
  const { title, description, cards } = block16[0];

  return (
    <section
      className="section-100-0 d-flex flex-column justify-content-center align-items-center position-relative"
      style={{
        backgroundColor: `black`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-delay={300}
      data-aos-easing="ease"
    >
      <div className="container text-center text-white mb-5">
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-between text-center text-md-start">
            <div className="col-12 col-lg-5 mb-2 mb-md-0">
              <h2 className="title-40 bold">{title}</h2> 
            </div>
            <div className="col-12 col-lg-5">
              <p className="mb-0 title-18 bold-500">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <ScrollableCards cardsData={cards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block16;
