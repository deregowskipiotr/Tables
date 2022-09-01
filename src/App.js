import Home from "./components/pages/Home";
import Table from "./components/pages/Table";
import NotFound from "./components/pages/NotFound";
import Container from "./components/views/Container";
//import { Route, Routes} from 'react-router-dom';



function App() {
  return (
    <main>
      <Container>
        <Home />
        <Table />
        <NotFound />
      </Container>
    </main>
  );
};

export default App;
