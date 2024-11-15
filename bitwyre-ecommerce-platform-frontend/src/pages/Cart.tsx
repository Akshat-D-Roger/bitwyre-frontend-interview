import { cartAtom, cartItem, cartItemsList } from "../store/atoms/cart"
import { useRecoilState, useRecoilValue } from "recoil"
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal.tsx";
import loginAtom from "../store/atoms/login.ts";
import { toast } from "react-toastify";
import Title from "../components/Title.tsx";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartAtom);
  const {allItems, length} = useRecoilValue(cartItemsList);
  const isLogin = useRecoilValue(loginAtom).isLogin

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
        <div className="flex flex-col">
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
                  <input type="number" value={item.quantity} min={1} step={1} onChange={(e:React.ChangeEvent<HTMLInputElement>) => { itemQuantityHandler(e, item) }} className="w-10 border outline-none" />
                </div>
                <div>
                  <button onClick={() => { deleteProduct(item) }}>
                    <img src={assets.bin_icon} alt="delete-button" className="w-5" />
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