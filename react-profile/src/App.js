import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [categories] = useState([
    { name: "Portfolio", description :"This is a portfolio of my works!",},
    { name: "Resume", description: "and This is where I keep my resume! (IF I HAD ONE!)"}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}        
        ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About currentCategory={currentCategory}></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
