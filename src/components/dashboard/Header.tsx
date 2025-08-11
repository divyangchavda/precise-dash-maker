import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Menu, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center space-x-2 lg:space-x-4">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">VM</span>
          </div>
          <span className="font-semibold text-foreground text-lg lg:text-xl">vmock</span>
        </div>
        <span className="text-muted-foreground text-sm lg:text-base hidden sm:inline">Student Dashboard</span>
      </div>

      {/* Right side - Actions and Profile */}
      <div className="flex items-center space-x-2 lg:space-x-4">
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground text-xs lg:text-sm"
            onClick={() => navigate("/resume-analysis")}
          >
            Resume
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground text-xs lg:text-sm"
            onClick={() => navigate("/detailed-feedback")}
          >
            <span className="hidden lg:inline">Network Feedback</span>
            <span className="lg:hidden">Feedback</span>
          </Button>
        </div>
        
        <div className="flex items-center space-x-2 lg:space-x-3">
          <Button variant="ghost" size="icon" className="relative h-8 w-8 lg:h-9 lg:w-9">
            <Search className="h-4 w-4 lg:h-5 lg:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative h-8 w-8 lg:h-9 lg:w-9">
            <Bell className="h-4 w-4 lg:h-5 lg:w-5" />
          </Button>
          
          <Avatar className="h-7 w-7 lg:h-8 lg:w-8">
            <AvatarFallback className="bg-gradient-primary text-white text-xs lg:text-sm">
              SK
            </AvatarFallback>
          </Avatar>
          
          <span className="text-xs lg:text-sm font-medium hidden sm:inline">sumit Kumar</span>
          <Button variant="ghost" size="icon" className="md:hidden h-8 w-8">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;