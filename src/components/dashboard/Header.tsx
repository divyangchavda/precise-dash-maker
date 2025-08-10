import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">VM</span>
          </div>
          <span className="font-semibold text-foreground">vmock</span>
        </div>
        <span className="text-muted-foreground">Student Dashboard</span>
      </div>

      {/* Right side - Actions and Profile */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Resume
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Network Feedback
        </Button>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
          </Button>
          
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-gradient-primary text-white text-sm">
              SK
            </AvatarFallback>
          </Avatar>
          
          <span className="text-sm font-medium">sumit Kumar</span>
          <Button variant="ghost" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;