import Sidebar from "./components/Sidebar";
function Payments(){
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
                <h1 className="poppins-bold text-2xl">Payments</h1>
            </div>
        </div>
        </>
       
    );
}
export default Payments;