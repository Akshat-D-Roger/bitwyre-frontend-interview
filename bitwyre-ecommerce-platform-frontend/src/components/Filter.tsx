import FilterSubcomponent from "./FilterSubcomponent"
import { assets } from "../assets/assets"
import { useState } from "react";
import { allFilters, FilterKeys } from "../store/atoms/filterAndSort";
import PriceRangeFilter from "./PriceRangeFilter";


const Filter = () => {
    const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <div className='w-full sm:w-1/5 sm:min-w-[165px] flex flex-col gap-[2rem] h-fit sm:sticky sm:top-0'>
        <div className='flex flex-row gap-2 items-center w-fit cursor-pointer sm:cursor-default' onClick={() => { setShowFilter(!showFilter) }}>
          <div className='text-3xl'>FILTERS</div>
          <img className={`sm:hidden h-3 ${showFilter && 'rotate-90'}`} src={assets.dropdown_icon} alt="dropdown-icon" />
        </div>
        <div className={`flex flex-col gap-[2rem] ${!showFilter && 'hidden'} sm:flex`}>
          {
            (Object.entries(allFilters) as [FilterKeys, string[]][]).map(
              (item: [FilterKeys, string[]]) => <FilterSubcomponent key={item[0]} filterType={item[0]} values={item[1]} />
            )
          }
          <PriceRangeFilter/>
        </div>
      </div>
  )
}

export default Filter