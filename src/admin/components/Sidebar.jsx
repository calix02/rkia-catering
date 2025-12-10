import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className="w-60 lg:block hidden  h-screen overflow-clip rounded-2xl bg-[#F2EDE5] shadow-[2px_2px_2px_gray] border-r-2 border-[#e0e0e0] fixed left-0">
            <h1 className="playfair text-2xl text-center mt-10">Logo <span className="text-lg poppins-regular" >RKIA Catering</span></h1>
            <nav className="text-md poppins-medium w-full flex flex-col gap-3 px-3 mt-10">
                <Link to="/admin/dashboard" className=" px-5 flex gap-2 items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
                    <span class="material-symbols-outlined">bar_chart</span> <p>Dashboard</p>
                </Link>
                 <Link to="/admin/bookings" className=" px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
                     <span class="material-symbols-outlined">edit_calendar</span><p>Bookings</p>
                </Link>
                <Link to="/admin/book-request" className=" px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
                     <span class="material-symbols-outlined">edit_calendar</span><p>Book Request</p>
                </Link>
                <Link to="/admin/events" className=" px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
                    <span class="material-symbols-outlined">celebration</span> <p>Events</p>
                </Link>
                 <Link to="/admin/booking-history" className=" px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
                    <span class="material-symbols-outlined">edit_calendar</span> <p>Booking History</p>
                </Link>
                <Link to="/admin/payments" className=" px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
                    <span class="material-symbols-outlined">payments</span> <p>Payment</p>
                </Link>
                 <Link to="/admin/accounts" className=" px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
                    <span class="material-symbols-outlined">person</span> <p>Accounts</p>
                </Link>
                
                <button to="/admin/accounts" className=" px-5 gap-2 flex items-center cursor-pointer h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
                    <span class="material-symbols-outlined">logout</span> <p>Log Out</p>
                </button>
            </nav>

        </div>
    );
}
export default Sidebar;