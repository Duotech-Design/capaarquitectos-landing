import Arrow from "@/assets/arrow-right-solid.svg";
import anime from "animejs/lib/anime.es.js"
import { useEffect, useRef } from 'react';

const CustomButton = ({ text = "CONTACTANOS" }: { text?: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      // Wrap every letter in a span
      const textWrapper = button.querySelector('.letters');
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || "";

        // On hover animation
        button.addEventListener('mouseenter', () => {
          anime.timeline({ loop: false })
            .add({
              targets: '.custom-button .line',
              scaleX: [0, 1],
              opacity: [0.5, 1],
              easing: "easeInOutExpo",
              duration: 900
            }).add({
              targets: '.custom-button .letter',
              opacity: [0, 1],
              translateX: [40, 0],
              scaleX: [0.3, 1],
              easing: "easeOutExpo",
              duration: 800,
              offset: '-=600',
              delay: (el, i) => 150 + 25 * i
            });
        });

        // Remove disappearance of text on mouse leave
        button.addEventListener('mouseleave', () => {
          anime.timeline({ loop: false })
            .add({
              targets: '.custom-button .line',
              scaleX: [1, 0],
              opacity: [1, 0],
              easing: "easeInOutExpo",
              duration: 900,
              offset: '-=300'
            });

          // Optionally, reset letters position or do another subtle animation on mouse leave
          anime({
            targets: '.custom-button .letter',
            translateX: [0, 0], // Keep text in its final position
            opacity: 1,         // Keep the text fully visible
            easing: "easeOutExpo",
            duration: 600
          });
        });
      }
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      type="submit"
      className="custom-button z-50 relative group flex justify-start items-center py-1.5 text-base lg:py-3 lg:text-lg font-semibold leading-6 text-white"
    >
      <span className="text-wrapper flex items-center font-bold sm:font-normal justify-center">
        <span className="letters">{text}</span>
        <span className="line absolute bottom-0 left-0 w-full h-[2px] bg-white opacity-0"></span>
      </span>
      <img src={Arrow} alt="arrow" className="w-4 h-4 lg:w-6 lg:h-6 ml-2" />
    </button>
  );
};

export default CustomButton;
