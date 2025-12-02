import { useState } from "react";
import React from "react";
const SignUp = React.forwardRef(({animate, onAnimationEnd, onClose, logIn},ref) =>{

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");


    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !phone || !username || !password) {
            alert("Please fill in all required fields");
            return; 
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters");
            return; 
        }
        if (!/^09\d{9}$/.test(phone)) {
            alert("Phone number must start with 09 and be 11 digits long");
            return;
        }

        try{
            const res = await fetch("http://localhost/backend/api/register.php", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify({
                    name,
                    phone,
                    username,
                    password,
                    role 
                })
            });
       
            const data = await res.json();
            if (data.message) {
                alert(data.message);
                setName("");
                setPhone(""); 
                setUserName("");
                setPassword("");
                onClose();
                logIn();
            } else {
                alert(data.error); 
            }
        }catch(err){
            console.error(err);
            alert("Something went wrong. Check console.");
        }
    };

    return(
        <div ref={ref} onAnimationEnd={onAnimationEnd} className={`${animate} px-5 relative w-100 min-h-120 pb-5 overflow-hidden rounded-2xl bg-[#F6F3ED]`}>
            <div onClick={onClose}  className="flex justify-center -right-2 -top-2 absolute items-center w-12 h-12 cursor-pointer  transition duration-300   rounded-lg bg-[#8FA584]"><i className="fa-solid fa-x"></i></div>
            <h1 className="playfair text-xl mt-5">Logo</h1>
            <div className="flex justify-center px-10 pb-5 mt-10 bg-white rounded-2xl flex-col">
                <div className=" flex  -mt-8 justify-center">
                    <i className="fa-solid fa-circle-user text-[#84967d] text-7xl"></i>
                </div>
                <h1 className="playfair text-2xl text-center mt-3">Sign Up</h1>
                <form onSubmit={handleRegister} className="poppins-regular mt-5 text-sm flex flex-col gap-5">
                    <div>
                        <label className="text-md poppins-semibold" htmlFor="">Name</label><br />
                        <input className="w-full mt-2 shadow-[2px_2px_2px_gray]  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" type="text" />
                    </div>
                      <div>
                        <label className="text-md poppins-semibold" htmlFor="">Phone</label><br />
                        <input className="w-full mt-2 shadow-[2px_2px_2px_gray]  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Phone" type="text" />
                    </div>
                    <div>
                        <label className="text-md poppins-semibold" htmlFor="">Username</label><br />
                        <input className="w-full mt-2 shadow-[2px_2px_2px_gray]  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" type="text" />
                    </div>
                    <div className="">
                        <label className="text-md poppins-semibold" htmlFor="">Password</label><br />
                        <input className="w-full shadow-[2px_2px_2px_gray] mt-2 px-3 text-sm border h-10 rounded-xl border-[#e0e0e0] " value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password" />
                    </div>
                    <div className="">
                        <button  type="submit"  className="w-full poppins-semibold text-sm cursor-pointer bg-[#8FA584] h-10 rounded-xl shadow-[2px_2px_2px_gray]">Sign Up</button>
                    </div>
                </form>
                <p className="text-sm poppins-regular ml-3 mt-3">Already have an account?<span onClick={()=>{onClose(); logIn();}}  className="poppins-regular cursor-pointer text-[#697d5f] underline  "> LogIn</span></p>
            </div>
        </div>
    );
})
 export default SignUp;