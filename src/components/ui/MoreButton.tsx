import Arrow from "@/assets/arrow-right-solid.svg";
import anime from 'animejs';
import { useEffect, useRef } from 'react';

const MoreButton = ({ text = "CONTACTANOS" }: { text?: string }) => {
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
              targets: '.more-button .line',
              scaleX: [0, 1],
              opacity: [0.5, 1],
              easing: "easeInOutExpo",
              duration: 900
            }).add({
              targets: '.more-button .letter',
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
              targets: '.more-button .line',
              scaleX: [1, 0],
              opacity: [1, 0],
              easing: "easeInOutExpo",
              duration: 500, // Reduce duration of line disappearing
              offset: '-=300'
            });

          // Make the text appear faster after hover ends
          anime({
            targets: '.more-button .letter',
            translateX: [0, 0],
            opacity: 1,
            easing: "easeOutExpo",
            duration: 300 // Reduce duration of text reappearing
          });
        });
      }
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      type="submit"
      className="more-button border-b-2 border-current group flex justify-start items-center py-1.5 text-base font-semibold leading-6 text-current"
    >
      <span className="text-wrapper flex items-center justify-center">
        <span className="letters">{text}</span>
        <span className="line absolute bottom-0 left-0 w-full h-[2px] bg-current opacity-0"></span>
      </span>
      <img src={Arrow} alt="arrow" className="w-4 h-4 ml-2" />
    </button>
  );
};

export default MoreButton;
