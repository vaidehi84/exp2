import "./App.css";

// ===== MUI Components =====
import NavBarMUI from "./components/NavBarMUI";
import DashboardCardMUI from "./components/DashboardCardMUI";
import ProductCardMUI from "./components/ProductCardMUI";
import ContactFormMUI from "./components/ContactFormMUI";

// ===== Bootstrap Components =====
import NavBarBootstrap from "./components/NavBarBootstrap";
import DashboardCardBootstrap from "./components/DashboardCardBootstrap";
import ProductCardBootstrap from "./components/ProductCardBootstrap";
import ContactFormBootstrap from "./components/ContactFormBootstrap";

// MUI Layout
import { Container, Divider, Typography } from "@mui/material";

function App() {
  return (
    <>
      {/* ================= MATERIAL UI SECTION ================= */}
      <NavBarMUI />

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Material UI Dashboard – Vaidehi Sharma
        </Typography>

        <DashboardCardMUI />
        <ProductCardMUI />
        <ContactFormMUI />
      </Container>

      <Divider sx={{ my: 6 }} />

      {/* ================= BOOTSTRAP SECTION ================= */}
      <NavBarBootstrap />

      <div className="container mt-4">
        <h2>Bootstrap Dashboard – Vaidehi Sharma</h2>

        <DashboardCardBootstrap />
        <ProductCardBootstrap />
        <ContactFormBootstrap />
      </div>
    </>
  );
}

export default App;
