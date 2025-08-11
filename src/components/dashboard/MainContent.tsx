import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, TrendingUp, Users } from "lucide-react";
import UploadModal from "./UploadModal";

const MainContent = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  return (
    <div className="flex-1 p-4 lg:p-6 bg-dashboard-bg space-y-4 lg:space-y-6">
      {/* Analytics Chart Card */}
      <Card className="p-6 bg-gradient-card border-0 shadow-moderate">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Resume Analytics Overview</h3>
          <div className="text-sm text-muted-foreground">Most commonly used methodical skills</div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">72%</span>
            </div>
            <p className="text-sm font-medium">Communication Skills</p>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto bg-success/10 rounded-full flex items-center justify-center">
              <span className="text-success font-bold">65%</span>
            </div>
            <p className="text-sm font-medium">Project Management</p>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-success h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto bg-info/10 rounded-full flex items-center justify-center">
              <span className="text-info font-bold">58%</span>
            </div>
            <p className="text-sm font-medium">Analytical Thinking</p>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-info h-2 rounded-full" style={{ width: '58%' }}></div>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto bg-warning/10 rounded-full flex items-center justify-center">
              <span className="text-warning font-bold">54%</span>
            </div>
            <p className="text-sm font-medium">Critical Thinking</p>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-warning h-2 rounded-full" style={{ width: '54%' }}></div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-2">
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground border-primary">
            Download Reports
          </Button>
          <Button variant="outline" size="sm">
            Schedule follow-up
          </Button>
        </div>
      </Card>

      {/* Upload Resume Section */}
      <Card className="p-8 bg-gradient-card border-0 shadow-moderate text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Improve Your Resume</h2>
            <p className="text-muted-foreground">Upload existing Resume to get instant feedback</p>
          </div>
          
          <div className="p-8 border-2 border-dashed border-muted-foreground/30 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <Button 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
              onClick={() => setIsUploadModalOpen(true)}
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload Resume (1 left)
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">PDF, DOC supported</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Instant analysis</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Bottom Insights Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <Card className="p-6 bg-gradient-card border-0 shadow-moderate">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-success/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-success" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-2">Analytical skill is the highest reflected skill</h4>
              <p className="text-sm text-muted-foreground">across thousands of high-scoring resumes.</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-moderate">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-2">More than 70% of high-scoring resumes</h4>
              <p className="text-sm text-muted-foreground">show scope of responsibilities with quantified impact.</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Upload Modal */}
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />
    </div>
  );
};

export default MainContent;