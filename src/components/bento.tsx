import React from 'react';

const BentoGrid = () => {
  return ( 
    <div className="
    p-4 
    h-full 
    w-full 
    grid 
    grid-cols-10 
    grid-rows-7 
    gap-1
    ">
      <div className="
      bg-green-200
      rounded-xl
      flex
      justify-center
      items-center
      col-span-10
      md:col-span-4
      row-span-1
      sm:row-span-2
      md:row-span-5
      ">
        <span className="
        text-center 
        text-sm 
        md:text-md 
        lg:text-lg 
        font-bold
        ">
          Featured Arrangement
        </span>
      </div>
      <div className="
      bg-green-200 
      rounded-xl 
      flex justify-center 
      items-center 
      col-span-10 
      sm:col-span-5 
      md:col-span-3 
      xl:col-span-4 
      row-span-1 
      sm:row-span-2
      ">
        <span className="
        text-center 
        text-sm 
        md:text-md 
        lg:text-lg 
        font-bold
        ">
          Your Florist's Name
        </span>
      </div>
      <div className="
      bg-green-200 
      rounded-xl 
      flex 
      justify-center 
      items-center 
      col-span-10 
      sm:col-span-5 
      md:col-span-3 
      xl:col-span-2 
      row-span-1
      lg:row-span-2
      ">
        <span className="
        text-center 
        sm:text-sm 
        md:text-md 
        lg:text-lg
        ">
          Florist's Photo
        </span>
      </div>
      <div className="
      bg-green-200 
      rounded-xl 
      flex 
      justify-center 
      items-center 
      col-span-10 
      sm:col-span-5 
      md:col-span-3 
      row-span-1 
      sm:row-span-2
      md:row-span-3
      ">
        <span className="
        text-center 
        sm:text-sm 
        md:text-md 
        lg:text-lg
        ">
          Popular Arrangement 1
        </span>
      </div>
      <div className="
      bg-green-200 
      rounded-xl 
      flex 
      justify-center 
      items-center 
      col-span-10 
      sm:col-span-5 
      md:col-span-3 
      row-span-1 
      sm:row-span-2
      lg:row-span-3
      ">
        <span className="
        text-center 
        sm:text-sm 
        md:text-md 
        lg:text-lg
        ">
          Popular Arrangement 2
        </span>
      </div>
      <div className="
      bg-green-200 
      rounded-xl 
      flex 
      justify-center 
      items-center 
      col-span-10 
      sm:col-span-5 
      md:col-span-6
      lg:col-span-10
      row-span-1 
      sm:row-span-2 
      md:row-span-1
      ">
        <span className="
        text-center 
        text-sm 
        md:text-md 
        lg:text-lg 
        font-bold
        ">
          Special Offer: 20% off Bouquets!
        </span>
      </div>
      <div className="
      bg-green-200 
      rounded-xl 
      flex justify-center 
      items-center 
      col-span-10 
      sm:col-span-5 
      md:col-span-10 
      row-span-1 
      sm:row-span-2
      ">
        <span className="
        text-center 
        text-sm 
        md:text-md 
        lg:text-lg 
        font-bold
        ">
          Contact Us: (256) 456-7890
        </span>
      </div>
    </div>
   );
}
 
export default BentoGrid;