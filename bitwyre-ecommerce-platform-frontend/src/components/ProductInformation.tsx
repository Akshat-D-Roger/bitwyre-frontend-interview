import { useState } from 'react'
import { productsType } from '../assets/assets';
import { assets } from '../assets/assets';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartAtom } from '../store/atoms/cart';
import loginAtom from '../store/atoms/login';
import { toast } from 'react-toastify';

const ProductInformation = ({product}:{product:productsType}) => {
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [cartItems, setCartItems] = useRecoilState(cartAtom);
    const isLogin = useRecoilValue(loginAtom);
    const currency:string = '$';
    const productId = product._id

    function addToCart(){
        if(!product || !productId)
          return;
        if(!selectedSize){
          toast.error('Please select a size')
          return;
        }
        const cartItemsCopy = JSON.parse(JSON.stringify(cartItems))
        if(cartItemsCopy[productId as string]){
          if((cartItemsCopy[productId as string].sizes)[selectedSize]){
            ((cartItemsCopy[productId as string]).sizes)[selectedSize]++;
          }
          else{
            ((cartItemsCopy[productId as string]).sizes)[selectedSize] = 1;
          }
        }
        else{
          (cartItemsCopy[productId as string]) = {productDetails:product as productsType, sizes:{[selectedSize]:1}}
        }
        setCartItems(cartItemsCopy);
        if(isLogin.isLogin)
        localStorage.setItem('cart', JSON.stringify(cartItemsCopy));
        setSelectedSize('');
        toast('Product added to cart')
      }

  return (
    <div className="flex-1 sm:pt-[1rem] flex flex-col gap-[1rem] sm:ml-[2rem]">
        <div className="font-medium text-2xl">{product.name}</div>
        <div className="flex flex-row items-center">
            {[...Array(4)].map((_, index) => (<img key={index} src={assets.star_icon} className="w-[15px] h-[15px]" />))}
            <img className="w-[15px] h-[15px]" src={assets.star_dull_icon} />
            <div className="ml-[1rem] text-sm">(122)</div>
        </div>
        <div className="font-medium text-2xl">{`${currency} ${product.price}`}</div>
        <div className="text-gray-500 text-md md:w-4/5">{product.description}</div>
        <div className="flex flex-row items-center pt-[1.5rem]">
            <div>Select Size</div>
            <div className="ml-[2rem] flex flex-row gap-2">
                {product.sizes.map((size, index) => (<button key={index} className={`p-2 text-l border bg-gray-300 px-4 ${selectedSize === size && "border-red-500"} `} onClick={() => (setSelectedSize(size))}>{size}</button>))}
            </div>
        </div>
        <div className="mt-[1rem]">
          <button disabled={product.available==='Out of Stock'} className="bg-black text-white border border-gray-200 p-3 px-8 disabled:bg-[#cccccc] disabled:text-[#666666] disabled:border-[#999999]" onClick={() => { addToCart() }}>Add to Cart</button>
        </div>
        <div className="border-t-2 mt-[1rem]"></div>
        <div className="flex flex-col text-sm gap-1 text-gray-500 mt-[1rem]">
          <div>100% Original product.</div>
          <div>Cash on delivery is available on this product.</div>
          <div>Easy return and exchange policy within 7 days.</div>
        </div>
  </div>
  )
}

export default ProductInformation