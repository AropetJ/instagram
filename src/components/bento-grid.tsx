import React from 'react';

interface GridItemProps {
  text: string;
  colSpan: string;
  rowSpan: string;
  additionalClasses?: string;
}

const GridItem: React.FC<GridItemProps> = ({ text, colSpan, rowSpan, additionalClasses = "" }) => (
  <div className={`
    bg-green-200 
    rounded-xl 
    flex 
    justify-center 
    items-center 
    col-span-${colSpan} 
    row-span-${rowSpan} 
    ${additionalClasses}
    hover:shadow-lg
    transition
    duration-300
    ease-in-out
  `}>
    <span className="
      text-center 
      text-sm 
      md:text-md 
      lg:text-lg 
      font-bold
    ">
      {text}
    </span>
  </div>
);

const BentoGrid = () => {
  return (
    <div className="
      p-4 
      h-full 
      w-full 
      grid 
      grid-cols-10 
      grid-rows-7 
      gap-2
    ">
      <GridItem 
        text="Featured Arrangement" 
        colSpan="10 md:col-span-4" 
        rowSpan="1 sm:row-span-2 md:row-span-5" 
        additionalClasses="bg-green-300"
      />
      <GridItem 
        text="Your Florist's Name" 
        colSpan="10 sm:col-span-5 md:col-span-3 xl:col-span-4" 
        rowSpan="1 sm:row-span-2" 
      />
      <GridItem 
        text="Florist's Photo" 
        colSpan="10 sm:col-span-5 md:col-span-3 xl:col-span-2" 
        rowSpan="1 lg:row-span-2" 
      />
      <GridItem 
        text="Popular Arrangement 1" 
        colSpan="10 sm:col-span-5 md:col-span-3" 
        rowSpan="1 sm:row-span-2 md:row-span-3" 
      />
      <GridItem 
        text="Popular Arrangement 2" 
        colSpan="10 sm:col-span-5 md:col-span-3" 
        rowSpan="1 sm:row-span-2 lg:row-span-3" 
      />
      <GridItem 
        text="Special Offer: 20% off Bouquets!" 
        colSpan="10 sm:col-span-5 md:col-span-6 lg:col-span-10" 
        rowSpan="1 sm:row-span-2 md:row-span-1" 
        additionalClasses="bg-green-400"
      />
      <GridItem 
        text="Contact Us: (256) 456-7890" 
        colSpan="10 sm:col-span-5 md:col-span-10" 
        rowSpan="1 sm:row-span-2" 
      />
    </div>
  );
}

export default BentoGrid;
