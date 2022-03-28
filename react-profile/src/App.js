import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [categories] = useState([
    { name: "About", description :"A description of myself and my expertise I've learned in the past year.",},
    { name: "Portfolio", description :"This is a portfolio of my works!",},
    { name: "Contact", description: "This is a page where you can contact me on the daily."},
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
        <About></About>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
