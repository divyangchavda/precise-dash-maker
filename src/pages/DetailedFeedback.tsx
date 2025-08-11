import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  TrendingUp, 
  FileText, 
  Users, 
  Target, 
  CheckCircle,
  AlertTriangle,
  XCircle,
  Send,
  Zap,
  Plus,
  Clock,
  Mail,
  Phone,
  MapPin,
  Globe,
  X,
  AlertCircle,
  ChevronLeft,
  Home,
  Download,
  Share2
} from "lucide-react";
import Header from "@/components/dashboard/Header";

const DetailedFeedback = () => {
  const [activeSystemSection, setActiveSystemSection] = useState("presentation");
  const [selectedImpactField, setSelectedImpactField] = useState("Action Oriented");
  const [selectedPresentationField, setSelectedPresentationField] = useState("Number of Pages");
  const [selectedCompetencyField, setSelectedCompetencyField] = useState("Analytical");
  const [resumeData, setResumeData] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Load resume analysis data from localStorage
    const savedAnalysis = localStorage.getItem('resumeAnalysis');
    if (savedAnalysis) {
      try {
        const parsedData = JSON.parse(savedAnalysis);
        setResumeData(parsedData);
      } catch (error) {
        console.error('Error parsing resume analysis data:', error);
        toast({
          title: "Error",
          description: "Failed to load resume analysis data",
          variant: "destructive",
        });
      }
    }
  }, [toast]);
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Good Job!":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "On Track!":
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      case "Needs Work!":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Good Job!":
        return "text-success";
      case "On Track!":
        return "text-warning";
      case "Needs Work!":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const impactMetrics = [
    { title: "Action Oriented", status: "Good Job!", icon: Target },
    { title: "Specifics", status: "On Track!", icon: Target },
    { title: "Overusage", status: "Needs Work!", icon: XCircle },
    { title: "Avoided Words", status: "Needs Work!", icon: XCircle }
  ];

  const presentationMetrics = [
    { title: "Number of Pages", status: "Good Job!", icon: FileText },
    { title: "Overall Format", status: "Needs Work!", icon: FileText },
    { title: "Essential Sections", status: "Good Job!", icon: FileText },
    { title: "Section Specific", status: "Needs Work!", icon: FileText },
    { title: "Spell Check", status: "Needs Work!", icon: FileText }
  ];

  const competencyMetrics = [
    { title: "Analytical", status: "Good Job!", icon: Target },
    { title: "Communication", status: "On Track!", icon: Users },
    { title: "Leadership", status: "On Track!", icon: Users },
    { title: "Teamwork", status: "On Track!", icon: Users },
    { title: "Initiative", status: "Needs Work!", icon: Target }
  ];

  const improvementSteps = [
    {
      title: "Showcase more competencies",
      points: "+13",
      description: "Include more experiences as per your target function to showcase soft skills."
    },
    {
      title: "Remove overused and filler words",
      points: "+7",
      description: "Avoid repetition and the use of filler words in your resume."
    },
    {
      title: "Fix resume layout",
      points: "+3",
      description: "Correct overall format for better readability."
    }
  ];

  // Dynamic content for each field
  const getImpactContent = (field: string) => {
    const content = {
      "Action Oriented": {
        status: "Good Job!",
        description: "Your resume demonstrates strong action-oriented language and impactful content.",
        expandText: "What are Action Oriented Words?"
      },
      "Specifics": {
        status: "On Track!",
        description: "Your resume includes specific details but could benefit from more quantifiable metrics.",
        expandText: "How to Add More Specifics?"
      },
      "Overusage": {
        status: "Needs Work!",
        description: "Some words and phrases are being overused throughout your resume.",
        expandText: "Common Overused Words to Avoid"
      },
      "Avoided Words": {
        status: "Needs Work!",
        description: "Your resume contains words that should be avoided or replaced with stronger alternatives.",
        expandText: "List of Words to Avoid"
      }
    };
    return content[field] || content["Action Oriented"];
  };

  const getPresentationContent = (field: string) => {
    const content = {
      "Number of Pages": {
        status: "Good Job!",
        description: "Your resume meets the standard guidelines for the number of pages.",
        expandText: "Deciding the Length of Resume"
      },
      "Overall Format": {
        status: "Needs Work!",
        description: "The overall format of your resume needs improvement for better readability.",
        expandText: "Resume Formatting Best Practices"
      },
      "Essential Sections": {
        status: "Good Job!",
        description: "Your resume includes all the essential sections required.",
        expandText: "Must-Have Resume Sections"
      },
      "Section Specific": {
        status: "Needs Work!",
        description: "Some sections need specific formatting adjustments.",
        expandText: "Section-Specific Guidelines"
      },
      "Spell Check": {
        status: "Needs Work!",
        description: "There are spelling and grammar errors that need to be corrected.",
        expandText: "Common Spelling Mistakes"
      }
    };
    return content[field] || content["Number of Pages"];
  };

  const getCompetencyContent = (field: string) => {
    const content = {
      "Analytical": {
        status: "Good Job!",
        description: "You are doing a great job reflecting your analytical skills!",
        expandText: "What are Analytical Skills?",
        experiences: ["Application Framework", "Server Design", "Product Control", "Product Strategies", "Web Application", "Wireframing"]
      },
      "Communication": {
        status: "On Track!",
        description: "Your communication skills are well represented but could be enhanced further.",
        expandText: "What are Communication Skills?",
        experiences: ["Presentation Skills", "Team Collaboration", "Client Interaction", "Documentation", "Public Speaking", "Cross-functional Teams"]
      },
      "Leadership": {
        status: "On Track!",
        description: "Leadership qualities are present but need more prominent examples.",
        expandText: "What are Leadership Skills?",
        experiences: ["Project Management", "Team Leading", "Mentoring", "Decision Making", "Strategic Planning", "Conflict Resolution"]
      },
      "Teamwork": {
        status: "On Track!",
        description: "Teamwork skills are evident but could be strengthened with more examples.",
        expandText: "What are Teamwork Skills?",
        experiences: ["Collaborative Projects", "Cross-team Coordination", "Peer Support", "Group Problem Solving", "Shared Responsibilities", "Team Building"]
      },
      "Initiative": {
        status: "Needs Work!",
        description: "Initiative skills need more representation in your resume.",
        expandText: "What are Initiative Skills?",
        experiences: ["Innovation Projects", "Process Improvement", "Self-directed Learning", "Problem Identification", "Proactive Solutions", "New Ideas Implementation"]
      }
    };
    return content[field] || content["Analytical"];
  };

  // Handle navigation and actions
  const handleBackToDashboard = () => {
    navigate('/');
  };

  const handleBackToAnalysis = () => {
    navigate('/resume-analysis');
  };

  const handleShareReport = () => {
    toast({
      title: "Share Report",
      description: "Report sharing functionality coming soon!",
    });
  };

  const handleDownloadReport = () => {
    toast({
      title: "Download Report", 
      description: "Report download will be available soon!",
    });
  };

  const handleSendEmail = () => {
    toast({
      title: "Email Report",
      description: "Email functionality will be implemented soon!",
    });
  };

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Header />
      
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleBackToDashboard}
              className="hover:bg-muted p-1 h-auto"
            >
              <Home className="h-4 w-4 mr-1" />
              Student Dashboard
            </Button>
            <span>|</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleBackToAnalysis}
              className="hover:bg-muted p-1 h-auto"
            >
              Resume Module
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-foreground">Resume Feedback</h1>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleDownloadReport}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="ghost" size="sm" onClick={handleShareReport}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSendEmail}>
                <Send className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="summary" className="space-y-6">
          <TabsList className="grid w-fit grid-cols-3 bg-muted">
            <TabsTrigger value="summary" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Summary
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              System Feedback
            </TabsTrigger>
            <TabsTrigger value="bullet" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Bullet Level Feedback
            </TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-6">
            <div className="grid grid-cols-4 gap-6">
              {/* Main Content - 3 columns */}
              <div className="col-span-3 space-y-6">
                {/* Overall Score */}
                <Card className="p-6 bg-gradient-card border-0 shadow-moderate">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <TrendingUp className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-foreground">Overall Score</h2>
                        <p className="text-sm text-muted-foreground">
                          VMock considers lot of parameters inside 3 core modules. Check how you performed on these parameters
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-warning rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{resumeData?.score || 68}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">/100</span>
                    </div>
                  </div>
                </Card>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {/* Impact */}
                  <Card className="p-6 bg-gradient-card border-0 shadow-moderate">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-success mb-1">{resumeData?.metrics?.[0]?.score || 28}</div>
                      <div className="text-sm text-muted-foreground">/{resumeData?.metrics?.[0]?.maxScore || 40}</div>
                      <h3 className="font-semibold text-foreground mt-2">Impact</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Focuses on the quality of content and its impact on recruiters.
                      </p>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 mb-4">
                      <div className="bg-success h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>

                    <div className="space-y-3">
                      {impactMetrics.map((metric, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:scale-105 hover:shadow-sm group cursor-pointer"
                          style={{
                            transform: 'perspective(1000px) rotateX(0deg)',
                            transformStyle: 'preserve-3d',
                            transition: 'transform 0.3s ease-in-out'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(15deg) rotateY(5deg)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <metric.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            <span className="text-sm text-foreground group-hover:font-medium transition-all duration-300">{metric.title}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(metric.status)}
                            <span className={`text-xs ${getStatusColor(metric.status)} group-hover:font-semibold transition-all duration-300`}>
                              {metric.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Presentation */}
                  <Card className="p-6 bg-gradient-card border-0 shadow-moderate">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-success mb-1">{resumeData?.metrics?.[1]?.score || 23}</div>
                      <div className="text-sm text-muted-foreground">/{resumeData?.metrics?.[1]?.maxScore || 30}</div>
                      <h3 className="font-semibold text-foreground mt-2">Presentation</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Focuses on whether your resume is in sync with format requirements.
                      </p>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 mb-4">
                      <div className="bg-success h-2 rounded-full" style={{ width: '77%' }}></div>
                    </div>

                    <div className="space-y-3">
                      {presentationMetrics.map((metric, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:scale-105 hover:shadow-sm group cursor-pointer"
                          style={{
                            transform: 'perspective(1000px) rotateX(0deg)',
                            transformStyle: 'preserve-3d',
                            transition: 'transform 0.3s ease-in-out'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(15deg) rotateY(5deg)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <metric.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            <span className="text-sm text-foreground group-hover:font-medium transition-all duration-300">{metric.title}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(metric.status)}
                            <span className={`text-xs ${getStatusColor(metric.status)} group-hover:font-semibold transition-all duration-300`}>
                              {metric.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Competencies */}
                  <Card className="p-6 bg-gradient-card border-0 shadow-moderate">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-warning mb-1">{resumeData?.metrics?.[2]?.score || 17}</div>
                      <div className="text-sm text-muted-foreground">/{resumeData?.metrics?.[2]?.maxScore || 30}</div>
                      <h3 className="font-semibold text-foreground mt-2">Competencies</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Assesses how well you have reflected your 5 core competencies.
                      </p>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 mb-4">
                      <div className="bg-warning h-2 rounded-full" style={{ width: '57%' }}></div>
                    </div>

                    <div className="space-y-3">
                      {competencyMetrics.map((metric, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-2 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:scale-105 hover:shadow-sm group cursor-pointer"
                          style={{
                            transform: 'perspective(1000px) rotateX(0deg)',
                            transformStyle: 'preserve-3d',
                            transition: 'transform 0.3s ease-in-out'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(15deg) rotateY(5deg)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <metric.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            <span className="text-sm text-foreground group-hover:font-medium transition-all duration-300">{metric.title}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(metric.status)}
                            <span className={`text-xs ${getStatusColor(metric.status)} group-hover:font-semibold transition-all duration-300`}>
                              {metric.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Status Legend */}
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm text-success">Good Job!</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-warning" />
                    <span className="text-sm text-warning">On Track!</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-destructive">Needs Work!</span>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-span-1 space-y-6">
                <Card className="p-6 bg-gradient-card border-0 shadow-moderate">
                  <h3 className="font-semibold text-foreground mb-4">How to improve your Resume?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Get personalized feedback and sample suggestions on your Resume
                  </p>
                  
                  <Button 
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 mb-6"
                    onClick={() => {
                      toast({
                        title: "Detailed Feedback",
                        description: "You're already viewing the detailed feedback page!",
                      });
                    }}
                  >
                    View Detailed Feedback
                  </Button>

                  <div>
                    <h4 className="font-semibold text-primary mb-4">Steps to Improve Your Score</h4>
                    <div className="space-y-4">
                      {(resumeData?.improvementSteps || improvementSteps).map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <TrendingUp className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-foreground text-sm">{step.title}</span>
                              <Badge variant="secondary" className="bg-primary text-primary-foreground px-2 py-0.5 text-xs">
                                {step.points}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="system">
            <div className="flex h-full">
              {/* Left 50% - Feedback Interface */}
              <div className="w-1/2 pr-3">
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500 text-white rounded-lg px-3 py-1 text-lg font-bold">{resumeData?.score || 68}</div>
                    <span className="text-gray-700 font-medium">Resume Score</span>
                  </div>
                  
                  <div className="flex gap-8 mt-4">
                    <div 
                      className={`text-center cursor-pointer ${activeSystemSection === "impact" ? "border-b-2 border-black pb-1" : ""}`}
                      onClick={() => setActiveSystemSection("impact")}
                    >
                      <div className="text-green-600 text-xl font-bold">{resumeData?.metrics?.[0]?.score || 28}<span className="text-sm text-gray-500">/{resumeData?.metrics?.[0]?.maxScore || 40}</span></div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        Impact <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div 
                      className={`text-center cursor-pointer ${activeSystemSection === "presentation" ? "border-b-2 border-black pb-1" : ""}`}
                      onClick={() => setActiveSystemSection("presentation")}
                    >
                      <div className="text-green-600 text-xl font-bold">{resumeData?.metrics?.[1]?.score || 23}<span className="text-sm text-gray-500">/{resumeData?.metrics?.[1]?.maxScore || 30}</span></div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        Presentation <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div 
                      className={`text-center cursor-pointer ${activeSystemSection === "competencies" ? "border-b-2 border-black pb-1" : ""}`}
                      onClick={() => setActiveSystemSection("competencies")}
                    >
                      <div className="text-orange-500 text-xl font-bold">{resumeData?.metrics?.[2]?.score || 17}<span className="text-sm text-gray-500">/{resumeData?.metrics?.[2]?.maxScore || 30}</span></div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        Competencies <Clock className="h-4 w-4 text-orange-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Content based on active section */}
                {activeSystemSection === "impact" && (
                  <div className="flex gap-4 h-96">
                    {/* Categories Sidebar */}
                    <div className="w-36 space-y-1">
                      {impactMetrics.map((metric, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center gap-3 p-2 cursor-pointer rounded ${
                            selectedImpactField === metric.title ? "bg-white border-l-4 border-green-500" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedImpactField(metric.title)}
                        >
                          <div className={`w-8 h-8 ${metric.status === "Good Job!" ? "bg-green-100" : "bg-red-100"} rounded-full flex items-center justify-center`}>
                            {metric.status === "Good Job!" ? 
                              <CheckCircle className="h-4 w-4 text-green-600" /> : 
                              <AlertCircle className="h-4 w-4 text-red-600" />
                            }
                          </div>
                          <span className="text-sm font-medium text-gray-700">{metric.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Feedback Content */}
                    <div className="flex-1 bg-white border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">{selectedImpactField}</h3>
                        <Badge className={`${
                          getImpactContent(selectedImpactField).status === "Good Job!" ? "bg-green-100 text-green-700" :
                          getImpactContent(selectedImpactField).status === "On Track!" ? "bg-orange-100 text-orange-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {getImpactContent(selectedImpactField).status}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {getImpactContent(selectedImpactField).description}
                      </p>
                      
                      <div 
                        className="bg-gray-50 border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          toast({
                            title: getImpactContent(selectedImpactField).expandText,
                            description: "Detailed explanation will be available in a future update.",
                          });
                        }}
                      >
                        <span className="text-sm font-medium text-gray-700">{getImpactContent(selectedImpactField).expandText}</span>
                        <Plus className="h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                )}

                {activeSystemSection === "presentation" && (
                  <div className="flex gap-4 h-96">
                    {/* Categories Sidebar */}
                    <div className="w-36 space-y-1">
                      {presentationMetrics.map((metric, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center gap-3 p-2 cursor-pointer rounded ${
                            selectedPresentationField === metric.title ? "bg-white border-l-4 border-green-500" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedPresentationField(metric.title)}
                        >
                          <div className={`w-8 h-8 ${metric.status === "Good Job!" ? "bg-green-100" : "bg-red-100"} rounded-full flex items-center justify-center`}>
                            {metric.status === "Good Job!" ? 
                              <CheckCircle className="h-4 w-4 text-green-600" /> : 
                              <AlertCircle className="h-4 w-4 text-red-600" />
                            }
                          </div>
                          <span className="text-sm font-medium text-gray-700">{metric.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Feedback Content */}
                    <div className="flex-1 bg-white border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">{selectedPresentationField}</h3>
                        <Badge className={`${
                          getPresentationContent(selectedPresentationField).status === "Good Job!" ? "bg-green-100 text-green-700" :
                          getPresentationContent(selectedPresentationField).status === "On Track!" ? "bg-orange-100 text-orange-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {getPresentationContent(selectedPresentationField).status}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {getPresentationContent(selectedPresentationField).description}
                      </p>
                      
                      <div 
                        className="bg-gray-50 border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          toast({
                            title: getPresentationContent(selectedPresentationField).expandText,
                            description: "Detailed explanation will be available in a future update.",
                          });
                        }}
                      >
                        <span className="text-sm font-medium text-gray-700">{getPresentationContent(selectedPresentationField).expandText}</span>
                        <Plus className="h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                )}

                {activeSystemSection === "competencies" && (
                  <div className="flex gap-4 h-96">
                    {/* Categories Sidebar */}
                    <div className="w-36 space-y-1">
                      {competencyMetrics.map((metric, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center gap-3 p-2 cursor-pointer rounded ${
                            selectedCompetencyField === metric.title ? "bg-white border-l-4 border-green-500" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedCompetencyField(metric.title)}
                        >
                          <div className={`w-8 h-8 ${
                            metric.status === "Good Job!" ? "bg-green-100" : 
                            metric.status === "On Track!" ? "bg-orange-100" : "bg-red-100"
                          } rounded-full flex items-center justify-center`}>
                            {metric.status === "Good Job!" ? 
                              <CheckCircle className="h-4 w-4 text-green-600" /> : 
                              metric.status === "On Track!" ?
                              <Clock className="h-4 w-4 text-orange-600" /> :
                              <AlertCircle className="h-4 w-4 text-red-600" />
                            }
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700">{metric.title}</span>
                            {metric.status !== "Good Job!" && (
                              <Clock className="h-3 w-3 text-orange-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Feedback Content */}
                    <div className="flex-1 bg-white border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <ChevronLeft className="h-4 w-4 text-gray-400" />
                        <h3 className="text-lg font-semibold text-gray-800">{selectedCompetencyField} Skills</h3>
                        <Badge className={`${
                          getCompetencyContent(selectedCompetencyField).status === "Good Job!" ? "bg-green-100 text-green-700" :
                          getCompetencyContent(selectedCompetencyField).status === "On Track!" ? "bg-orange-100 text-orange-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {getCompetencyContent(selectedCompetencyField).status}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {getCompetencyContent(selectedCompetencyField).description}
                      </p>
                      
                      <div 
                        className="bg-gray-50 border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 mb-6"
                        onClick={() => {
                          toast({
                            title: getCompetencyContent(selectedCompetencyField).expandText,
                            description: "Detailed explanation will be available in a future update.",
                          });
                        }}
                      >
                        <span className="text-sm font-medium text-gray-700">{getCompetencyContent(selectedCompetencyField).expandText}</span>
                        <Plus className="h-4 w-4 text-gray-500" />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">Experiences you can consider</h4>
                        <div className="flex flex-wrap gap-2">
                          {getCompetencyContent(selectedCompetencyField).experiences?.map((experience, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">
                              {experience}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right 50% - Resume Preview */}
              <div className="w-1/2 pl-3">
                <div className="bg-white border rounded-lg h-full p-6 overflow-y-auto">
                  {resumeData?.profile ? (
                    <>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{resumeData.profile.name.charAt(0)}</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{resumeData.profile.name}</h2>
                      </div>

                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                        {resumeData.profile.summary}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>{resumeData.profile.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>{resumeData.profile.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{resumeData.profile.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="h-4 w-4 text-primary" />
                          <span>{resumeData.profile.website}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-primary font-semibold text-sm mb-3 border-b border-gray-200 pb-1">WORK EXPERIENCE</h3>
                        
                        <div className="space-y-4">
                          {resumeData.profile.workExperience.map((job, index) => (
                            <div key={index} className="mb-4">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-semibold text-gray-900">{job.company}</h4>
                                  <p className="text-gray-700">{job.position}</p>
                                </div>
                                <span className="text-gray-600 text-sm">{job.duration}</span>
                              </div>
                              
                              <ul className="space-y-2 text-sm text-gray-700">
                                {job.bullets.map((bullet, bulletIndex) => (
                                  <li key={bulletIndex} className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-primary font-semibold text-sm mb-3 border-b border-gray-200 pb-1">EDUCATION</h3>
                        
                        <div className="space-y-3">
                          {resumeData.profile.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-gray-900">{edu.institution}</h4>
                                <p className="text-gray-700 text-sm">{edu.degree} - {edu.gpa}</p>
                              </div>
                              <span className="text-gray-600 text-sm">{edu.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full text-center">
                      <div>
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-foreground mb-2">No Resume Uploaded</h3>
                        <p className="text-muted-foreground">Upload a resume to see the preview here</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bullet">
            <Card className="p-8 text-center">
              <h3 className="text-lg font-semibold mb-4">Bullet Level Feedback</h3>
              <p className="text-muted-foreground mb-6">Individual bullet point analysis coming soon...</p>
              <Button 
                onClick={() => {
                  toast({
                    title: "Coming Soon",
                    description: "Bullet level feedback feature is under development!",
                  });
                }}
              >
                Get Notified
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DetailedFeedback;