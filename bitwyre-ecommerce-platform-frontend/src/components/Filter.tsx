import FilterSubcomponent from "./FilterSubcomponent"
import { useState } from "react";
import { allFilters, FilterKeys } from "../store/atoms/filterAndSort";
import PriceRangeFilter from "./PriceRangeFilter";
import Title from "./Title";
import { useRecoilValue } from "recoil";
import darkModeAtom from "../store/atoms/darkMode";


const Filter = () => {
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const darkMode = useRecoilValue(darkModeAtom)

  return (
    <div className='w-full sm:w-1/5 sm:min-w-[165px] flex flex-col gap-[2rem] h-fit sm:sticky sm:top-0'>
        <div className='flex flex-row gap-2 items-center w-fit cursor-pointer sm:cursor-default' onClick={() => { setShowFilter(!showFilter) }}>
          <Title firstName="FILTERS" secondName=""/>
          <div className={`sm:hidden ${showFilter && '-rotate-90'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode?'white':'black'}`} className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
          </div>
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