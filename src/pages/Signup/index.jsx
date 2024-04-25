import React,{useState,useContext} from "react";
import { Heading, Button, Img, CheckBox, Input } from "../../components";
import { errorToast } from "../../components/Toaster";
import { Helmet } from "react-helmet";
import { FacebookOutlined,XOutlined} from '@ant-design/icons';
import  validator from 'validator'
import BgImg from "../../assets/images/bgLogin.png";
import { AuthContext } from '../../context/AuthContext';
import LoadingPage from "../../components/Loader";
export default function CreateAccount({ isOpen, ...props }) {
    const { isLoading, Signup } = useContext(AuthContext);
    const [loadPage, setPage] = useState(false);
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const submitPage1=()=>{
        if (first_name == "") {
            errorToast('First Name Field is empty')
          }
          else if (last_name == "") {
            errorToast('Last Name Field is empty')
          }
          else if (email == "") {
            errorToast('Email Field is empty')
          }
          else if (phone_number == "") {
            errorToast('Phone Number Field is Empty')
          }
          else if(!validator.isEmail(email)){
            errorToast('Please enter a valide Email Address');
          }else{
            setPage(true)
          }
       
    }

    const SubmitForm = ()=>{
        if (password == "") {
            errorToast('Password Field is empty')
          }
          else if (confirm == "") {
            errorToast('Confirm Password Field is empty')
          }
          else if (confirm != password) {
            errorToast('Password and Confirm Password Did not Match')
          }else{

            const data ={first_name,last_name,email,phone_number,password}
            Signup(data)
          }
    }
const Page1 = ()=>{
    return(
        <>

   <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
       <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
       <div className="flex-1 bg-indigo-100 text-center  lg:flex " style={{background: `url(${BgImg})`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: '100vh',
     width: '100%', }}>
           {/* hidden style={{background: `url(${BgImg})`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: '100vh',
     width: '100%', }}*/}
               <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                   style={{background: `url(${BgImg})`}}>
               </div>
           </div>
           <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            
               <div class="mt-3 flex flex-col items-center">
                   <h1 className="text-2xl xl:text-3xl font-extrabold">
                   Sign up
                   </h1>
                   <div class="w-full flex-1 mt-1">
                  
                       <div className="mx-auto max-w-xs">
                           {/* <input
                               className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                               type="email" placeholder="Email" /> */}
                                 <label className="py-3 flex ">First Name</label>
                                 <Input
                       shape="round"
                       type="text"
                       name="email"
                       value={first_name}
                       onChange={text => setFirstname(text)}
                       placeholder="First Name"
                       prefix={<Img src="images/img_icon_24px_user.svg" alt="icon / 24px / user" />}
                       className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                     />
                           <label className="py-3 flex ">Last Name</label>
                                 <Input
                       shape="round"
                       type="text"
                       name="email"
                       value={last_name}
                       onChange={text => setLastname(text)}
                       placeholder="Last Name"
                       prefix={<Img src="images/img_icon_24px_user.svg" alt="icon / 24px / user" />}
                       className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                     />
                           <label className="py-3 flex "> Email Address</label>
                                 <Input
                       shape="round"
                       type="email"
                       name="email"
                       value={email}
                       onChange={text => setEmail(text)}
                       placeholder="user / email address"
                       prefix={<Img src="images/img_icon_20px_email.svg" alt="icon / 24px / user" />}
                       className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                     />
                           <label className="py-3 flex "> Phone</label>
                                 <Input
                       shape="round"
                       type="tel"
                       name="email"
                       value={phone_number}
                       onChange={text => setPhone(text)}
                       placeholder="Phone"
                       prefix={<Img src="images/img_icon_24px_user.svg" alt="icon / 24px / user" />}
                       className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                     />
                           
                     
                           <button onClick={submitPage1}
                               className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                               {/* <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                   stroke-linecap="round" stroke-linejoin="round">
                                   <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                   <circle cx="8.5" cy="7" r="4" />
                                   <path d="M20 8v6M23 11h-6" />
                               </svg> */}
                               <span className="ml-3">
                                   Continue
                               </span>
                           </button>
   
                       </div>
                      
                       <div className="flex flex-col items-center my-3">
                         
                           <button
                               className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                               <div className="bg-white p-2 rounded-full">
                                   <svg className="w-4" viewBox="0 0 533.5 544.3">
                                       <path
                                           d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                           fill="#4285f4" />
                                       <path
                                           d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                           fill="#34a853" />
                                       <path
                                           d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                           fill="#fbbc04" />
                                       <path
                                           d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                           fill="#ea4335" />
                                   </svg>
                               </div>
                               <span class="ml-4">
                                   Sign Up with Google
                               </span>
                           </button>
   
                          
                       </div>
                   </div>
               </div>
           </div>
         
       </div>
   </div>
        </>
    )
}

const Page2 =()=>{
    return(
        <>

   <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
       <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
       <div className="flex-1 bg-indigo-100 text-center  lg:flex " style={{background: `url(${BgImg})`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: '100vh',
     width: '100%', }}>
           {/* hidden style={{background: `url(${BgImg})`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: '100vh',
     width: '100%', }}*/}
               <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                   style={{background: `url(${BgImg})`}}>
               </div>
           </div>
           <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            
               <div class="mt-3 flex flex-col items-center">
                   <h1 className="text-2xl xl:text-3xl font-extrabold">
                   Sign up
                   </h1>
                   <div class="w-full flex-1 mt-1">
                  
                       <div className="mx-auto max-w-xs">
                           {/* <input
                               className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                               type="email" placeholder="Email" /> */}
                                 <label className="py-3 flex ">Password </label>
                                 <Input
                       shape="round"
                       type="password"
                       name="email"
                       value={password}
                       onChange={text => setPassword(text)}
                  
                       prefix={<Img src="images/img_icon_20px_lock.svg" alt="icon / 24px / user" />}
                       className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                     />
                   
                           <label className="py-3 flex ">Confirm Password</label>
                                 <Input
                       shape="round"
                       type="password"
                       name="email"
                      
                       value={confirm}
                       onChange={text => setConfirm(text)}
                       prefix={<Img src="images/img_icon_20px_lock.svg" alt="icon / 24px / user" />}
                       className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                     />
                           
                           {isLoading ? (
                                        <>
                                            <div className="my-5">
                                                <LoadingPage />
                                            </div>
                                        </>
                                    ) : (
                                        <button onClick={SubmitForm}
                               className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                               {/* <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                   stroke-linecap="round" stroke-linejoin="round">
                                   <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                   <circle cx="8.5" cy="7" r="4" />
                                   <path d="M20 8v6M23 11h-6" />
                               </svg> */}
                               <span className="ml-3">
                                   Submit
                               </span>
                           </button>
                                    )}
                          
   
                       </div>
                      
                       <div className="flex flex-col items-center my-3">
                         
                           <button
                               className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                               <div className="bg-white p-2 rounded-full">
                                   <svg className="w-4" viewBox="0 0 533.5 544.3">
                                       <path
                                           d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                           fill="#4285f4" />
                                       <path
                                           d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                           fill="#34a853" />
                                       <path
                                           d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                           fill="#fbbc04" />
                                       <path
                                           d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                           fill="#ea4335" />
                                   </svg>
                               </div>
                               <span class="ml-4">
                                   Sign Up with Google
                               </span>
                           </button>
   
                          
                       </div>
                   </div>
               </div>
           </div>
         
       </div>
   </div>
        </>
    )
}

  return (
    <>
 {loadPage ? (
                                        <>
                                          <Page2/>
                                        </>
                                    ) : (
                                        <>
                                        <Page1/>
                                      </>
                                    )}

       </>
  );
}
