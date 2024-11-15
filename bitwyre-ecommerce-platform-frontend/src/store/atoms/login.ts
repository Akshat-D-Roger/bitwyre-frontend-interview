import { NavigateFunction } from 'react-router-dom';
import {atom, SetterOrUpdater} from 'recoil'

const loginAtom = atom<{isLogin:boolean, token:string}>({
    key:'loginAtom',
    default:{isLogin:false, token:''}
})

function logout(setLogin:SetterOrUpdater<{isLogin:boolean, token:string}>, navigate:NavigateFunction){
    setLogin({isLogin:false, token:''});
    localStorage.removeItem('token');
    localStorage.removeItem('cart')
    navigate('/login')
}

export default loginAtom;
export {logout}