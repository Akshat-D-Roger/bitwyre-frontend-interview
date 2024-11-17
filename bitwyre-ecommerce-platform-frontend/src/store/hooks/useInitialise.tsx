import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import loginAtom, { logout } from "../atoms/login.ts";
import {cartAtom} from "../atoms/cart";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import * as jose from 'jose'
import { preloadVideo } from "@remotion/preload";
import { preloadVidsAtom } from "../atoms/vidsToPreload";


export default function useInitialise(){
    const [login, setLogin] = useRecoilState(loginAtom);
    const setCartItems = useSetRecoilState(cartAtom);
    const navigate = useNavigate();
    const preloadVids = useRecoilValue(preloadVidsAtom);

    async function checkToken(){
        if(!login.isLogin){
            try{
                let token:string|null= localStorage.getItem('token');
                if(token){
                    token = token as string;
                    const key = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET_KEY);
                    await jose.jwtVerify(token, key);
                    setLogin({isLogin:true, token:token});
                }
            }
            catch(err){
                console.error(`jwt verification failed: ${err}`)
                toast.error(`Not able to sign in`)
                logout(setLogin, navigate);
            }
        }
    }

    useEffect(()=>{checkToken()}, [])

    //cartItems atom is 100% dependant on isLogin state but it is not derived from isLogin state. So, less sense to use selector


    useEffect(()=>{
        if(login.isLogin){
            try{
                const cartItemsString:string|null = localStorage.getItem('cart')
                if(!cartItemsString)
                return;
                const cartItems = JSON.parse(cartItemsString);
                setCartItems(cartItems)
            }
            catch(err){
                console.error(`unable to fetch cart currently ${err}`);
                toast.error('Unable to fetch cart right now');
            }
        }
        else{
            setCartItems({});
        }
    }, [login.isLogin])

    useEffect(()=>{
        for(const vid in preloadVids){
          preloadVideo(preloadVids[vid]);
        }
    }, [])
}