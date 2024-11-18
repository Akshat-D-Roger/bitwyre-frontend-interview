import { useRecoilValue, useSetRecoilState } from "recoil";
import loginAtom from "../store/atoms/login.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as jose from 'jose'
import darkModeAtom from "../store/atoms/darkMode.ts";

const Login = () => {

  const setLogin = useSetRecoilState(loginAtom);
  const navigate = useNavigate();
  const darkMode = useRecoilValue(darkModeAtom)

  async function onSubmitHandler(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData:FormData = new FormData(e.target as HTMLFormElement);
    const email:string = formData.get('email') as string;
    const password:string = formData.get('password') as string;
    try{
      const key = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET_KEY);
      const payload:{email:string, password:string} = {email, password};
      const jwt = await new jose.SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).sign(key);
      localStorage.setItem('token', jwt);
      setLogin({isLogin:true, token:jwt});
      toast('Login successful')
      navigate('/');
    }
    catch(err){
      console.error(`not able to sign in:${err}`)
      toast.error('Not able to sign in')
    }
  }

  return (
    <form onSubmit={(e)=>onSubmitHandler(e)} className="flex flex-col items-center justify-center sm:gap-10 gap-3 border-t-[1px] pt-[2rem] mb-[10rem] w-full">
      <div className={`text-[2.5rem] prata-regular ${darkMode && 'text-white'}`}>Login</div>
      <div className="flex flex-col items-center justify-between gap-4 w-full sm:w-[25rem] relative">
        <input required type="email" placeholder="Email" name="email" className={`w-full border p-2 ${darkMode && 'border-white bg-black text-white'}`}/>
        <input required type="password" placeholder="Password" name="password" className={`w-full border p-2 ${darkMode && 'border-white bg-black text-white'}`}/>
      </div>
      <div className="mt-4 sm:mt-0">
        <button type="submit" className={`p-3 px-12 mt-[1rem] ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>Sign In</button>
      </div>
    </form>
  )
}

export default Login