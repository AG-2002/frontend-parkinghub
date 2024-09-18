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
      summary: "Rapid Entry & Exit",
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


    <section className="w-full h-[500px] md:h-[600px]">
      <div className="flex flex-col w-full h-full overflow-x-hidden justify-evenly ">
            <div className="flex justify-center w-full ">
              <h1 className="w-11/12 text-2xl font-semibold md:w-7/12 text-color-primary md:text-3xl lg:text-4xl lg:font-bold">
                Parking Available <span className="text-black">At</span>
              </h1>
            </div>
      
            <div className="flex items-center justify-center w-full h-2/5 md:h-1/6">
              <p className="w-11/12 text-lg h-11/12 text-slate-500 text-pretty md:w-7/12 ">
                ParkingHub is the smart parking management system that lets you park
                like a boss. Whether you’re going to a mall, a hospital, an airport
                or anywhere else, ParkingHub has a parking spot for you.
              </p>
            </div>
        <div className="flex items-center justify-center h-2/6 md:h-3/5">
          <div className="flex overflow-y-auto md:w-3/5">
            <div className="flex px-1 py-2 gap-x-4 ">{renderCardList}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SlideBar;