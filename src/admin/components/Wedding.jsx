import React from "react";
import Wedding from "../../assets/weddingVideo.mp4";
import { useState, useEffect } from "react";
import "../../style.css";
const Weddings = React.forwardRef(({animate, onAnimationEnd, onClose, login, id},ref) =>{

    const [type, setType] = useState("Basic");

    const clickedBasic = () =>{
        setType("Basic");
    }
     const clickedPremium = () =>{
        setType("Premium");
    }
     const clickedLuxe = () =>{
        setType("Luxe");
    }
    const [eventId, setEventId] = useState(null);
    const [data, setData] = useState([]);
    
    const fetchData = async () =>{
        try{
            const res = await fetch("http://localhost/backend/api/get_packages.php",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify({
                   eventId
                })
            });

            const json = await res.json();
            setData(json);
            console.log(data)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() =>{
        fetchData();
    },[])

    return(
        <div ref={ref} onAnimationEnd={onAnimationEnd} className={`lg:w-220 w-100 px-5 max-h-160 py-3 overflow-y-scroll hide-scrollbar relative ${animate} rounded-2xl bg-[#F6F3ED]`}>
            <div onClick={onClose}  className="flex justify-center -right-2 -top-2 absolute items-center w-12 h-12 cursor-pointer  transition duration-300   rounded-lg bg-[#8FA584]"><i className="fa-solid fa-x"></i></div>
            <div className=" flex justify-start gap-2 px-10">
                <h1 className="poppins-regular text-xl mt-2">RKIA Catering</h1>
                <input   className="bg-red-300" type="text" />
            </div>
            <div  className="w-full flex  lg:flex-row flex-col">
                
                <div className="w-full gap-2 min-h-60 py-3 px-3 cursor-pointer flex flex-col justify-center items-center ">
                    <video className="w-90 rounded-2xl lg:mt-10 shadow-[2px_2px_2px_gray]" playsInline autoPlay muted loop disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback" >
                        <source src={Wedding} />
                    </video>
                    <h1 className="playfair  text-xl">{data.event_name} Package</h1>
                    <button onClick={login} className="bg-[#8FA584] w-full h-10 poppins-semibold cursor-pointer shadow-[2px_2px_2px_black] text-md rounded-2xl">Add Package {id}</button>

                </div>
                <div className="w-full min-h-60 py-3 poppins-regular text-sm lg:p-5">
                     {type === "Basic" && (
                    <>
                    <h2 className="text-lg poppins-semibold">Basic Inclusions</h2>
                    <div  className="package min-h-68 mt-2 border-b-4 bg-white border border-r-2 border-[#e0e0e0] shadow-[2px_2px_2px_gray] p-5  flex flex-col gap-2">
                        <p className="flex items-center gap-2 "><i className="fa-solid fa-check  text-[#6E856A]"></i>Ceremony Backdrop.</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Fully Styled Aisle (premium florals, candles, lanterns)</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Grand Couple’s Table Stage Setup</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Bride & Groom Chairs with Premium Styling</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Reception Entrance Grand Installations</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Themed Welcome Sign + Floral Accent</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Ceiling Treatment (fairy lights, drapes, or hanging florals)</p>
                    </div>
                    </>
                    )}
                     {type === "Premium" && (
                    <>
                    <h2 className="text-lg poppins-semibold">Premium Inclusions</h2>
                    <div  className="package mt-2 border-b-4 bg-white border min-h-68 border-r-2 border-[#e0e0e0] shadow-[2px_2px_2px_gray] p-5  flex flex-col gap-2">
                        <p className="flex items-center gap-2 "><i className="fa-solid fa-check  text-[#6E856A]"></i>Ceremony Backdrop.</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Fully Styled Aisle (premium florals, candles, lanterns)</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Grand Couple’s Table Stage Setup</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Bride & Groom Chairs with Premium Styling</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Reception Entrance Grand Installations</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Themed Welcome Sign + Floral Accent</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Ceiling Treatment (fairy lights, drapes, or hanging florals)</p>
                    </div>
                    </>
                    )}
                    {type === "Luxe" && (
                    <>
                    <h2 className="text-lg poppins-semibold">Luxe Inclusions</h2>
                    <div  className="package mt-2 border-b-4 border min-h-68 border-r-2 border-[#e0e0e0] shadow-[2px_2px_2px_gray] p-5 bg-white flex flex-col gap-2">
                        <p className="flex items-center gap-2 "><i className="fa-solid fa-check  text-[#6E856A]"></i>Ceremony Backdrop.</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Fully Styled Aisle (premium florals, candles, lanterns)</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Grand Couple’s Table Stage Setup</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Bride & Groom Chairs with Premium Styling</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Reception Entrance Grand Installations</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Themed Welcome Sign + Floral Accent</p>
                        <p className="flex items-center gap-2"><i className="fa-solid fa-check  text-[#6E856A]"></i>Ceiling Treatment (fairy lights, drapes, or hanging florals)</p>
                    </div>
                    </>
                    )}
                </div>
            </div>
            <h1 className="playfair text-xl mt-5 text-center">Types of Package</h1>
            <div className="w-full overflow-x-scroll hide-scrollbar">
                <p className="flex  items-center gap-2 roboto mt-3 text-sm lg:hidden"><i className="fa-solid fa-arrow-left"></i>Swipe to left to see more</p>
                <div className="lg:w-full py-2  flex gap-3 lg:mt-3 w-220 px-5">
                    <div onClick={clickedBasic}  className="w-full bg-[url(assets\luxe.svg)] relative bg-cover  border-b-4 border-r-2  cursor-pointer hover:scale-104 transition duration-300 h-40 flex justify-center items-center rounded-2xl shadow-[2px_2px_2px_gray]  border-[#e0e0e0] border ">
                        <h1 className="poppins-medium rounded-md bg-[#ffffff86] p-3 z-10 text-lg">Simple Decor Package</h1>
                    </div>
                     <div onClick={clickedPremium} className="w-full border-b-4 bg-[url(assets\basic.svg)] bg-cover border-r-2 h-40 cursor-pointer hover:scale-104 transition duration-300 flex justify-center items-center rounded-2xl shadow-[2px_2px_2px_gray] bg-white border-[#e0e0e0] border ">
                        <h1 className="poppins-medium rounded-md bg-[#ffffff86] p-3 z-10 text-lg">Premium Decor Package</h1>

                    </div>
                     <div onClick={clickedLuxe} className="w-full border-b-4 bg-[url(assets\premium.svg)] bg-cover border-r-2 h-40 cursor-pointer hover:scale-104 transition duration-300 flex justify-center items-center rounded-2xl shadow-[2px_2px_2px_gray] bg-white border-[#e0e0e0] border ">
                        <h1 className="poppins-medium rounded-md bg-[#ffffff86] p-3 z-10 text-lg">Luxe Decor Package</h1>
                    </div>
                </div>
            </div>

        </div>
    );
})
export default Weddings;