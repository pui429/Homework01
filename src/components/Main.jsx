import About from "./About";
import Business from "./Business";
import PublicReations from "./PublicReations";
import Technology from "./Technology";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <main id="container" className="main">
        <section id="content">
          <Business />
          <Technology />
          <PublicReations />
          <About />
        </section>
      </main>
    </>
  );
};

export default Main;
