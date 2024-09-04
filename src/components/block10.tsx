import Marquee from "react-fast-marquee";

export const Block10 = () => {
  return (
    <section className="section-100-0 d-flex flex-column justify-content-center">
      <div
        className="container text-center mb-5"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-delay={300}
      >
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-between text-center text-md-start">
            <div className="col-12 col-lg-5 mb-2 mb-md-0">
              <h2 className="title-40 bold">
              Titre mettant en avant les avis des clients/collab’
              </h2>
            </div>
            <div className="col-12 col-lg-5">
              <p className="mb-0 title-18 bold-500">
              Déscription de maxium 4 lignes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <Marquee speed={20} gradient={false} style={{ display: "flex" }}>
        <img
            src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
            alt="Icon"
                        className="border-r-20"
            style={{
              width: "400px",
              height: "300px",
              marginRight: "20px",
              padding: "0",
            }}
          />
             <img
            src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
            alt="Icon"
                        className="border-r-20"
            style={{
              width: "400px",
              height: "300px",
              marginRight: "20px",
              padding: "0",
            }}
          />
              <img
            src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
            alt="Icon"
                        className="border-r-20"
            style={{
              width: "400px",
              height: "300px",
              marginRight: "20px",
              padding: "0",
            }}
          />
           <img
            src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
            alt="Icon"
                        className="border-r-20"
            style={{
              width: "400px",
              height: "300px",
              marginRight: "20px",
              padding: "0",
            }}
          />
        </Marquee>
      </div>
      <div style={{ overflow: "hidden", marginTop: "20px" }}>
        <Marquee
          speed={20}
          gradient={false}
          direction="right"
          style={{ display: "flex" }}
        >
          <img
            src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
            alt="Icon"
                        className="border-r-20"
            style={{
              width: "400px",
              height: "300px",
              marginRight: "20px",
              padding: "0",
            }}
          />
          <img
            src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
            alt="Icon"
                        className="border-r-20"
            style={{
              width: "400px",
              height: "300px",
              marginRight: "20px",
              padding: "0",
            }}
          />
          <img
            src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
            alt="Icon"
                        className="border-r-20"
            style={{
              width: "400px",
              height: "300px",
              marginRight: "20px",
              padding: "0",
            }}
          />
          <img
            src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
            className="border-r-20"
            alt="Icon"
            style={{
              width: "400px",
              height: "300px",
              marginRight: "20px",
              padding: "0",
            }}
          />
        </Marquee>
      </div>
    </section>
  );
};
