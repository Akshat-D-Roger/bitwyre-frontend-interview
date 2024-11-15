import {atom, selector} from 'recoil'
import { productsType } from '../../assets/assets';

type sizesType = {
    [size:string]:number
}

type cartAtomType = {
    [id:string]:{productDetails:productsType, sizes:sizesType}
}

type cartItem  = {
    name:string, image:string, price:number, size:string, quantity:number, id:string
}

const cartAtom = atom<cartAtomType>({
    key:'cartAtom',
    default:{}
})

const cartItemsList = selector<{allItems:cartItem[], price:number, length:number}>({
    key:'cartDataSelector',
    get:({get})=>{
      const cartItems = get(cartAtom);
      const cartData:cartItem[] = [];
      let price = 0;
      let length = 0;
      Object.keys(cartItems).forEach(id=>{
        const productDetails:productsType = cartItems[id].productDetails;
        Object.keys(cartItems[id].sizes).forEach(size=>{
            cartData.push({name:productDetails.name, image:(productDetails.image)[0], price: productDetails.price, size, quantity:((cartItems[id]).sizes)[size], id});
            price+=(productDetails.price*((cartItems[id]).sizes)[size]);
            length+=((cartItems[id]).sizes)[size];
        })
      })
      return({allItems: cartData, price, length})
    }
})


export {cartAtom, cartItemsList};
export type {cartAtomType, cartItem};