import React from "react";
import ev from "../../../../assets/images/ev.webp";
import review from "../../../../assets/images/review.webp";
import ImgsCard from "../SectionsCard/ImgsCard";

 function ImgsCardData() {
  const cardList = [
    {
      src: ev,
      alt: "ev",
    },
    {
      src: review,
      alt: "review",
    },
  ];

  const renderCardList = cardList.map((card) => (
    <ImgsCard key={cardList.indexOf(card)} src={card.src} alt={card.alt} />
  ));
  return (
   
      <div className="flex flex-col items-center py-4 gap-y-6 md:flex-row md:w-3/5 md:gap-x-12 md:px-4">{renderCardList}</div>
  );
}

export default ImgsCardData;
