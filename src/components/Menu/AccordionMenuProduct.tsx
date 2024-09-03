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
                  width: "83px", 
                  height: "84px", 
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83"
                    height="84"
                    viewBox="0 0 83 84"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_994_7754)">
                      <circle
                        cx="41.491"
                        cy="36.9261"
                        r="25.3309"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M38.3828 45.1826L46.6021 36.926L38.3828 28.6694"
                      stroke="#757575"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_d_994_7754"
                        x="0.160156"
                        y="0.595215"
                        width="82.6602"
                        height="82.6616"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="5" />
                        <feGaussianBlur stdDeviation="8" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_994_7754"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_994_7754"
                          result="shape"
                        />
                      </filter>
                    </defs>
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
