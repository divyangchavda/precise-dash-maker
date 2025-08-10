import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import MainContent from "@/components/dashboard/MainContent";
import RightSidebar from "@/components/dashboard/RightSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Index;
