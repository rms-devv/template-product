
export const Block1 = () => {
  return (
    <div
    className="background-detail-product d-flex align-items-center"
    style={{ minHeight: "100vh", background: "url(https://via.placeholder.com/1920x1080.png?text=Background+Image) center center/cover no-repeat" }}
  >
    <div
      className="container"
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-delay={300}
      data-aos-easing="ease"
    >
      <h3 className="title-24 bold-500 white" style={{ opacity: "0.6" }}>
        Categorie de l'asset block 1
      </h3>
      <h2 className="title-50 bold white">Title du produit block 1</h2>
      <p className="title-20 bold-300 white" style={{ opacity: "0.6" }}>
        Description block 1
      </p>
      <button
        className="button-pwhite p-20-30 border-r-10"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-delay={400}
      >
        Call to action block 1
      </button>
    </div>
  </div>
  );
}