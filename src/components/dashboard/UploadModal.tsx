import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Search, AlertCircle, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { extractTextFromFile, parseResumeContent } from "@/utils/resumeParser";

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

  const extractResumeContent = async (file: File): Promise<any> => {
    try {
      // Extract text from the uploaded file
      const extractedText = await extractTextFromFile(file);
      console.log('Extracted text:', extractedText.substring(0, 200) + '...');
      
      // Parse the extracted text into structured data
      const parsedResume = parseResumeContent(extractedText, file.name);
      console.log('Parsed resume:', parsedResume);
      
      // Generate analysis metrics
      const score = Math.floor(Math.random() * 40) + 60;
      const impactScore = Math.floor(score * 0.4 + Math.random() * 5);
      const presentationScore = Math.floor(score * 0.3 + Math.random() * 5);
      const competenciesScore = Math.floor(score * 0.3 + Math.random() * 5);
      
      const resumeData = {
        score,
        name: `${parsedResume.name} Resume`,
        profile: parsedResume,
        uploadDate: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        uploadTime: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        metrics: [
          { label: "Impact", score: impactScore, maxScore: 40 },
          { label: "Presentation", score: presentationScore, maxScore: 30 },
          { label: "Competencies", score: competenciesScore, maxScore: 30 }
        ],
        improvementSteps: [
          {
            title: "Enhance skill descriptions",
            points: `+${Math.floor(Math.random() * 10 + 5)}`,
            description: "Add more specific technical skills and quantify your achievements."
          },
          {
            title: "Improve work experience details", 
            points: `+${Math.floor(Math.random() * 8 + 4)}`,
            description: "Include more measurable outcomes and impact metrics."
          },
          {
            title: "Optimize resume structure",
            points: `+${Math.floor(Math.random() * 6 + 3)}`,
            description: "Enhance formatting and section organization."
          }
        ]
      };
      
      return resumeData;
    } catch (error) {
      console.error("Error extracting resume content:", error);
      throw error;
    }
  };

  const handleFileUpload = async (file: File) => {
    console.log("File selected:", file.name, "Type:", file.type);
    
    try {
      // Extract actual resume content with enhanced parsing
      const analysisData = await extractResumeContent(file);
      localStorage.setItem('resumeAnalysis', JSON.stringify(analysisData));
      
      // Simulate processing time
      setTimeout(() => {
        onClose();
        navigate("/resume-analysis");
      }, 1500);
    } catch (error) {
      console.error("Error processing resume:", error);
      
      // Enhanced fallback with basic file info
      const fileName = file.name.replace(/\.(pdf|doc|docx)$/i, '');
      const fallbackData = {
        score: 68,
        name: `${fileName} Resume`,
        profile: {
          name: fileName.replace(/[_-]/g, ' '),
          email: `${fileName.toLowerCase().replace(/[^a-z]/g, '')}@email.com`,
          phone: "+1 (555) 123-4567",
          location: "Location from Resume",
          website: `${fileName.toLowerCase().replace(/[^a-z]/g, '')}.dev`,
          summary: `Professional summary for ${fileName}. This resume was uploaded but content extraction encountered issues. The analysis is based on file metadata.`,
          workExperience: [
            {
              company: "Company from Resume",
              position: "Position from Resume",
              duration: "Employment Period",
              bullets: [
                "Key achievement extracted from uploaded resume",
                "Professional responsibility from document",
                "Technical skill demonstrated in resume"
              ]
            }
          ],
          education: [
            {
              institution: "University from Resume",
              degree: "Degree Program",
              duration: "Graduation Period",
              gpa: "Academic Performance"
            }
          ],
          skills: ["Technical Skills", "Professional Abilities", "Core Competencies"]
        },
        uploadDate: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        uploadTime: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        metrics: [
          { label: "Impact", score: 25, maxScore: 40 },
          { label: "Presentation", score: 20, maxScore: 30 },
          { label: "Competencies", score: 23, maxScore: 30 }
        ],
        improvementSteps: [
          {
            title: "Improve file format",
            points: "+8",
            description: "Consider using a different file format for better text extraction."
          },
          {
            title: "Enhance content structure", 
            points: "+6",
            description: "Organize resume sections more clearly for better parsing."
          },
          {
            title: "Add more details",
            points: "+4",
            description: "Include more specific information in your resume."
          }
        ]
      };
      
      localStorage.setItem('resumeAnalysis', JSON.stringify(fallbackData));
      onClose();
      navigate("/resume-analysis");
    }
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
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${
                dragActive
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/30 hover:border-primary/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <div className="space-y-4 pointer-events-none">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-lg text-muted-foreground">Drop your resume file here</p>
                
                <div className="text-muted-foreground">or</div>
                
                <div className="space-y-3">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <div className="pointer-events-auto">
                    <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 cursor-pointer">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose a File
                    </Button>
                  </div>
                  
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
                    onClick={async () => {
                      // For existing resumes, create data based on the resume name
                      const analysisData = {
                        score: Math.floor(Math.random() * 40) + 60,
                        name: resume.name,
                        profile: {
                          name: resume.name.replace('.pdf', '').replace(/[_-]/g, ' '),
                          email: "existing@email.com",
                          phone: "+1 (555) 987-6543",
                          location: "Existing Location",
                          website: "existing.com",
                          summary: "This is an existing resume that was previously uploaded to the system.",
                          workExperience: [
                            {
                              company: "Previous Company",
                              position: "Previous Position",
                              duration: "Previous Duration",
                              bullets: ["Previous achievement from existing resume"]
                            }
                          ],
                          education: [
                            {
                              institution: "Previous University",
                              degree: "Previous Degree",
                              duration: "Previous Graduation",
                              gpa: "Previous GPA"
                            }
                          ]
                        }
                      };
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