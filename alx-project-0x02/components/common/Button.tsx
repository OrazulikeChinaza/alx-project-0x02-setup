import { ButtonProps } from "../../interfaces";

export default function Button({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
}: ButtonProps) {
  let sizeClass = "";
  if (size === "small") sizeClass = "px-2 py-1 text-sm";
  if (size === "medium") sizeClass = "px-4 py-2 text-base";
  if (size === "large") sizeClass = "px-6 py-3 text-lg";

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white ${sizeClass} ${shape}`}
    >
      {children}
    </button>
  );
}
