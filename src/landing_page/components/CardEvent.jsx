
function CardEvent({picture,event,tagline}){
    return(
        <div className="w-full h-full relative p-5 rounded-2xl bg-[#f8f8f8] border flex flex-col items-center ">
            <img src={picture} className="h-50 rounded-2xl" alt="" />
            <h1 className="playfair text-xl">{event}</h1>
            <p className="text-center poppins-normal text-sm">{tagline}</p>
            <button className="poppins-bold cursor-pointer hover:scale-103 transition duration-300 mt-5 w-full  h-10 rounded-2xl shadow-[2px_2px_2px_black] bg-[#A9B79A]">Check Packages</button>
        </div>
    );
}
export default CardEvent;