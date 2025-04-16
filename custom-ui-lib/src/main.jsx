import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Button from "./styles/features/components/Button";
import Card from "./styles/features/components/Card";
import Footer from "./styles/features/components/Footer";
import Form from "./styles/features/components/Form";
import MainSection from "./styles/features/components/MainSection";
import Navbar from "./styles/features/components/Navbar";
import Table from "./styles/features/components/Table";
import Test from "./styles/features/components/Test";


import "./styles/features/colours/colours.css";
import "./styles/features/fonts/typography.css";
import "./styles/features/layouts/flex_layout_responsive.css";
import "./styles/features/spacing/margin.css";
import "./styles/features/spacing/padding.css";
import "./styles/features/containers/card.css";
import "./styles/features/containers/container1.css";
import "./styles/features/containers/footer.css";
import "./styles/features/containers/form.css";
import "./styles/features/containers/mainsection.css";
import "./styles/features/containers/navbar.css";
import "./styles/features/containers/table.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export { Button, Card , Footer, Form, MainSection, Navbar, Table, Test};
