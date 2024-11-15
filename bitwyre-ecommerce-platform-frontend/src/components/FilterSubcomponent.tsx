import { useRecoilState } from "recoil";
import { DefaultFilters, FilterKeys, selectedFilterAtom } from "../store/atoms/filterAndSort.ts";

const FilterSubcomponent = ({ filterType, values }:{filterType:FilterKeys, values:string[]}) => {

    const [selectedFilter, setSelectedFilter] = useRecoilState(selectedFilterAtom);

    function handleFilterChange(value:string) {
        setSelectedFilter(prev => {
            // let updatedFilter = {...prev};
            //the above only creates a shallow copy(refereneces would be present) and not deep copy , so you would not be able to update the value in array
            const updatedFilter:DefaultFilters = JSON.parse(JSON.stringify(prev));
            if (updatedFilter[filterType].includes(value)) {
                updatedFilter[filterType] = updatedFilter[filterType].filter(item => (item !== value))
            }
            else {
                (updatedFilter[filterType]).push(value);
            }
            return updatedFilter;
        });
    }


    return (
        <div className={`border-2 py-4 px-6`}>
            <div className='font-medium'>{filterType.toUpperCase()}</div>
            <div className='mt-[1rem] flex flex-col gap-4 items-start'>
                {values.map((value:string, index:number) => {
                    return (
                        <label key={index} className='flex flex-row gap-3 items-center text-sm text-gray-500'>
                            <input type="checkbox" onChange={() => handleFilterChange(value)} checked={selectedFilter[filterType].includes(value)} />
                            {value}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

export default FilterSubcomponent