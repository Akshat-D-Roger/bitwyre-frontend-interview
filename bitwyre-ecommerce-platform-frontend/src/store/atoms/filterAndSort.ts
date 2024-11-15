import { atom } from "recoil";
import { productsType } from "../../assets/assets";

const allFilters:{category:string[], subCategory:string[], available:string[], seller:string[]} = {
    category:["Men", "Women", "Kids"],
    subCategory:["Topwear", "Bottomwear", "Winterwear"],
    available:["Available", "Out of Stock"],
    seller:["Bitwyre", "Others"]
}

type FilterKeys = keyof typeof allFilters;
type DefaultFilters = { [key in FilterKeys]: string[] };
type SortType = 'relevance' | 'highToLow' | 'lowToHigh'

function getDefaultFilters():DefaultFilters{
    const filters:DefaultFilters = {} as DefaultFilters;
    Object.keys(allFilters).forEach(filter=>{
        filters[filter as FilterKeys] = [];
    })
    return filters;
}

const selectedFilterAtom = atom<DefaultFilters>({
    key:'filterAtom',
    default:getDefaultFilters()
})

const minPriceAtom = atom<string>({
    key:'minPriceAtom',
    default:''
})

const maxPriceAtom = atom<string>({
    key:'maxPriceAtom',
    default:''
})

const filteredItemsAtom = atom<productsType[]>({
    key:'filteredItemsAtom',
    default: []
})

const selectedSortAtom = atom<SortType>({
    key:'selectedSortAtom',
    default:'relevance'
})

const sortedItemsAtom = atom<productsType[]>({
    key:'sortedItemsAtom',
    default:[]
})




export {selectedFilterAtom, allFilters, filteredItemsAtom, selectedSortAtom ,sortedItemsAtom, minPriceAtom, maxPriceAtom};
export type {FilterKeys, DefaultFilters, SortType}