import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function BookRequest() {
    const [data, setData] = useState([]);

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

        const res = await fetch("http://localhost/backend/api/cancel_booking_admin.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                booking_id: bookingId, 
                action: "cancel" 
            })
        });

        const result = await res.json();

        if (result.message ) {
            Swal.fire("Success", result.message, "success");
            fetchData(); 
        }
    };


   
    const handleDelete = async (bookingId) => {
        const confirm = await Swal.fire({
            title: "Delete Booking?",
            text: "This cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#999",
            confirmButtonText: "Delete"
        });

        if (!confirm.isConfirmed) return;

        const res = await fetch("http://localhost/backend/api/cancel_booking_admin.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                booking_id: bookingId, 
                action: "delete" 
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

        const res = await fetch("http://localhost/backend/api/cancel_booking_admin.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                booking_id: bookingId, 
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
            <div className="bg-[#F6F3ED] w-full min-h-screen py-5">
                <div className="w-full flex px-10 justify-end">
                    <div className="min-w-40 px-2 h-10 flex text-sm  justify-center items-center gap-2">
                        <span class="material-symbols-outlined">account_circle</span>
                        <span className="poppins-semibold ">My Account</span>
                    </div>
                </div>
                <div className="lg:ml-60 px-8">
                    <h1 className="poppins-bold text-2xl">Book Request</h1>

                    <div className="mt-10 border rounded-2xl overflow-hidden shadow">

                        <table className="w-full text-center ">
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
                                {data.length > 0 ?(
                                data.map((b) => (
                                    <tr key={b.booking_id}>
                                        <td>{b.full_name}</td>
                                        <td>{b.event_name}</td>
                                        <td>{b.event_location}</td>
                                        <td>{b.package_name}</td>
                                        <td>{b.event_date}</td>

                                        <td className="flex gap-4 justify-center py-6">

                                           
                                            {b.booking_status === "Pending" && (
                                                <div className="flex items-center text-2xl gap-2">
                                                    <i onClick={() => handleApprove(b.booking_id)}  className="fa-solid fa-check text-green-600 cursor-pointer"></i>
                                                    <i onClick={() => handleCancel(b.booking_id)} className="fa-solid fa-xmark text-red-600 cursor-pointer"></i>
                                                   
                                                </div>
                                            )}

                                            {b.booking_status === "Cancelled" && (
                                                <div className="flex items-center gap-1">
                                                    <span
                                                        onClick={() => handleDelete(b.booking_id)}
                                                        className="material-symbols-outlined cursor-pointer text-red-600"
                                                    >
                                                        delete
                                                    </span>
                                                    <p className="text-sm">Delete</p>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                                ) :(
                                    <tr>
                                        <td colspan="6" className="py-10 poppins-semibold text-xl text-gray-400">
                                            No Book Request
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </>
    );
}

export default BookRequest;