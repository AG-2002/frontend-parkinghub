import group from "../../../images/group.webp";
import { useNavigate } from "react-router-dom";

function AboutSection() {
  const navigate = useNavigate();

  const handleClickContactForm = () => {
    navigate("/contact");
  };

  return (
    <div className="h-auto mt-24">
      <div>
        <div className="h-[600px] w-full bg-[#ffa31a] flex flex-col items-center ">
          <div className="mt-10 flex flex-col items-center gap-y-16">
            <h1 className="font-bold text-white text-7xl mt-10">aBOUT uS</h1>
            <p className="text-white text-lg text-center w-2/5">
              ParkingHub is a smart parking solutions firm that aims to simplify
              and transform the parking experience for customers while helping
              property owners to optimize their parking spaces with efficient
              and cost effective digital systems.
            </p>
          </div>
        </div>
        <div className=" flex justify-center">
          <img
            src={group}
            alt="group"
            className="h-2/5 w-3/5 relative bottom-44 "
          />
        </div>
      </div>
      <div className="flex w-full h-[600px]">
        <div className="w-1/2 flex justify-center items-center">
          <h1 className="text-3xl font-bold w-96">
            Welcome to a new era of Parking
          </h1>
        </div>
        <div className="w-1/2 flex flex-col justify-evenly ">
          <p className="text-sm text-slate-500 w-1/2 ml-12">
            ParkingHub where state-of-the-art technology and innovative
            solutions are revolutionizing the parking experience. ParkingHub is
            designed to make parking effortless by integrating smart sensors,
            mobile applications, and real-time data analytics. With ParkingHub,
            drivers can easily locate available parking spaces, reserve them
            ahead of time, and handle payments seamlessly through a single
            platform.
          </p>
          <p className="text-sm text-slate-500 w-1/2 ml-12">
            Security and accessibility are also at the forefront of ParkingHub’s
            design. Enhanced surveillance and automated enforcement ensure that
            parking rules are adhered to, minimizing illegal parking and
            enhancing safety. For individuals with disabilities, ParkingHub
            offers improved accessibility features by clearly identifying and
            reserving accessible parking spots, ensuring that these spaces are
            used appropriately and are readily available when needed.
          </p>
          <p className="text-sm text-slate-500 w-1/2 ml-12">
            ParkingHub ushers in a new era of parking management that leverages
            advanced technology to create a seamless, efficient, and
            environmentally friendly experience. By integrating smart solutions,
            ParkingHub not only enhances convenience for drivers but also
            supports better urban planning and sustainable city living. As
            ParkingHub continues to evolve, it promises to further transform
            urban mobility, making our cities smarter and more connected than
            ever before.
          </p>
        </div>
      </div>
      <div className="flex w-full h-[100vh] ">
        <div className="w-1/2 flex justify-end ">
          <div className=" w-3/4 h-full flex flex-wrap justify-evenly items-center">
            <div className="border border-black rounded-2xl hover:border-green-500 shadow-2xl w-64 h-auto p-8 grid gap-y-4">
              <h1 className="font-bold">Convenience</h1>
              <p className="text-slate-500 text-sm leading-loose">
                ParkingHub offers a highly convenient parking solution for car
                owners who are short on time or prefer hassle-free parking. With
                ParkingHub, you can pre-book a valet who will park your car for
                you and retrieve it when you're ready to leave.
              </p>
            </div>
            <div className="border border-black rounded-2xl hover:border-green-500 shadow-2xl w-72 h-auto p-8 grid gap-y-4">
              <h1 className="font-bold">Safety</h1>
              <p className="text-slate-500 text-sm leading-loose ">
                ParkingHub takes the safety and security of your vehicle
                seriously. They ensure that your car is parked in a secure
                location and are fully insured to cover any damages that may
                occur while your vehicle is in their care.
              </p>
            </div>
            <div className="border border-black rounded-2xl hover:border-green-500 shadow-2xl w-60 h-auto p-8 grid gap-y-4">
              <h1 className="font-bold ">Flexibility</h1>
              <p className="text-slate-500 text-sm leading-loose ">
                ParkingHub offers a range of parking services to meet your
                specific needs, whether you need short-term or long-term
                parking. They also offer a range of pricing options to fit your
                budget.
              </p>
            </div>
            <div className="border border-black rounded-2xl hover:border-green-500 shadow-2xl w-64 h-auto p-8 grid gap-y-4">
              <h1 className="font-bold ">Professionalism</h1>
              <p className="text-slate-500 text-sm leading-loose">
                ParkingHub’s team of experienced valets are trained to provide
                professional and courteous service to all customers. They pride
                themselves on delivering exceptional customer service and
                ensuring that each customer's parking experience is stress-free
                and enjoyable.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center ">
          <div className="w-7/12 h-full flex flex-col justify-center gap-y-10">
            <h1 className="font-bold text-3xl">
              Making Parking efficient and EZ!
            </h1>
            <p className="text-slate-500 text-sm leading-loose">
              One of the unique features of ParkingHub is its focus on
              innovation. The company uses technology to transform the way
              parking works, both in terms of the efficiency of operations for
              property owners and parking operators, as well as the ease of
              access to parking for parking users.
            </p>
            <p className="text-slate-500 text-sm leading-loose">
              The company’s proprietary tech platform can digitize any type and
              size of parking space. Our Hub web for users allows parking
              visitors to find and access parking spots and access several other
              car related services on-the-go. Another key aspect of ParkingHub’s
              services is its commitment to customer satisfaction. The company’s
              field operations team is well trained to ensure that parking
              visitors experience the best in customer service, and they are
              always willing to go the extra mile to ensure that customers are
              satisfied. This includes access to parking spots, valet
              assistance, and other value added services such as EV Charging,
              car wash and detailing services and several others.
            </p>
            <p className="text-slate-500 text-sm leading-loose">
              We are a customer first organization, committed to providing a
              hassle-free and convenient parking and vehicle care experience.
              Our focus on innovation, technology and customer satisfaction
              allowing us to focus on our vision on revolutionizing the way
              parking is experienced by users in India.
            </p>
            <button
              onClick={handleClickContactForm}
              className="p-2 text-white bg-[#ffa31a] font-semibold text-xl rounded-3xl w-44 hover:bg-black"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] flex justify-center items-center">
        <div className="h-72 w-3/4 bg-[#ffa31a] rounded-3xl flex justify-evenly items-center">
          <div className="w-2/5 h-4/5 flex flex-col justify-center gap-y-16">
            <h1 className="font-bold text-2xl text-white">
              Have a question? Get in touch
            </h1>
            <button
              onClick={handleClickContactForm}
              className="p-2 text-white bg-black font-semibold text-lg rounded-3xl w-44 hover:bg-white hover:text-black"
            >
              Contact Us
            </button>
          </div>
          <div className="w-2/5 h-3/5 flex justify-center ">
            <p className="text-sm leading-loose w-4/5">
              Contact us today to experience hassle-free parking solutions with
              ParkingHub. Our team is ready to assist you with any queries or
              concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
