import { Link } from "react-router-dom";
function Card({title, total, link}){
    return(
       
        <Link to={link} className="w-full cursor-pointer hover:scale-105 duration-300 hover:shadow-[2px_2px_2px_black] shadow-[2px_2px_2px_gray] rounded-2xl transition bg-red px-5 py-2 h-30 border">
      
        <h1 className="poppins-semibold text-xl flex items-center gap-2">
                  {title === "Total Bookings" && (
            <span className="material-symbols-outlined">book</span>

        )}
         {title === "Total Request" && (
            <span className="material-symbols-outlined">ballot</span>

        )}
        {title === "Total Accounts" && (
            <span className="material-symbols-outlined">account_circle</span>

        )}
        {title === "Total Revenue" && (
            <span className="material-symbols-outlined">payments</span>

        )}
                {title}
                
        </h1>
        
        <p className="text-2xl mt-5 text-center poppins-bold">{total}</p>

        </Link>
       
    );
}
export default Card;