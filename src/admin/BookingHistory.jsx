import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function BookingHistory() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // adjust as needed

    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost/backend/api/get_booking_history.php");
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Paginated data
    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleDelete = async (bookingId) => {
        const confirm = await Swal.fire({
            title: "Delete History?",
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8FA584",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete History",
        });

        if (!confirm.isConfirmed) return;

        const res = await fetch("http://localhost/backend/api/crud.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: bookingId,
                action: "delete",
            }),
        });

        const result = await res.json();

        if (result.message) {
            Swal.fire("Success", result.message, "success");
            fetchData();
        }
    };

    return (
        <>
            <Sidebar />

            <div className="bg-white w-full min-h-screen py-5">
                <div className="w-full flex px-10 justify-end">
                    <div className="min-w-40 px-2 h-10 flex text-sm justify-center items-center gap-2">
                        <span className="material-symbols-outlined">account_circle</span>
                        <span className="poppins-semibold">My Account</span>
                    </div>
                </div>

                <div className="ml-60 px-8">
                    <h1 className="poppins-bold text-2xl">Booking History</h1>

                    <div className="mt-10 border border-[#e0e0e0] overflow-hidden rounded-2xl shadow-[2px_2px_2px_gray]">
                        <table className="poppins-regular w-full text-center">
                            <thead className="bg-[#8FA584]">
                                <tr>
                                    <th>Name</th>
                                    <th>Event Name</th>
                                    <th>Location</th>
                                    <th>Package</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentData.length > 0 ? (
                                    currentData.map((b, id) => (
                                        <tr key={id}>
                                            <td>{b.full_name}</td>
                                            <td>{b.event_name}</td>
                                            <td>{b.event_location}</td>
                                            <td>{b.package_name}</td>
                                            <td>{b.event_date}</td>
                                            <td className="py-6">{b.booking_status}</td>

                                            <td>
                                                <div
                                                    onClick={() => handleDelete(b.booking_id)}
                                                    className="flex gap-2 text-md justify-center cursor-pointer items-center text-red-600"
                                                >
                                                    <i className="fa-solid fa-trash"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-xl poppins-semibold text-gray-400 py-10">
                                            No History
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
