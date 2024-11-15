import {atom, selector} from 'recoil'
import productsAtom from './products';
import { productsType } from '../../assets/assets';

const searchAtom = atom<string>({
    key:'searchAtom',
    default:''
})

const allOrSearchedProducts = selector<productsType[]>({
    key:'allOrSearchedProducts',
    get:({get})=>{
        let products = get(productsAtom);
        const search = get(searchAtom);
        if(!search){
            return products;
        }
        products = products.filter(item=>(item.name.toLowerCase()).includes(search.toLowerCase()));
        return products;
    }
})

export {searchAtom, allOrSearchedProducts};