import Banner from "../Shared/Banner/Banner";
import img1 from "../../assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Checkout = () => {
  const service = useLoaderData();
  console.log(service);
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);
  //   console.log(user);

  const handleBookingService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);

    fetch("https://car-doctor-jwt-server-swart.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          alert("service booked successfully!");
        }
      });
  };
  return (
    <div>
      <h3 className="text-center text-2xl font-bold mb-6">Service : {title}</h3>
      <Banner text="Check Out" img={img1}></Banner>
      <form onSubmit={handleBookingService}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="Order Confirm"
          className="btn btn-warning w-full mt-6"
        />
      </form>
    </div>
  );
};

export default Checkout;
