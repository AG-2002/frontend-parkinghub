import carefree from "../../../../assets/images/CardsImg/carefree.svg";
import contactless from "../../../../assets/images/CardsImg/contactless.svg";
import savings from "../../../../assets/images/CardsImg/savings.svg";
import React from "react";
import ImgCard from "../SectionsCard/ImgCard";

 function ImgCardData() {
  const cardList = [
    {
      src: carefree,
      alt: "carefree",
    },
    {
      src: contactless,
      alt: "contactless",
    },
    {
      src: savings,
      alt: "savings",
    },
  ];

  const renderCardList = cardList.map((card) => (
    <ImgCard key={cardList.indexOf(card)} src={card.src} alt={card.alt} />
  ));
  return (
    
    <div className="flex flex-col items-center w-full py-4 justify-evenly gap-y-4 md:flex-row md:w-3/5 md:gap-x-10 md:px-4 ">{renderCardList}</div>
    
  );
}

export default ImgCardData;
