import { useState } from "react";

const AccordionMenu = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion">
      {[
        {
          id: 1,
          question: "Titre",
          response: "Description de maximum 3 lignes",
        },
        {
          id: 2,
          question: "Titre",
          response: "Description de maximum 3 lignes",
        },
        {
          id: 3,
          question: "Titre",
          response: "Description de maximum 3 lignes",
        },
      ].map((item) => (
        <div
          className="card-advantages mb-3"
          key={item.id}
          onClick={() => toggleOpen(item.id)}
          style={{ cursor: "pointer" }}
        >
          <div className="card-accordion d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="black"
                  />
                </svg>
                <p className="title-16 bold-600 ms-2 mb-0">{item.question}</p>
              </div>
              {openId === item.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.9999 7.8284L5.6359 13.1924L4.2217 11.7782L11.9999 4L19.7781 11.7782L18.3639 13.1924L12.9999 7.8284L12.9999 20L10.9999 20L10.9999 7.8284Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-transform ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"
                    fill="black"
                  />
                </svg>
              )}
            </div>
            <div className={`response ${openId === item.id ? "show" : "hide"}`}>
              <div className="mt-3">{item.response}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
