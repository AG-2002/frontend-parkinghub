import React from 'react';
import Section from './Section/Section';
import SlideBar from "./SlideBar/SlideBar";
import SectionComps from "./SectionComps/SectionComps";

 function MainContent() {
  return (
    <main className="w-screen h-full">
      <Section />
      {/* <SlideBar />
     <SectionComps />  */}
    </main>
  )
}

export default MainContent;
