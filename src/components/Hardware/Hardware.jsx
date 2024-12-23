import React from "react";
import s from "./Hardware.module.scss";

const Hardware = () => {
  return (
    <>
      <section className={s.hardware}>
        <div className="container">
          <div className={s.box}>
            <h3>
              <b>TECHNOLOGIES & HARDWARE</b> <br /> USED BY HYDRA VR.
            </h3>

            <button>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 25L30 37.5L42.5 25"
                  stroke="#433D60"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={s.wrap}>
            <img src="/Hydra1.png" alt="" />
            <img src="/Hydra2.png" alt="" />
            <img src="/Hydra3.png" alt="" />
            <img src="/Hydra4.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hardware;
