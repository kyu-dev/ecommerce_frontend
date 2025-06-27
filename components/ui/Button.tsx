import React from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  icon?: LucideIcon;
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-sm text-black border border-black"
    >
      {Icon && <Icon size={18} />}
      {label && <span className="font-semibold">{label}</span>}
    </button>
  );
};

export default Button;
