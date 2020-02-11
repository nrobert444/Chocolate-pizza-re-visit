import React from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import Footer from './Footer.js';
import Header from './Header';
import Section from './Section.js';
import CpSection from './CpSection.js';
import Recipe from './Recipe.js';
import Body from './Body.js';



function App() {
  const image = './fb-icon.png';
  const image1 = './twit-icon.png';
  const image2 = './gp-icon.png';
  const image3 = './insta-icon.png';
  const image4 = './flic-icon.png';
  const image5 = './pint-icon.png';
  const image6 = './rss-icon.png';
  const image7 = './mail-icon.png'
  const image8 = './small-logo.png';
  const image9 = './choco-pizza.png';
  const ingredient = '1 1/2 cups milk';
  const ingredient1 = '1/2 cup mascarpone';
  const ingredient2 ='1/2 tsp pink salt';
  const ingredient3 = '1lb Black mission figs';
  return (
  <div>
      <Header image = {image} image1 = {image1} image2 = {image2} image3 = {image3} image4 = {image4} image5 = {image5} image6 = {image6} image7 = {image7} image8 ={image8} />
      <Section />
      <CpSection image9 = {image9} />
      <Body />
      <Recipe ingredient = {ingredient} ingredient1 = {ingredient1} ingredient2 = {ingredient2} ingredient3 = {ingredient3}/>
      <Footer />
    </div>
  );
}


export default App;

