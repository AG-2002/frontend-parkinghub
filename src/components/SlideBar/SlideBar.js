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
    <div className=" grid gap-y-14">
      <div className=" grid gap-y-10">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-[#ffa31a] w-[1400px]">
            Parking Available <span className="text-black">At</span>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-lg text-slate-500 text-pretty w-[1400px]">
            ParkingHub is the smart parking management system that lets you park
            like a boss. Whether you’re going to a mall, a hospital, an airport
            or anywhere else, ParkingHub has a parking spot for you.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-[1220px] overflow-y-auto">
          <div className="flex ">{renderCardList}</div>
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
