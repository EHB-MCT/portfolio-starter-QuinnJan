import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/dashboard";
import { Navbar } from "./components/Navbar";
import StoreContainer from "./components/car/CarContainer";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<StoreContainer />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
