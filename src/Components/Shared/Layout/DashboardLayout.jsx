import { Outlet } from "react-router-dom";
import SideBar from "../../DashBoard/SideBar/SideBar";
const Dashboard = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content pt-[35px] pl-[100px] pr-[110px] bg-[#F7F7F7] relative">
                {/* Page content here */}
                <Outlet />
            </div>
            <div className="drawer-side ">
                {/* Sidebar content here */}
                <SideBar />
            </div>
        </div>
    );
};

export default Dashboard;
