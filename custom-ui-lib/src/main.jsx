import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Button from "./styles/features/components/Button";
import Card from "./styles/features/components/Card";
import "./styles/features/colours/colours.css";
import "./styles/features/fonts/typography.css";
import "./styles/features/layouts/flex_layout_responsive.css";
import "./styles/features/spacing/margin.css";
import "./styles/features/spacing/padding.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export { Button, Card };
