
export const Block2 = () => {
    return (
        <div
        className="background-detail-product d-flex text-center"
        style={{ minHeight: "100vh" }}
      >
        <div
      className="container"
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-delay={300}
      data-aos-easing="ease"
      style={{paddingTop: "150px"}}
    >
      <h3 className="title-24 bold-500 white" style={{ opacity: "0.6" }}>
        Categorie de l'asset block 2
      </h3>
      <h2 className="title-50 bold white">Title du produit block 2</h2>
      <p className="title-20 bold-300 white" style={{ opacity: "0.6" }}>
        Description block 2
      </p>
      <button
        className="button-pwhite p-20-30 border-r-10"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-delay={400}
      >
        Call to action block 2
      </button>
    </div>
        </div>
    )
}