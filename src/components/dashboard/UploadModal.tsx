import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Search, AlertCircle, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { generateRandomAnalysis } from "@/utils/analysisGenerator";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal = ({ isOpen, onClose }: UploadModalProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    console.log("File selected:", file.name);
    // Generate random analysis data and store in localStorage
    const analysisData = generateRandomAnalysis();
    localStorage.setItem('resumeAnalysis', JSON.stringify(analysisData));
    
    // Simulate upload process
    setTimeout(() => {
      onClose();
      navigate("/resume-analysis");
    }, 1000);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const existingResumes = [
    {
      name: "Divyang Chavda Resume.pdf",
      uploadedOn: "August 9, 2025",
      module: "Resume"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 mx-4 sm:mx-auto">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-primary">
              Upload new resume to Resume Module
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Upload Area */}
          <div className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                dragActive
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/30 hover:border-primary/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">Drop your PDF file here</p>
                
                <div className="text-muted-foreground">or</div>
                
                <div className="space-y-3">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 cursor-pointer">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose a File
                    </Button>
                  </label>
                  
                  <div className="border border-dashed border-muted-foreground/30 rounded px-3 py-1 inline-block">
                    <span className="text-lg font-semibold text-foreground">5</span>
                    <span className="text-sm text-muted-foreground ml-1">Upload left</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Message */}
            <Card className="p-4 bg-info/10 border-info/20">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-info mt-0.5" />
                <p className="text-sm text-info">
                  We recommend you to incorporate maximum feedback in your resume before every re-upload
                </p>
              </div>
            </Card>
          </div>

          {/* Already Uploaded Resumes Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              You can also select from already uploaded resumes
            </h3>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 px-4 bg-muted/30 rounded-lg font-medium text-sm text-muted-foreground">
              <div>Resume Name</div>
              <div className="hidden md:block">Uploaded on</div>
              <div className="hidden md:block">Module</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-2">
              {existingResumes
                .filter(resume => 
                  resume.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((resume, index) => (
                  <Card 
                    key={index} 
                    className="p-4 hover:bg-muted/30 cursor-pointer transition-colors"
                    onClick={() => {
                      // Generate random analysis data when selecting existing resume
                      const analysisData = generateRandomAnalysis();
                      localStorage.setItem('resumeAnalysis', JSON.stringify(analysisData));
                      onClose();
                      navigate("/resume-analysis");
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <div className="font-medium text-foreground">{resume.name}</div>
                      <div className="text-sm text-destructive flex items-center md:block">
                        <Calendar className="h-4 w-4 mr-1 md:hidden" />
                        <span className="md:hidden">Uploaded: </span>
                        {resume.uploadedOn}
                      </div>
                      <div className="flex md:block">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {resume.module}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;