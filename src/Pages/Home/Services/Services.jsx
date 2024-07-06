import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-jwt-server-swart.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center space-y-5">
        <h2 className="text-[#FF3811] font-bold text-xl">Service</h2>
        <h3 className="text-5xl font-bold">Our Service Area</h3>
        <p className="font-normal text-base w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable.{" "}
        </p>
      </div>
      <div>
        {/* <p className="text-center text-4xl">Services: {services.length}</p> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
