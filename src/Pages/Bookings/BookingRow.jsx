const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { customerName, img, price, date, service, email, _id, status } =
    booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle hover:text-error"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className=" h-24 rounded-lg">
              <img src={img} alt={service} />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">{service}</div>
            <div className="text-base opacity-70">{customerName}</div>
          </div>
        </div>
      </td>
      <td className="text-lg">{email}</td>
      <td className="text-lg">{date}</td>
      <td className="text-lg">${price}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-lg text-success">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-lg"
          >
            Please confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
