import React from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  icon?: LucideIcon;
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary"; // <-- Ajout du variant
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  variant = "secondary",
  className = "",
}) => {
  const baseClasses =
    "flex items-center gap-2 px-4 py-2 rounded-sm font-semibold";
  const variantClasses =
    variant === "primary"
      ? "bg-black text-white"
      : "text-black border border-black";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {Icon && <Icon size={18} />}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
