import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import React, { useState } from 'react';

function App() {
  const [categories] = useState([
    { name: "Portfolio", description :"This is a portfolio of my works!",},
    { name: "Resume", description: "and This is where I keep my resume! (IF I HAD ONE!)"}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const [currentPageSelected, setCurrentPageSelected] = useState("about");


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setCurrentPageSelected={setCurrentPageSelected}        
        ></Nav>
      <main>
        {currentPageSelected}
        {currentPageSelected === "about" ? <About> </About> : null }
        {currentPageSelected === "contact" ? <ContactForm> </ContactForm> : null }
        {currentPageSelected === "resume" ? <Resume> </Resume> : null }
        {currentPageSelected === "portfolio" ? <Portfolio> </Portfolio> : null }
        {/* {!contactSelected ? (
          <>
            <About currentCategory={currentCategory}></About>
            <Resume></Resume>
            <Portfolio></Portfolio>
          </>
        ) : (
          <ContactForm></ContactForm>
        )} */}
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
