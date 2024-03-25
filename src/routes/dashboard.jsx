import Body from "../components/body";
import Navbar from "../components/navbar";

const Dashboard = () => {
    return (
        <div className="flex flex-row">
            {/* /This is the sidebar menu/ */}
            <Navbar />
            {/* /This is the main content/ */}
            <Body />
        </div>
    );
}

export default Dashboard;