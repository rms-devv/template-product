import { useState } from "react";

const AccordionMenuProduct = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion">
      {[
        {
          id: 1,
          question: "Question",
          response:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          id: 2,
          question: "Question",
          response:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ].map((item) => (
        <div
          className="mb-3"
          key={item.id}
          onClick={() => toggleOpen(item.id)}
          style={{ cursor: "pointer" }}
        >
          <div
            className={`card-accordion ${
              openId === item.id ? "expanded" : "collapsed"
            }`}
            style={{
              overflow: "hidden",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <p className="title-22 bold mb-0">{item.question}</p>
              <div
                style={{
                  width: "40px", 
                  height: "40px", 
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {openId === item.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 51 52"
                    fill="none"
                  >
                    <circle
                      cx="25.491"
                      cy="25.9937"
                      r="25.3309"
                      fill="#757575"
                    />
                    <path
                      d="M17.2344 22.884L25.491 31.1033L33.7476 22.884"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" transform="rotate(-90 16 16)" fill="white"/>
                  <path d="M14.0352 21.2148L19.2268 15.9996L14.0352 10.7844" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                )}
              </div>
            </div>
            <div
              className={`response ${openId === item.id ? "show" : "hide"}`}
              style={{
                maxHeight: openId === item.id ? "500px" : "0",
                opacity: openId === item.id ? "1" : "0",
                overflow: "hidden",
              }}
            >
              <div className=" title-16 bold-400">{item.response}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionMenuProduct;
