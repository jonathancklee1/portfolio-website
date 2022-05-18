import "./styles/style.scss";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="App">
      <SideNav />
      <main>
        <section className="about-me">
          <h1>Hi, I'm Jonathan Lee</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
