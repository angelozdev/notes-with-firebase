import { PropsWithChildren, useState } from "react";

interface Props {
  Icon: () => JSX.Element;
  color?: "info" | "warning" | "error" | "success";
}

function Alert({ children, Icon, color }: PropsWithChildren<Props>) {
  const [hidden, setHidden] = useState(() => {
    const hiddenFromLocalStorage = JSON.parse(
      window.localStorage.getItem("info") || "false"
    );
    return hiddenFromLocalStorage;
  });

  if (hidden) {
    return null;
  }

  const onClick = () => {
    setHidden(true);
    window.localStorage.setItem("info", "true");
  };

  return (
    <div className={`alert flex-col ${color ? `alert-${color}` : ""}`}>
      <div className="md:mb-2">
        <button
          onClick={onClick}
          className={`btn btn-circle btn-xs ${color ? `btn-${color}` : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-3 h-3 stroke-current md:w-4 md:h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 self-start">
        <Icon />
        <label>{children}</label>
      </div>
    </div>
  );
}

export default Alert;
