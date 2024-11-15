import { preloadVideo } from "@remotion/preload";
import { useEffect, useRef } from "react";
import { productsType } from "../../assets/assets";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { allOrSearchedProducts } from "../atoms/search";
import { DefaultFilters, filteredItemsAtom, FilterKeys, maxPriceAtom, minPriceAtom, selectedFilterAtom, selectedSortAtom, sortedItemsAtom, SortType } from "../atoms/filterAndSort";
import { preloadVidsAtom } from "../atoms/vidsToPreload";

export default function useCollections() {
    const products = useRecoilValue<productsType[]>(allOrSearchedProducts);
    const firstRender = useRef(true)
  
    const selectedFilters = useRecoilValue<DefaultFilters>(selectedFilterAtom);
    const [filteredItems, setFilteredItems] = useRecoilState<productsType[]>(filteredItemsAtom);
    const resetFilters = useResetRecoilState(selectedFilterAtom);
  
    const selectedSort = useRecoilValue<SortType>(selectedSortAtom)
    const [sortedItems, setSortedItems] = useRecoilState<productsType[]>(sortedItemsAtom)
    const resetSort = useResetRecoilState(selectedSortAtom)

    const minPrice = useRecoilValue(minPriceAtom);
    const maxPrice = useRecoilValue(maxPriceAtom)

    const preloadVids = useRecoilValue(preloadVidsAtom);
  
    //////////////////////////////////////////////////////////////////////////////////////////////////
  
    function filterProducts():void {
      let tempProducts:productsType[] = products;
      ((Object.keys(selectedFilters)) as FilterKeys[]).forEach((item:FilterKeys) => {
        const filterType:FilterKeys = item;
        const filterValue:string[] = selectedFilters[item];
        if (filterValue.length > 0) {
          tempProducts = tempProducts.filter(product => {
            return filterValue.includes(product[filterType])
          })
        }
      });
      // price filter
      tempProducts =  tempProducts.filter((item:productsType)=>{
        const price = item.price;
        const min = minPrice ? parseInt(minPrice) : 0;
        const max = maxPrice ? parseInt(maxPrice) : 10000;
        return price >= min && price <= max;
      })

      setFilteredItems(tempProducts);
    }
  
    function sortProducts():void {
      const filteredItemsCopy:productsType[] = JSON.parse(JSON.stringify(filteredItems));
      switch (selectedSort) {
        case 'highToLow':
          setSortedItems(filteredItemsCopy.sort((a, b) => (b.price - a.price)))
          break;
  
        case 'lowToHigh':
          setSortedItems(filteredItemsCopy.sort((a, b) => (a.price - b.price)))
          break;
  
        default:
          setSortedItems(filteredItemsCopy);
          break;
      }
    }
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
      return () => { 
        resetFilters()
        resetSort()
      }
    }, [])
  
    useEffect(() => {
      filterProducts();
    }, [selectedFilters, products, minPrice, maxPrice])
  
    useEffect(() => { 
      if(firstRender.current){
        firstRender.current = false;
        return;
      }
      sortProducts();
     }, [selectedSort,filteredItems])
  
     useEffect(()=>{
      for(const vid in preloadVids){
        preloadVideo(preloadVids[vid]);
      }
     }, [])

     return {sortedItems};
  
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
}