import Sidebar from "./components/Sidebar";
import weddingVideo from "../assets/weddingVideo.mp4";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import WeddingPackage from "./components/Wedding";
import { useRef, useState, useEffect } from "react";
import BirthdayPackage from "./components/BirthdayPackage";
import Baptismal from "./components/Baptismal";
import Family from "./components/Family";
import CardEv from "./components/CardEv";
import Wedding from ".././assets/wedding.png";
import Birthday from ".././assets/birthday2.png";
import BaptismalPic from ".././assets/baptismal1.png";
import FamilyPic from ".././assets/family.jpg";
import SchoolPic from ".././assets/school.jpg";
import AddEventCard from "./components/AddEventCard";
function Events(){
  
    const showWedding = useAnimatedToggle();
    const showBirthday = useAnimatedToggle();
    const showBaptism = useAnimatedToggle();;
    const showFamily = useAnimatedToggle();
    const addEvent = useAnimatedToggle();
    const addEventRef = useRef(null);
    const weddingRef = useRef(null);
    const birthdayRef = useRef(null);
    const baptismRef = useRef(null);
    const familyRef = useRef(null);

    const [data, setData] = useState([]);

    const fetchData = async () =>{
        try{
            const res = await fetch("http://localhost/backend/api/get_events.php");
            const json = await res.json();
            setData(json);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() =>{
        fetchData();
    },[])

    const test = (ids) =>{
      alert(ids);
    }
    const [selectedId, setSelectedId] = useState(null);

    return(
      <>
      {addEvent.isVisible && (
        <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
          <AddEventCard
            ref={addEventRef}
            onAnimationEnd={addEvent.handleEnd}
            onClose={() => addEvent.setAnimation("fade-out")}
            animate={addEvent.animation}/>
        </div>
      )}
      {showWedding.isVisible && (
        <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
          <WeddingPackage
            id={selectedId}
            ref={weddingRef}
            onAnimationEnd={showWedding.handleEnd}
            onClose={() => showWedding.setAnimation("fade-out")}
            animate={showWedding.animation}/>
        </div>
      )}

      <Sidebar />
      <div className="bg-[#f6f3ed] w-full min-h-screen py-5">
        <div className="w-full flex px-10 justify-end">
          <div className="min-w-40 px-2 h-10 flex text-sm justify-center items-center gap-2">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="poppins-semibold">My Account</span>
          </div>
        </div>

        <div className="lg:ml-60 px-8">
          <h1 className="poppins-bold text-2xl">Events</h1>
      
          

          <div className=" grid grid-cols-3 gap-7 ">

            {data.map((e,id) =>(

                <div key={id} className="w-full bg-white rounded-2xl  py-2  border border-gray-500 shadow-[2px_2px_2px_gray]  flex flex-col  justify-between p-2 mt-5 ">
                <div className="w-full flex justify-center mt-3">
                  <img  src={`http://localhost/backend/uploads/events/${e.image}`}  className="flex justify-center h-80  items-center rounded-2xl" alt="" />
                </div>

                <h1 className="playfair text-xl text-center mt-3">{e.event_name}</h1>
                <p className="text-center poppins-normal text-sm mb-3">“{e.event_description}”</p>
                
                <div className="flex justify-between w-full">
                  <div className="w-full justify-start">
                    <button onClick = {() =>{showWedding.toggle(); setSelectedId(e.event_id)}} className=" w-60 flex-end  gap-5 h-10 border bg-[#A9B79A] rounded-2xl ml-2">Show</button>
                  </div>
                  <div className="w-full  flex justify-end">
                    <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i></button>
                    <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-trash text-red-500 fa-lg"></i></button>
                  </div>
                </div>
              </div>
            ))}
            

          </div>
        </div>
      </div>
    </>
  );
}

export default Events;