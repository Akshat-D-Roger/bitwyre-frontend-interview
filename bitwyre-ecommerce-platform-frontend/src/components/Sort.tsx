import { useSetRecoilState } from 'recoil'
import { selectedSortAtom, SortType } from '../store/atoms/filterAndSort'

const Sort = () => {
    const setSelectedSort = useSetRecoilState<SortType>(selectedSortAtom)
  return (
    <select onChange={(e) => { setSelectedSort(e.currentTarget.value as SortType) }} className="py-2 px-4 text-sm rounded-sm border border-black">
              <option value="relevance">Sort by: relevance</option>
              <option value="lowToHigh">Sort by: low to high</option>
              <option value="highToLow">Sort by: high to low</option>
    </select>
  )
}

export default Sort