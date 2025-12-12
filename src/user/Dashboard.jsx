import Sidebar from "./components/Sidebar";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import RequestBooking from "./components/RequestBoooking";
import Packages from "./components/Packages";
import { useRef , useContext, useState, useEffect} from "react";
import { AuthContext } from "../AuthContext";

function Dashboard(){
    const book = useAnimatedToggle();
    const bookRef = useRef();
    const showWedding = useAnimatedToggle();
    const weddingRef = useRef(null);
    const [selectedId, setSelectedId] = useState(null);
    
    const { user } = useContext(AuthContext);

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

    return(
        <>
        {book.isVisible &&(
            <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
                <RequestBooking ref={bookRef} onAnimationEnd={book.handleEnd} animate={book.animation} onClose={()=> book.setAnimation("fade-out")}/>
            </div>
        )}
        {showWedding.isVisible && (
        <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
          <Packages
            id={selectedId}
            ref={weddingRef}
            onAnimationEnd={showWedding.handleEnd}
            onClose={() => showWedding.setAnimation("fade-out")}
            animate={showWedding.animation}/>
        </div>
      )}
        <Sidebar/>
        <div className=" min-h-screen pb-5 w-full">
            <div className="lg:ml-60 flex justify-between  items-center pt-10 px-10">
                <h1 className="poppins-semibold text-2xl">Welcome {user.full_name}</h1>
            </div>
            <div className="lg:ml-60 grid grid-cols-3 px-8 gap-5">
                {data.map((e,id) =>(
                <div key={id} className="w-full bg-white rounded-2xl  py-2  border border-gray-500 shadow-[2px_2px_2px_gray]  flex flex-col  justify-between p-2 mt-5 ">
                <div className="w-full flex justify-center mt-3">
                  <img  src={`http://localhost/backend/uploads/events/${e.image}`}  className="flex justify-center h-80  items-center rounded-2xl" alt="" />
                </div>

                <h1 className="playfair text-xl text-center mt-3">{e.event_name}</h1>
                <p className="text-center poppins-normal text-sm mb-3">“{e.event_description}”</p>
                
                <div className="flex justify-between w-full px-3">
                  <div className="w-full ">
                    <button onClick = {() =>{showWedding.toggle(); setSelectedId(e.event_id)}} className=" w-full cursor-pointer hover:scale-105 transition duration-300 flex-end font-bold gap-5 h-10 border bg-[#A9B79A] rounded-2xl ">Show</button>
                  </div>
                  
                </div>
              </div>
            ))}
            </div>
        </div>


        </>
    );
}
export default Dashboard;