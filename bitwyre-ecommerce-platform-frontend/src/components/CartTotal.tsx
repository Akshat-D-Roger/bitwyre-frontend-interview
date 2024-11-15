import { useRecoilValue } from "recoil";
import { cartItemsList } from "../store/atoms/cart";

const CartTotal = () => {

    const {price, length} = useRecoilValue(cartItemsList);
    const deliveryFee = 10;
    const currency = '$'

    if(length>0){
        return(
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <div className='flex flex-wrap items-center gap-2'>
                        <div className='text-3xl text-gray-500'>CART</div>
                        <div className='text-3xl'>TOTALS</div>
                        <hr className='w-11 border-0 bg-slate-600 h-[2px]' />
                    </div>
                    <div className="flex flex-col text-sm">
                        <div className="flex flex-row justify-between py-2 border-b">
                            <div>Subtotal</div>
                            <div>{currency}{price}</div>
                        </div>
                        <div className="flex flex-row justify-between py-2 border-b">
                            <div>Shipping Fee</div>
                            <div>{currency}{deliveryFee}</div>
                        </div>
                        <div className="flex flex-row justify-between py-2">
                            <div className="font-semibold">Total</div>
                            <div>{currency}{price+deliveryFee}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

  return (
    <></>
  )
}

export default CartTotal