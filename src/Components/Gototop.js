import { useEffect, useState } from "react";
import "./Gototop.css";
const Gototop = () => {
  // const topArrow = document.getElementById("go-to-top");
  //   function hideArrowTop() {
  //     if (window.scrollY < 500) {
  //         console.log(window.scrollY)
  //       topArrow.classList.add("right");
  //     }
  //   }
  //   window.onscroll = hideArrowTop();
  // const topArroweEffect=useState(null)
  const [isVisisble, setIsVisisble] = useState(false);
  useEffect(() => {
    function hideArrowTop() {
      if (window.scrollY < 500) {
        console.log(window.scrollY);
        setIsVisisble(false);
      } else {
        setIsVisisble(true);
      }
    }
    window.addEventListener("scroll", hideArrowTop);
    return () => {
      window.removeEventListener("scroll", hideArrowTop);
    };
  }, []);
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {isVisisble && (
        <div className="go-to-top" id="go-to-top" onClick={top}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="30"
            id="top"
            fill="white"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </div>
      )}
    </>
  );
};
export default Gototop;
