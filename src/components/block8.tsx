export const Block8 = () => {
    return (
      <section
        className="section-100-0 m-r-20 "
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-delay={300}
        data-aos-easing="ease"
      >
        <div className="custom-bg-container border-r-20">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-12 col-lg-4 d-flex flex-column gap-30 mb-4 mb-lg-0">
                <h2 className="title-36 bold" >Big-title block 8</h2>
                <p className="title-16 bold-500">Description block 8 </p>
                <div className="d-flex justify-content-start">
                  <a
                    href="/signup"
                    className="button-pblack p-20-30 border-r-10"
                    style={{ width: "auto" }}
                  >
                    Call to action block 8
                  </a>
                </div>
              </div>
  
              <div className="col-12 col-lg-7 p-0">
                <div className="row g-3 h-100">
                  {[
                    {
                      id: 1,
                      title: "Titre en deux lignes maximum",
                      text: "Description en 3 lignes maximum",
                    },
                    {
                      id: 2,
                      title: "Titre en deux lignes maximum",
                      text: "Description en 3 lignes maximum",
                    },
                    {
                      id: 3,
                      title: "Titre en deux lignes maximum",
                      text: "Description en 3 lignes maximum",
                    },
                  ].map((card) => (
                    <div
                      key={card.id}
                      className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
                    >
                      <div
                        className="card w-100 text-white d-flex flex-column"
                        style={{
                          height: "100%",
                          overflow: "hidden",
                          borderRadius: "10px",
                        }}
                      >
                        <div style={{ position: "relative", width: "100%" }}>
                          <img
                            src="https://via.placeholder.com/600x600.png?text=Image+Placeholder"
                            alt="Placeholder"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              width: "100%",
                              height: "100%",
                              borderTopLeftRadius: "10px",
                              borderTopRightRadius: "10px",
                            }}
                          />
                        </div>
  

                        <div
                          className="content d-flex flex-column justify-content-center align-items-center"
                          style={{
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                            flexGrow: 1,
                          }}
                        >
                          <h2 className="title-24 bold">{card.title}</h2>
                          <p className="title-16 bold-500">{card.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  