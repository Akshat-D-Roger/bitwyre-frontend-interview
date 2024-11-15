import {atom, selector} from 'recoil'
import { products } from '../../assets/assets'

const productsAtom = atom({
    key:'productsAtom',
    default:products
})

const latestProductsSelector = selector({
    key:'latestProductsSelector',
    get:({get})=>{
        const products = get(productsAtom);
        if(!products)
            return [];
        return products.length>=10 ? products.slice(0,10) : products.slice(0, products.length);
    }
})

const bestSellersSelector = selector({
    key:'bestSellerSelector',
    get:({get})=>{
        const products = get(productsAtom);
        if(!products)
            return [];
        const bestSellerProducts = products.filter(item=>item.bestSeller);
        return bestSellerProducts.length>=5 ? bestSellerProducts.slice(0,5) : bestSellerProducts.slice(0, bestSellerProducts.length);
        
    }
})

export default productsAtom;
export {latestProductsSelector, bestSellersSelector}