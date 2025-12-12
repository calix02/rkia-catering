import Sidebar from "./components/Sidebar";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";

function BookingHistory() {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // adjust as needed
    const [userId, setUserId] = useState(user.user_id);

    useEffect(() => {
        if (!userId) return;

        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost/backend/api/get_history_user.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId }),
                });

                const json = await res.json();
                setData(json);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [userId]);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Slice data for current page
    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <Sidebar />
            <div className="h-screen w-full">
                <div className="lg:ml-60 flex justify-between items-center pt-10 px-10">
                    <h1 className="poppins-semibold text-2xl">Book Status</h1>
                </div>

                <div className="ml-60 px-8">
                    <div className="mt-10 border border-[#e0e0e0] overflow-hidden rounded-2xl shadow-[2px_2px_2px_gray]">
                        <table className="poppins-regular w-full text-center">
                            <thead className="bg-[#8FA584]">
                                <tr>
                                    <th>Event Name</th>
                                    <th>Location</th>
                                    <th>Package</th>
                                    <th className="py-6">Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentData.length > 0 ? (
                                    currentData.map((b, id) => (
                                        <tr key={id}>
                                            <td>{b.event_name}</td>
                                            <td>{b.event_location}</td>
                                            <td>{b.package_name}</td>
                                            <td className="py-6">{b.event_date}</td>
                                            <td>{b.booking_status}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-xl poppins-semibold text-gray-400 py-10">
                                            No Bookings Found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                  
                    <div className="flex justify-center gap-3 mt-5">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2 rounded bg-[#8FA584] text-white">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default BookingHistory;
