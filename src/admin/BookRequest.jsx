import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function BookRequest() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; 

    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost/backend/api/get_booking_request.php");
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

    // paginate
    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleCancel = async (bookingId) => {
        const confirm = await Swal.fire({
            title: "Cancel Booking?",
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8FA584",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancel Booking",
        });

        if (!confirm.isConfirmed) return;

        const res = await fetch("http://localhost/backend/api/crud.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                id: bookingId, 
                action: "cancel" 
            })
        });

        const result = await res.json();

        if (result.message ) {
            Swal.fire("Success", result.message, "success");
            fetchData(); 
        }
    };

    const handleApprove = async (bookingId) => {
        const confirm = await Swal.fire({
            title: "Approve Booking?",
            text: "This cannot be undone!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#8FA584",
            cancelButtonColor: "#d33",
            confirmButtonText: "Approve"
        });

        if (!confirm.isConfirmed) return;

        const res = await fetch("http://localhost/backend/api/crud.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                id: bookingId, 
                action: "approve" 
            })
        });

        const result = await res.json();

        if (result.message) {
            Swal.fire("Success", result.message, "success");
            fetchData(); 
        } else {
            Swal.fire("Error", result.error, "error");
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

                <div className="lg:ml-60 px-8">
                    <h1 className="poppins-bold text-2xl">Book Request</h1>

                    <div className="mt-10 border rounded-2xl overflow-hidden shadow">
                        <table className="w-full text-center">
                            <thead className="bg-[#8FA584]">
                                <tr>
                                    <th>Name</th>
                                    <th>Event Name</th>
                                    <th>Location</th>
                                    <th>Package</th>
                                    <th>Date</th>
                                    <th className="py-6">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentData.length > 0 ? (
                                    currentData.map((b) => (
                                        <tr key={b.booking_id}>
                                            <td>{b.full_name}</td>
                                            <td>{b.event_name}</td>
                                            <td>{b.event_location}</td>
                                            <td>{b.package_name}</td>
                                            <td>{b.event_date}</td>

                                            <td className="flex gap-4 justify-center py-6">
                                                {b.booking_status === "Pending" && (
                                                    <div className="flex items-center text-2xl gap-2">
                                                        <i 
                                                            onClick={() => handleApprove(b.booking_id)}  
                                                            className="fa-solid fa-check text-green-600 cursor-pointer"
                                                        ></i>

                                                        <i 
                                                            onClick={() => handleCancel(b.booking_id)} 
                                                            className="fa-solid fa-xmark text-red-600 cursor-pointer"
                                                        ></i>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="py-10 poppins-semibold text-xl text-gray-400">
                                            No Book Request
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

export default BookRequest;
