import { cartAtom, cartItem, cartItemsList } from "../store/atoms/cart"
import { useRecoilState, useRecoilValue } from "recoil"
import CartTotal from "../components/CartTotal.tsx";
import loginAtom from "../store/atoms/login.ts";
import { toast } from "react-toastify";
import Title from "../components/Title.tsx";
import darkModeAtom from "../store/atoms/darkMode.ts";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartAtom);
  const {allItems, length} = useRecoilValue(cartItemsList);
  const isLogin = useRecoilValue(loginAtom).isLogin;
  const darkMode = useRecoilValue(darkModeAtom);

  function deleteProduct(item:cartItem) {
    const cartItemsCopy = JSON.parse(JSON.stringify(cartItems));
    delete ((cartItemsCopy[item.id]).sizes)[item.size]
    if(Object.keys(cartItemsCopy[item.id].sizes).length===0){
      delete cartItemsCopy[item.id];
    }
    setCartItems(cartItemsCopy);
    if(isLogin)
    localStorage.setItem('cart', JSON.stringify(cartItemsCopy));
  }

  function itemQuantityHandler(e:React.ChangeEvent<HTMLInputElement>, item:cartItem) {
    let quantity = Math.round(Number(e.currentTarget.value));
    if (quantity <= 0) {
      toast.error('Quantity cannot be less than 1');
      quantity = 1; // Reset to 1 if 0 or negative
      return;
    }
    const cartItemsCopy = JSON.parse(JSON.stringify(cartItems));
    cartItemsCopy[item.id].sizes[item.size] = quantity;
    setCartItems(cartItemsCopy);
    
  }

  return (
    <div className="w-full border-t-[1px] pt-[2rem] mb-[10rem] flex flex-col gap-[5rem]">
      <div className="flex flex-col gap-[2rem]">
        <div>
          <Title firstName="YOUR" secondName="CART"/>
        </div>
        <div className={`flex flex-col ${darkMode && 'text-white'}`}>
          {allItems.map((item:cartItem, index:number) => {
            return (
              <div key={index} className="flex flex-row py-4 border-y justify-between items-center">
                <div className="flex flex-row gap-6 w-2/5">
                  <div className="shrink-0"><img src={item.image} alt='product-image' className="w-20" /></div>
                  <div className="flex flex-col gap-4">
                    <div className="text-xs sm:text-lg">{item.name}</div>
                    <div className="flex flex-row gap-4 items-center">
                      <div>${item.price}</div>
                      <div className="border p-2 py-1">{item.size}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="number" value={item.quantity} min={1} step={1} onChange={(e:React.ChangeEvent<HTMLInputElement>) => { itemQuantityHandler(e, item) }} className={`w-10 border outline-none text-black pl-1 ${darkMode && 'border-white bg-black text-white'}`} />
                </div>
                <div>
                  <button onClick={() => { deleteProduct(item) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${darkMode?'white':"currentColor"}`} className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
      {length>0 && <div className="w-full flex justify-end">
        <div className="w-full sm:w-2/5 flex flex-col gap-10">
          <CartTotal/> 
          <button disabled className="p-2 px-4 bg-black text-white text-center w-full bg-gray-500">Proceed To Checkout</button>
        </div>
      </div>}
    </div>
  )
}

export default Cart