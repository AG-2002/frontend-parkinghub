import React from 'react';
import Section from './Section/Section';
import SlideBar from "./SlideBar/SlideBar";
import SectionComps from "./SectionComps/SectionComps";

 function MainContent() {
  return (
    <div>
      <Section />
      <SlideBar />
     <SectionComps /> 
    </div>
  )
}

export default MainContent;
