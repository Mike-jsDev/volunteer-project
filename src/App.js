import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { HomeSection } from "./components/Home";
import { Life } from "./components/Life";
import "./scss/main.scss";

function App() {
  return (
    <div className="app-container">
      <HomeSection />
      <About id={"about"} />
      <Life id={"life"} />
      <About id={"about-after"} />
      <Life id={"life-after"} />
      <Footer />
    </div>
  );
}

export default App;
