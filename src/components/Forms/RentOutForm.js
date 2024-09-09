import { useState } from "react";

function RentOutForm() {
  const [formData, setFormData] = useState({ phone: "", name: "", city: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ phone: "", name: "", city: "" });
  };

  const className =
    "p-2 text-lg border-2 border-black focus:outline-none ";
  const classButton = "p-2 bg-[#ffa31a] w-32 shadow-md";
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-evenly h-[40vh]"
    >
      <label htmlFor="phone">Phone *</label>
      <input
        type="tel"
        name="phone"
        className={className}
        onChange={handleChange}
        value={formData.phone}
      />

      <label htmlFor="name">Name *</label>
      <input
        type="text"
        name="name"
        className={className}
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="city">City *</label>
      <input
        type="text"
        name="city"
        className={className}
        value={formData.city}
        onChange={handleChange}
      />

      <button type="submit" className={classButton}>
        Submit
      </button>
    </form>
  );
}

export default RentOutForm;
