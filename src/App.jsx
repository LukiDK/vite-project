import "./App.scss";
import { Header } from "./components/header/header.jsx";
import { Nav } from "./components/nav/nav.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { Main } from "./components/main/main.jsx";
import { Button } from "./components/button/button.jsx";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
      <Button textValue="ABE" size="small" theme="light" />
    </>
  );
}

export default App;
