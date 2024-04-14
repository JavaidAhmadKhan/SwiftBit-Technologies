import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div>
      <h2 className="text-center">Projects we have done</h2>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 rounded-sm shadow-sm">
        <div className="m-2 border p-2">
          <Image
            src="/images/rivaaj_holidays.png"
            alt="Rivaaj Holidays"
            width={400}
            height={400}
          />

          <a href="https://therivaajholidays.com/" target="_blank">
            The Rivaaj Holidays
          </a>
        </div>
        <div className="m-2 border p-2">
          <Image
            src="/images/srinagar_tourist_cabs.png"
            alt="Srinagar Tourist Cabs"
            width={400}
            height={400}
          />

          <a href="https://srinagartouristcabs.com/" target="_blank">
            Srinagar Tourist Cabs
          </a>
        </div>
        <div className="m-2 border p-2">
          <Image
            src="/images/taxi_services.png"
            alt="Rivaaj Holidays"
            width={400}
            height={400}
          />

          <a href="https://taxi-booking-app-phi.vercel.app/" target="_blank">
            Taxi Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
