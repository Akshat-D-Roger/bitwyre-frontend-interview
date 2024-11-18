import { useRecoilValue } from "recoil";
import { cartItemsList } from "../store/atoms/cart";
import Title from "./Title";
import darkModeAtom from "../store/atoms/darkMode";

const CartTotal = () => {

    const {price, length} = useRecoilValue(cartItemsList);
    const deliveryFee = 10;
    const currency = '$'
    const darkMode = useRecoilValue(darkModeAtom);

    if(length===0)
    return(
        <></>
    )

    return(
        <div className={`flex flex-col gap-10 ${darkMode && `text-white`}`}>
            <div className="flex flex-col gap-6">
                <Title firstName="CART" secondName="TOTAL"/>
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

export default CartTotal