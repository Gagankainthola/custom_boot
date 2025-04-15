import React from "react";

// Custom Button Component
function Button({ variant, children, ...props }) {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white";
      case "secondary":
        return "bg-secondary text-white";
      case "success":
        return "bg-success text-white";
      case "warning":
        return "bg-warning text-white";
      case "danger":
        return "bg-danger text-white";
      case "info":
        return "bg-info text-white";
      case "light":
        return "bg-light text-dark";
      case "dark":
        return "bg-dark text-white";
      case "link":
        return "text-link";
      default:
        return "bg-primary text-white";
    }
  };

  return (
    <button className={`px-4 py-2 rounded ${getVariantClass()}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
