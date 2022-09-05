import Home from "./components/pages/Home";
import SingleTable from "./components/pages/SingleTable";
import NotFound from "./components/pages/NotFound";
import Container from "./components/views/Container";
import NavBar from "./components/views/NavBar";
import Footer from "./components/views/Footer";
import { Route, Routes} from 'react-router-dom';




function App() {
  return (
    <main>
      <Container>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tables/:id" element={<SingleTable />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
