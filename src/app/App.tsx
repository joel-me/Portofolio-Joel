import React from "react";
import { Navbar } from "./components/Navbar";
import { ProfileHeader } from "./components/ProfileHeader";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-neutral-900 bg-white selection:bg-black selection:text-white">
      <Navbar />
      {/* ProfileHeader replaces Hero and About for a direct, minimal intro */}
      <ProfileHeader />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
