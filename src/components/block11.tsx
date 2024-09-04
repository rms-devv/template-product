import { BlockData } from "../type/type";

export const Block11: React.FC<BlockData> = ({
  title,
  miniTitle,
  description,
  buttonTitle,
  redirection,
  block11,
}) => {
  
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
              <h2 className="title-40 bold">{title}</h2>
            </div>
            <div className="col-12 col-lg-5">
              <p className="mb-0 title-18 bold-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div
      className="container"
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-delay={600}
    >
      <div className="row g-4">
        {block11 && block11.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div
              className="card-download"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
                borderRadius: '8px',
              }}
            >
              <p className="title-32 bold m-0">{item.documentName}</p>
              <a href={item.downloadUrl} className="button-download title-16 bold">
                Télécharger
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};
