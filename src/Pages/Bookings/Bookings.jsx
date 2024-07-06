import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Banner from "../Shared/Banner/Banner";
import img1 from "../../assets/images/checkout/checkout.png";
import BookingRow from "./BookingRow";
import axios from "axios";
const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `https://car-doctor-jwt-server-swart.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = confirm("Are you sure you want to delete this booking?");
    if (proceed) {
      fetch(`https://car-doctor-jwt-server-swart.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully!");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleBookingConfirm = (id) => {
    const proceed = confirm("Do you want to confirm the order?");

    if (proceed) {
      fetch(`https://car-doctor-jwt-server-swart.vercel.app/bookings/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.modifiedCount > 0) {
            alert("Order confirm successfully!");

            const remaining = bookings.filter((booking) => booking._id !== id);
            const updated = bookings.find((booking) => booking._id === id);
            updated.status = "confirm";
            const newBooking = [updated, ...remaining];
            setBookings(newBooking);
          }
        });
    }
  };

  return (
    <div>
      <Banner text="Manage All Orders" img={img1}></Banner>
      <div className="overflow-x-auto mt-32">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-xl">Booking details</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Date</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
                booking={booking}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
