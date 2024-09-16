import { FC } from "react";
import ReactDOM from "react-dom";
import { ProjectAsset } from "../../helpers/projectAssets";
import { AvailableProjects } from "../../helpers/projectAssets";

interface FullScreenImageProps {
  project: AvailableProjects;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const FullScreenImage: FC<FullScreenImageProps> = ({
  project,
  index,
  onClose,
  onNext,
  onPrev,
}) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-80 flex justify-center items-center z-50 overflow-hidden">
      <div className="relative max-w-4xl max-h-full">
        <button
          className="absolute top-4 md:-top-2 right-4 md:-right-24 text-white px-2.5"
          onClick={onClose}
        >
          <svg
            className="h-8 w-8 hover:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 left-4 md:-left-20 transform -translate-y-1/2 text-white text-3xl"
          onClick={onPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white rounded-full hover:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H5M12 19l-7-7 7-7"
            />
          </svg>
        </button>
        <ProjectAsset
          project={project}
          index={index}
          alt={`${project}_${index + 1}`}
          className="max-w-full max-h-full md:h-[450px] lg:h-[700px] xl:[850px] object-cover object-center"
        />
        <button
          className="absolute top-1/2 right-4 md:-right-20 transform -translate-y-1/2 text-white text-xl font-thin"
          onClick={onNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white rounded-full hover:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
};

export default FullScreenImage;
