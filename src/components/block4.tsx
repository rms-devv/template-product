export const Block4 = () => {
    return (
      <section
        className="section-120 d-flex align-items-center"
       
      >
        <div className="container">
          <div className="row w-100 d-flex align-items-center justify-content-center">
            {/* Image Column */}
            <div
              className="col-12 mb-r-20 col-lg-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-30"
              data-aos="fade-up"
              style={{ gap: "30px" }}
              data-aos-duration={700}
              data-aos-delay={300}
            >
              <img
                src="https://via.placeholder.com/800x500.png?text=Image+Placeholder"
                alt="Placeholder"
                style={{ height: "500px", width: "100%", objectFit: "cover" }}
              />
            </div>
  
            {/* Spacer Column */}
            <div className="col-12 col-lg-1 d-none d-lg-block"></div>
  
            {/* Text Content Column */}
            <div
              className=" col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-30"
              data-aos="fade-up"
              data-aos-duration={700}
              data-aos-delay={400}
            >
              <div className="gap-10 title-18 bold m-0">Mini-title block4</div>
              <h2 className="text-center text-lg-start title-50 bold m-0">
                Titre block 4
              </h2>
              <p className="title-16 bold-400 text-center text-lg-start m-0">
                Description block 4
              </p>
  
              <div className="d-flex justify-content-center justify-content-lg-start">
                <button
                  className="button-pblack p-20-30 border-r-10 m-0"
                  style={{ width: "auto" }}
                >
                  Call to action block 4
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  