import Sidebar from "./components/Sidebar";
function BookRequest(){
    return(
        <>
        <Sidebar/>
        <div className="bg-[#F6F3ED] w-full min-h-screen py-5 ">
            <div className="w-full flex px-10 justify-end">
                <div className="min-w-40 px-2 h-10 flex text-sm  justify-center items-center gap-2">
                    <span class="material-symbols-outlined">account_circle</span>
                    <span className="poppins-semibold ">My Account</span>
                </div>
            </div>
            <div className="ml-60  px-8">
                <h1 className="poppins-bold text-2xl">Book Request</h1>
                 <div className="mt-10 border border-[#e0e0e0] overflow-hidden rounded-2xl shadow-[2px_2px_2px_gray]">
                    <table className=" poppins-regular w-full  text-center">
                        <thead className="bg-[#8FA584] ">
                            <tr className="">
                                <th>Name</th>
                                <th>Event Name</th>
                                <th>Location</th>
                                <th>Package</th>
                                <th className="py-6">Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joel Malupiton</td>
                                <td>Wedding Event</td>
                                <td>Cavite</td>
                                <td>Luxe</td>
                                <td className="py-6">12/18/2015</td>
                                <td>
                                    <span class="material-symbols-outlined">file_copy_off</span>

                                </td>
                                
                                
                             </tr>
                             <tr>
                                <td>Joel Malupiton</td>
                                <td>Wedding Event</td>
                                <td>Cavite</td>
                                <td>Luxe</td>
                                <td className="py-6">12/18/2015</td>
                                <td>
                                    <span class="material-symbols-outlined">file_copy_off</span>
                                </td>
                               
                             </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
       
    );
}
export default BookRequest;