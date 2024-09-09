import Card from "./Card/Card";
function SlideBar() {
  const cardList = [
    {
      title: "Parking Solutions",
      subTitle: "Co-working Space",
      summary: "Easy Mobility",
    },
    {
      title: "Smart Parking",
      subTitle: "Educational Institutions",
      summary: "Entry & Exit",
    },
    {
      title: "Efficient Operations",
      subTitle: "Hospitals",
      summary: "Stress-Free",
    },
    {
      title: "Enhanced Security",
      subTitle: "Restaurants",
      summary: "Innovative Tech",
    },
    {
      title: "Convenient Parking",
      subTitle: "Event Venues",
      summary: "Hassle-Free",
    },
  ];

  const renderCardList = cardList.map((card) => {
    return (
      <Card
        key={cardList.indexOf(card)}
        title={card.title}
        subTitle={card.subTitle}
        summary={card.summary}
      />
    );
  });
  return (

    <div className="grid w-full max-md:w-auto overflow-x-hidden">

          <div className="">
            <h1 className="text-4xl w-fit font-bold text-[#ffa31a] max-md:text-lg relative left-80 p-2 max-md:left-10 ">
              Parking Available <span className="text-black">At</span>
            </h1>
          </div>
                
          <div className="py-2">
            <p className="relative left-80 p-1 w-9/12 text-lg text-slate-500 text-pretty max-md:text-xs max-md:leading-5 max-md:left-10 max-md:w-4/12">
              ParkingHub is the smart parking management system that lets you park
              like a boss. Whether you’re going to a mall, a hospital, an airport
              or anywhere else, ParkingHub has a parking spot for you.
            </p>
          </div> 

      <div className="flex justify-center items-center max-md:justify-start ">
        <div className="flex w-3/5 overflow-y-auto max-md:w-2/5 max-md:ml-1">
          <div className="flex ">{renderCardList}</div>
        </div>
      </div>

    </div>
  );
}

export default SlideBar;
