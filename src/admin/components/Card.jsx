function Card({title, total}){
    return(
        <div className="w-full cursor-pointer hover:scale-105 duration-300 hover:shadow-[2px_2px_2px_black] rounded-2xl transition bg-red px-5 py-2 h-30 border">
      
        <h1 className="poppins-semibold text-xl flex items-center gap-2">
                  {title === "Total Bookings" && (
            <span class="material-symbols-outlined">book</span>

        )}
         {title === "Total Request" && (
            <span class="material-symbols-outlined">ballot</span>

        )}
        {title === "Total Accounts" && (
            <span class="material-symbols-outlined">account_circle</span>

        )}
        {title === "Upcoming Bookings" && (
            <span class="material-symbols-outlined">checkbook</span>

        )}
                {title}
                
        </h1>
        
        <p className="text-2xl mt-5 text-center poppins-bold">{total}</p>

        </div>
    );
}
export default Card;