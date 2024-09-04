import React from "react";
import BgImg from "../../assets/placeholder.png";

const ScrollableCards = () => {
  const cardsData = [
    { id: 1, title: "Immobilier d’exception", image: BgImg },
    { id: 2, title: "Immobilier d’exception", image: BgImg },
    { id: 3, title: "Immobilier d’exception", image: BgImg },
    { id: 4, title: "Immobilier d’exception", image: BgImg },
    { id: 5, title: "Immobilier d’exception", image: BgImg },
    { id: 6, title: "Immobilier d’exception", image: BgImg },
    { id: 7, title: "Immobilier d’exception", image: BgImg },
    { id: 8, title: "Immobilier d’exception", image: BgImg },
    { id: 9, title: "Immobilier d’exception", image: BgImg },
  ];

  return (
    <div
      className="scrollable-container position-relative overflow-visible"
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-delay={400}
      data-aos-easing="ease"
    >
      <div
        className="row flex-nowrap gx-3 mt-4 overflow-auto border-r-20"
        style={{ paddingBottom: "50px" }}
      >
        {cardsData.map((card) => (
          <div key={card.id} className="col-12 col-md-5 col-lg-3">
            <div
              className="card-scroll"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                zIndex: 0,
                padding: "20px",
              }}
            >
              <h2
                className="text-white mb-0"
                style={{ alignSelf: "flex-end", marginBottom: "20px" }}
              >
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCards;
