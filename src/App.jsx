import { useState } from "react";
import { Header, Footer } from "./global/index";
import { Hero, Discover, Explore } from "./sections";

const App = () => {
  const [cartCount, setCartCount] = useState(0); // Ensure state is defined

  return (
    <main>
      <Header cartCount={cartCount} />
      <Hero />
      <Discover />
      <Explore cartCount={cartCount} setCartCount={setCartCount} />
      <Footer />
    </main>
  );
};

export default App;
