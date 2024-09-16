import React from 'react';
import BookOnline from "../../../../assets/images/SectionCompsImg/BookOnline.svg";
import ParkSecure from "../../../../assets/images/SectionCompsImg/ParkSecure.svg";
import ParkSmart from "../../../../assets/images/SectionCompsImg/ParkSmart.svg";
import VehicleRecall from "../../../../assets/images/SectionCompsImg/VehicleRecall.svg";
import SectionCard from '../SectionsCard/SectionCard';

function SectionCardData() {
    const cardList = [
        {
          src: BookOnline,
          alt: "Search",
          title: "Book Online",
          summary: "Just book a Parking online or scan a QR code at the location",
        },
        {
          src: ParkSecure,
          alt: "Search",
          title: "Park Secure",
          summary: "No more worrying about the safety and security of your car",
        },
        {
          src: ParkSmart,
          alt: "Search",
          title: "Park Smart",
          summary: " Get real-time updates and notifications on your parking status",
        },
        {
          src: VehicleRecall,
          alt: "Search",
          title: "Vehicle Recall",
          summary: "Recall over Hub Web and track time to return",
        },
      ];
    
      const renderCardList = cardList.map((card) => (
       <SectionCard 
        key={cardList.indexOf(card)} 
        src={card.src} 
        alt={card.alt}
        title={card.title}
        summary={card.summary} />
      ));


  return (
    
      <div className=" md:w-2/5">
        {renderCardList}
    </div>

  )
}

export default SectionCardData;
