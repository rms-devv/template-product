import React, { useEffect, useRef } from "react";
import bgImg from "../assets/placeholder.png";
import { Block17Item } from "../type/type";

interface Block17Props {
  block17: Block17Item;
}

export const Block17: React.FC<Block17Props> = ({ block17 }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Centrer l'image du milieu au démarrage
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  return (
    <section style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={scrollContainerRef}
        style={{
          overflowX: "auto",
          width: "100%",
          display: "flex",
        }}
      >
        <div
          className="d-flex flex-nowrap"
          style={{
            gap: "20px",
            width: "max-content",
          }}
        >
          {/* Image de gauche */}
          <div
            className="col-8 col-lg-6"
            style={{
              minWidth: "30vw",
              flex: "0 0 auto",
              paddingLeft: "20px",
            }}
          >
            <img
              src={block17.images[0]}
              alt="Left Side Product"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "403px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
          {/* Image du milieu */}
          <div
            className="col-8 col-lg-6"
            style={{
              minWidth: "30vw",
              flex: "0 0 auto",
            }}
          >
            <img
              src={block17.images[1]}
              alt="Center Product"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "403px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
          {/* Image de droite */}
          <div
            className="col-8 col-lg-6"
            style={{
              minWidth: "30vw",
              flex: "0 0 auto",
              paddingRight: "20px",
            }}
          >
            <img
              src={block17.images[2]}
              alt="Right Side Product"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "403px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block17;
