import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "../../LoadingScreen";

const LogIn = React.forwardRef(({ animate, onAnimationEnd, onClose, signUp }, ref) => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false); // <-- ADD

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ok = await login(username, password);

        if (ok) {
            setLoading(true); // <-- SHOW LOADER

            setTimeout(() => { // <-- 3 SECOND DELAY
                if (ok.user.role === "admin") navigate("/admin/dashboard");
                else navigate("/customer/dashboard");
            }, 3000);

        } else {
            alert("Invalid login");
        }
    };

    return (
        <>
            {loading && <LoadingScreen />} {/* <-- SHOW LOADER FULL SCREEN */}

            <div ref={ref} onAnimationEnd={onAnimationEnd} className={`${animate} px-5 relative w-100 h-120 overflow-hidden rounded-2xl bg-[#F6F3ED]`}>
                <div onClick={onClose} className="flex justify-center -right-2 -top-2 absolute items-center w-12 h-12 cursor-pointer transition duration-300 rounded-lg bg-[#8FA584]">
                    <i className="fa-solid fa-x"></i>
                </div>

                <h1 className="playfair text-xl mt-5">Logo</h1>

                <div className="flex justify-center px-10 pb-5 mt-10 bg-white rounded-2xl flex-col">
                    <div className="flex -mt-8 justify-center">
                        <i className="fa-solid fa-circle-user text-[#84967d] text-7xl"></i>
                    </div>
                    <h1 className="playfair text-2xl text-center mt-3">Log In</h1>

                    <form onSubmit={handleSubmit} className="poppins-regular mt-5 text-sm flex flex-col gap-5">
                        <div>
                            <label className="text-md poppins-semibold">Username</label><br />
                            <input onChange={(e) => setUsername(e.target.value)} className="w-full mt-2 shadow-[2px_2px_2px_gray] px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" placeholder="Username" type="text" />
                        </div>

                        <div>
                            <label className="text-md poppins-semibold">Password</label><br />
                            <input onChange={(e) => setPassword(e.target.value)} className="w-full shadow-[2px_2px_2px_gray] mt-2 px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" placeholder="Password" type="password" />
                        </div>

                        <div>
                            <button type="submit" className="w-full poppins-semibold text-sm cursor-pointer bg-[#8FA584] h-10 rounded-xl shadow-[2px_2px_2px_gray]">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="text-sm poppins-regular ml-3 mt-3">
                        Don't have an account?
                        <span onClick={() => { signUp(); onClose(); }} className="poppins-regular cursor-pointer text-[#697d5f] underline">
                            {" "} Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
});

export default LogIn;
