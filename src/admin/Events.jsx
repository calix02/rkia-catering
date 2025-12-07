import Sidebar from "./components/Sidebar";
import weddingVideo from "../assets/weddingVideo.mp4";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import WeddingPackage from "./components/Wedding";
import { useRef, useState } from "react";
import BirthdayPackage from "./components/BirthdayPackage";
import Baptismal from "./components/Baptismal";
import Family from "./components/Family";
import CardEv from "./components/CardEv";
import Wedding from ".././assets/wedding.png";
import Birthday from ".././assets/birthday2.png";
import BaptismalPic from ".././assets/baptismal1.png";
import FamilyPic from ".././assets/family.jpg";
import SchoolPic from ".././assets/school.jpg";
function Events(){
  

  /** 

   const events = {
          event1 : [{
              picture: Wedding,
              eventName : "Wedding Event",
              tagline: "“Crafting timeless wedding designs that speak the language of love.”",
  
          }],
           event2 : [{
              picture: Birthday,
              eventName : "Birthday Event",
              tagline: "“From simple to stunning—we design birthdays you’ll never forget.”",
  
          }],
           event3 : [{
              picture: BaptismalPic,
              eventName : "Baptismal",
              tagline: "“Honoring your child’s special moment with thoughtful decorations.”",
  
          }],
           event4 : [{
              picture: FamilyPic,
              eventName : "Family Gathering",
              tagline: "“Beautiful setups that make every family moment feel extra special.”",
  
          }],
           event5 : [{
              picture: Family,
              eventName : "School Event",
              tagline: "“Beautiful setups that make every family moment feel extra special.”",
  
          }],
      }
          */

  
    const showWedding = useAnimatedToggle();
    const showBirthday = useAnimatedToggle();
    const showBaptism = useAnimatedToggle();;
    const showFamily = useAnimatedToggle();
    const weddingRef = useRef(null);
    const birthdayRef = useRef(null);
    const baptismRef = useRef(null);
    const familyRef = useRef(null);

    return(
         <>
      {showWedding.isVisible && (
        <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
          <WeddingPackage
            ref={weddingRef}
            onAnimationEnd={showWedding.handleEnd}
            onClose={() => showWedding.setAnimation("fade-out")}
            animate={showWedding.animation}

             />
        </div>
      )}

       {showBirthday.isVisible && (
        <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
          <BirthdayPackage
            ref={birthdayRef}
            onAnimationEnd={showBirthday.handleEnd}
            onClose={() => showBirthday.setAnimation("fade-out")}
            animate={showBirthday.animation} 
          />
        </div>
      )}

         {showBaptism.isVisible && (
        <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
          <Baptismal
            ref={baptismRef}
            onAnimationEnd={showBaptism.handleEnd}
            onClose={() => showBaptism.setAnimation("fade-out")}
            animate={showBaptism.animation} 
          />
        </div>
      )}

       {showFamily.isVisible && (
        <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
          <Family
            ref={familyRef}
            onAnimationEnd={showFamily.handleEnd}
            onClose={() => showFamily.setAnimation("fade-out")}
            animate={showFamily.animation} 
          />
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

        <div className="ml-60 px-8">
          <h1 className="poppins-bold text-2xl">Events</h1>

          <div className="flex justify-end">
            <button
              onClick={showWedding.toggle} className="h-10 w-40 bg-white rounded-2xl shadow-[2px_2px_2px_black] poppins-semibold text-sm text-center">
              Add Event
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-7 ">
            <div className="w-full bg-white rounded-2xl  py-2  border border-gray-500 shadow-[2px_2px_2px_gray]  flex flex-col  justify-between p-2 mt-5 ">
              <div className="w-full flex justify-center mt-3">
                <img src={Wedding} className="flex justify-center h-80  items-center rounded-2xl" alt="" />
              </div>

            <h1 className="playfair text-xl text-center mt-3">Wedding Event</h1>
            <p className="text-center poppins-normal text-sm mb-3">“Crafting timeless wedding designs that speak the language of love.”</p>
              
              <div className="flex justify-between w-full">
                  <div className="w-full justify-start">
                    <button onClick = {showWedding.toggle} className=" w-60 flex-end  gap-5 h-10 border bg-[#A9B79A] rounded-2xl ml-2">Show</button>
                  </div>
                   <div className="w-full  flex justify-end">
                     <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i></button>
                      <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-trash text-red-500 fa-lg"></i></button>
                    </div>
              </div>
            

             
            </div>
         

         <div className="w-full bg-white rounded-2xl bg-white-200 py-2 border border border-gray-500 shadow-[2px_2px_2px_gray]  flex flex-col  justify-between p-2 mt-5">
           <div className="w-full flex justify-center mt-3">
                <img src={Birthday} className="flex justify-center  h-80   items-center rounded-2xl" alt="" />
              </div>
             <h1 className="playfair text-xl text-center mt-3">Birthday Event</h1>
            <p className="text-center poppins-normal text-sm mb-3">“From simple to stunning—we design birthdays you’ll never forget.”</p>
              <div className="flex justify-between w-full">
                  <div className="w-full justify-start">
                    <button onClick = {showBirthday.toggle} className="w-60 flex-end  gap-5 h-10 border bg-[#A9B79A] rounded-2xl ml-2">Show</button>
                  </div>
                   <div className="w-full  flex justify-end">
                      <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i></button>
                      <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-trash text-red-500 fa-lg"></i></button>
                    </div>
              </div>
          </div>

          <div className="w-full bg-white rounded-2xl bg-white-200 py-2 border border border-gray-500 shadow-[2px_2px_2px_gray]  flex flex-col  justify-between p-2 mt-5">
           <div className="w-full flex justify-center mt-3">
                <img src={BaptismalPic} className="flex justify-center items-center rounded-2xl  h-80  " alt="" />
              </div>
             <h1 className="playfair text-xl text-center mt-3">Baptismal Event</h1>
            <p className="text-center poppins-normal text-sm mb-3">“Honoring your child’s special moment with thoughtful decorations.”</p>
              <div className="flex justify-between w-full">
                  <div className="w-full justify-start ">
                    <button onClick = {showBaptism.toggle} className=" w-60 flex-end  gap-5 h-10 border bg-[#A9B79A] rounded-2xl ml-2">Show</button>
                  </div>
                   <div className="w-full  flex justify-end">
                      <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i></button>
                      <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-trash text-red-500 fa-lg"></i></button>
                    </div>
              </div>
             
          </div>

         <div className="w-full bg-white rounded-2xl bg-white-200 py-2 border border border-gray-500 shadow-[2px_2px_2px_gray]  flex flex-col  justify-between p-2 mt-5">
           <div className="w-full flex justify-center mt-3">
                <img src={FamilyPic} className="flex justify-center h-80 items-center rounded-2xl" alt="" />
              </div>
             <h1 className="playfair text-xl text-center  mt-3">Family Event</h1>
            <p className="text-center poppins-normal text-sm mb-3">“Beautiful setups that make every family moment feel extra special.”</p>
              <div className="flex justify-between w-full">
                  <div className="w-full justify-start ">
                    <button onClick = {showFamily.toggle} className=" w-60 flex-end  gap-5 h-10 border bg-[#A9B79A] rounded-2xl ml-2">Show</button>
                  </div>
                   <div className="w-full  flex justify-end">
                      <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i></button>
                      <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-trash text-red-500 fa-lg"></i></button>
                    </div>
              </div>
             
          </div>

           <div className="w-full bg-white rounded-2xl bg-white-200 py-2 border border border-gray-500 shadow-[2px_2px_2px_gray]   flex flex-col  justify-between p-2 mt-5">
           <div className="w-full flex justify-center mt-3">
                <img src={SchoolPic} className="flex justify-center h-80 items-center rounded-2xl" alt="" />
              </div>
             <h1 className="playfair text-xl text-center  mt-3">School Event</h1>
            <p className="text-center poppins-normal text-sm mb-3">“Beautiful setups that make every family moment feel extra special.”</p>
              <div className="flex justify-between w-full">
                  <div className="w-full justify-start ">
                    <button onClick = {showFamily.toggle} className=" w-60 flex-end  gap-5 h-10 border bg-[#A9B79A] rounded-2xl ml-2">Show</button>
                  </div>
                   <div className="w-full  flex justify-end">
                      <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i></button>
                      <button onClick = {showFamily.toggle} className="w-10  "><i className="fa-solid fa-trash text-red-500 fa-lg"></i></button>
                    </div>
              </div>
             
          </div>

          

           </div>
        </div>
      </div>
    </>
  );
}

export default Events;