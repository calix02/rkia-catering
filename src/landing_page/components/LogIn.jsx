import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
const LogIn = React.forwardRef(({animate, onAnimationEnd, onClose, signUp},ref) =>{
    const [username , setUsername] = useState("user"); 
   

    return(
        <div ref={ref} onAnimationEnd={onAnimationEnd} className={`${animate} px-5 relative w-100 h-120 overflow-hidden rounded-2xl bg-[#F6F3ED]`}>
            <div onClick={onClose}  className="flex justify-center -right-2 -top-2 absolute items-center w-12 h-12 cursor-pointer  transition duration-300   rounded-lg bg-[#8FA584]"><i className="fa-solid fa-x"></i></div>
            <h1 className="playfair text-xl mt-5">Logo</h1>
            <div className="flex justify-center px-10 pb-5 mt-10 bg-white rounded-2xl flex-col">
                <div className=" flex  -mt-8 justify-center">
                    <i className="fa-solid fa-circle-user text-[#84967d] text-7xl"></i>
                </div>
                <h1 className="playfair text-2xl text-center mt-3">Log In</h1>
                <form action="" className="poppins-regular mt-5 text-sm flex flex-col gap-5">
                    <div>
                        <label className="text-md poppins-semibold" htmlFor="">Username</label><br />
                        <input className="w-full mt-2 shadow-[2px_2px_2px_gray]  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]"  placeholder="Username" type="text" />
                    </div>
                    <div className="">
                        <label className="text-md poppins-semibold" htmlFor="">Password</label><br />
                        <input className="w-full shadow-[2px_2px_2px_gray] mt-2 px-3 text-sm border h-10 rounded-xl border-[#e0e0e0] " placeholder="Password" type="password" />
                    </div>
                    <div className="">
                        <Link to="/user/dashboard">
                            <button  className="w-full poppins-semibold text-sm cursor-pointer bg-[#8FA584] h-10 rounded-xl shadow-[2px_2px_2px_gray]">Login</button>

                        </Link>
                    </div>
                </form>
                <p className="text-sm poppins-regular ml-3 mt-3">Don't have an account?<span onClick={()=>{ signUp(); onClose();}}  className="poppins-regular cursor-pointer text-[#697d5f] underline  "> Sign Up</span></p>
            </div>


        </div>
    );
})
 export default LogIn;