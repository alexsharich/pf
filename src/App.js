import React from 'react';
import './App.css';
import { Contacts } from './contacts/Contacts';
import { Footer } from './footer/Footer';
import {Header} from './header/Header'
import {Main} from './main/Main'
import { MyProjects } from './myProjects/MyProJects';
import { Skills } from './skills/Skills';
import { Variants } from './variants/Variants';

function App() {
  return (
    <div className="App">
       <Header />
       <Main/>
       <Skills/>
       <MyProjects />
       <Variants/>
       <Contacts/>
       <Footer />
    </div>
  );
}

export default App;
