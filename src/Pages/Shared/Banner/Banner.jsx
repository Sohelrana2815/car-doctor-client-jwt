const Banner = ({ text, img, routes }) => {
  return (
    <div className="relative  ">
      <div className="top-1/2 absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-24  rounded-lg">
        <h3 className="text-4xl font-bold  text-white ">{text}</h3>
        <p className="top-3/4 left-24 text-[#FF3811]"> {routes}</p>
      </div>
      <img src={img} alt="" className="w-full mx-auto h-[300px]" />
    </div>
  );
};

export default Banner;
