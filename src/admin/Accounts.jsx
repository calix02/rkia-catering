import Sidebar from "./components/Sidebar";
function Accounts(){
  
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
                <h1 className="poppins-bold text-2xl">Accounts</h1>
                 <div className="mt-10 border border-[#e0e0e0] overflow-hidden rounded-2xl shadow-[2px_2px_2px_gray]">
                    <table className=" poppins-regular w-full text-center h-55">
                        <thead className="bg-[#8FA584]">
                            <tr className="h-18">
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joel Malupiton</td>
                                <td>joelm01</td>
                                <td>admin</td>   
                                <td>
                            <div className="flex justify-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-full ">
                                <i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full ">
                                <i className="fa-solid fa-trash text-red-500 fa-lg"></i>
                            </button>
                            </div>

                                </td>
                                
                                
                             </tr>
                             <tr>
                                <td>Josh Cable</td>
                                <td>josh09</td>
                                <td>customer</td>   
                                <td>
                            <div className="flex justify-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-full ">
                                <i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full ">
                                <i className="fa-solid fa-trash text-red-500 fa-lg"></i>
                            </button>
                            </div>

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
export default Accounts;