import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";
import LoadingScreen from "../../LoadingScreen";
import Logo from "../../assets/logo.png";
import Swal from "sweetalert2"; // <-- import SweetAlert2

function Sidebar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    const ok = await logout();

    if (ok) {
      // Show SweetAlert
      Swal.fire({
        icon: "success",
        title: "Logged out",
        text: "You have successfully logged out!",
        timer: 1500,
        showConfirmButton: false,
        willClose: () => {
          // After SweetAlert closes, show loader for 2 seconds
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/"); // redirect to landing page
          }, 2000);
        },
      });
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}

      <div className="w-60 lg:block hidden h-screen overflow-clip rounded-2xl bg-[#F2EDE5] shadow-[2px_2px_2px_gray] border-r-2 border-[#e0e0e0] fixed left-0">
        <h1 className="playfair text-2xl flex items-center justify-center gap-2  text-center mt-10">
          <span><img src={Logo} className="w-15" alt="" /></span> <span className="text-lg poppins-semibold">RKIA Catering</span>
        </h1>

        <nav className="text-md poppins-medium w-full flex flex-col gap-3 px-3 mt-10">
          <Link to="/admin/dashboard" className="px-5 flex gap-2 items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
            <span className="material-symbols-outlined">bar_chart</span> <p>Dashboard</p>
          </Link>
          <Link to="/admin/bookings" className="px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
            <span className="material-symbols-outlined">edit_calendar</span><p>Bookings</p>
          </Link>
          <Link to="/admin/book-request" className="px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
            <span className="material-symbols-outlined">edit_calendar</span><p>Book Request</p>
          </Link>
          <Link to="/admin/events" className="px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
            <span className="material-symbols-outlined">celebration</span> <p>Events</p>
          </Link>
          <Link to="/admin/booking-history" className="px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
            <span className="material-symbols-outlined">edit_calendar</span> <p>Booking History</p>
          </Link>
          <Link to="/admin/accounts" className="px-5 gap-2 flex items-center h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300">
            <span className="material-symbols-outlined">person</span> <p>Accounts</p>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-5 gap-2 flex items-center cursor-pointer h-10 w-full rounded-lg hover:bg-[#8FA584] transition duration-300"
          >
            <span className="material-symbols-outlined">logout</span> <p>Log Out</p>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
