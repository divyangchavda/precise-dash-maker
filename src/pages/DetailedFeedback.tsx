import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
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
  ChevronLeft
} from "lucide-react";
import Header from "@/components/dashboard/Header";

const DetailedFeedback = () => {
  const [activeSystemSection, setActiveSystemSection] = useState("presentation");
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

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Header />
      
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            <span>Student Dashboard</span>
            <span>|</span>
            <span>Resume Module</span>
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-foreground">Resume Feedback</h1>
            <Button variant="ghost" size="sm">
              <Send className="h-4 w-4 mr-2" />
            </Button>
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
                        <span className="text-2xl font-bold text-white">68</span>
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
                      <div className="text-3xl font-bold text-success mb-1">28</div>
                      <div className="text-sm text-muted-foreground">/40</div>
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
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <metric.icon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">{metric.title}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(metric.status)}
                            <span className={`text-xs ${getStatusColor(metric.status)}`}>
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
                      <div className="text-3xl font-bold text-success mb-1">23</div>
                      <div className="text-sm text-muted-foreground">/30</div>
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
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <metric.icon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">{metric.title}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(metric.status)}
                            <span className={`text-xs ${getStatusColor(metric.status)}`}>
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
                      <div className="text-3xl font-bold text-warning mb-1">17</div>
                      <div className="text-sm text-muted-foreground">/30</div>
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
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <metric.icon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">{metric.title}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(metric.status)}
                            <span className={`text-xs ${getStatusColor(metric.status)}`}>
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
                  
                  <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 mb-6">
                    View Detailed Feedback
                  </Button>

                  <div>
                    <h4 className="font-semibold text-primary mb-4">Steps to Improve Your Score</h4>
                    <div className="space-y-4">
                      {improvementSteps.map((step, index) => (
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
                    <div className="bg-orange-500 text-white rounded-lg px-3 py-1 text-lg font-bold">68</div>
                    <span className="text-gray-700 font-medium">Resume Score</span>
                  </div>
                  
                  <div className="flex gap-8 mt-4">
                    <div 
                      className={`text-center cursor-pointer ${activeSystemSection === "impact" ? "border-b-2 border-black pb-1" : ""}`}
                      onClick={() => setActiveSystemSection("impact")}
                    >
                      <div className="text-green-600 text-xl font-bold">28<span className="text-sm text-gray-500">/40</span></div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        Impact <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div 
                      className={`text-center cursor-pointer ${activeSystemSection === "presentation" ? "border-b-2 border-black pb-1" : ""}`}
                      onClick={() => setActiveSystemSection("presentation")}
                    >
                      <div className="text-green-600 text-xl font-bold">23<span className="text-sm text-gray-500">/30</span></div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        Presentation <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    <div 
                      className={`text-center cursor-pointer ${activeSystemSection === "competencies" ? "border-b-2 border-black pb-1" : ""}`}
                      onClick={() => setActiveSystemSection("competencies")}
                    >
                      <div className="text-orange-500 text-xl font-bold">17<span className="text-sm text-gray-500">/30</span></div>
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
                        <div key={index} className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded">
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
                        <h3 className="text-lg font-semibold text-gray-800">Action Oriented</h3>
                        <Badge className="bg-green-100 text-green-700">Good Job!</Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        Your resume demonstrates strong action-oriented language and impactful content.
                      </p>
                      
                      <div className="bg-gray-50 border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100">
                        <span className="text-sm font-medium text-gray-700">What are Action Oriented Words?</span>
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
                        <div key={index} className={`flex items-center gap-3 p-2 cursor-pointer rounded ${index === 0 ? "bg-white border-l-4 border-green-500" : "hover:bg-gray-50"}`}>
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
                        <h3 className="text-lg font-semibold text-gray-800">Number of Pages</h3>
                        <Badge className="bg-green-100 text-green-700">Good Job!</Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        Your resume meets the standard guidelines for the number of pages.
                      </p>
                      
                      <div className="bg-gray-50 border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100">
                        <span className="text-sm font-medium text-gray-700">Deciding the Length of Resume</span>
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
                        <div key={index} className={`flex items-center gap-3 p-2 cursor-pointer rounded ${index === 0 ? "bg-white border-l-4 border-green-500" : "hover:bg-gray-50"}`}>
                          <div className={`w-8 h-8 ${index === 0 ? "bg-green-100" : "bg-orange-100"} rounded-full flex items-center justify-center`}>
                            {index === 0 ? 
                              <CheckCircle className="h-4 w-4 text-green-600" /> : 
                              <Clock className="h-4 w-4 text-orange-600" />
                            }
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700">{metric.title}</span>
                            {index !== 0 && <Clock className="h-3 w-3 text-orange-500" />}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Feedback Content */}
                    <div className="flex-1 bg-white border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <ChevronLeft className="h-4 w-4 text-gray-400" />
                        <h3 className="text-lg font-semibold text-gray-800">Analytical Skills</h3>
                        <Badge className="bg-green-100 text-green-700">Good Job!</Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        You are doing a great job reflecting your analytical skills!
                      </p>
                      
                      <div className="bg-gray-50 border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 mb-6">
                        <span className="text-sm font-medium text-gray-700">What are Analytical Skills?</span>
                        <Plus className="h-4 w-4 text-gray-500" />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">Experiences you can consider</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">Application Framework</span>
                          <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">Server Design</span>
                          <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">Product Control</span>
                          <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">Product Strategies</span>
                          <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">Web Application</span>
                          <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">Wireframing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right 50% - Resume Preview */}
              <div className="w-1/2 pl-3">
                <div className="bg-white border rounded-lg h-full p-6 overflow-y-auto">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">i</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Divyang Jitendrabhai Chavda</h2>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    Passionate tech enthusiast with a strong background in software development, website development, and 
                    AI-powered tools. Skilled in developing robust web platforms and solving real-world problems using open-source 
                    and cloud technologies. Always eager to learn, experiment, and stay ahead in the evolving tech landscape.
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4 text-blue-500" />
                      <span>chavdadivyang7373@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4 text-blue-500" />
                      <span>+91 9687131427</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span>Pune</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4 text-blue-500" />
                      <span>divyangchavda</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-blue-500 font-semibold text-sm mb-3 border-b border-gray-200 pb-1">WORK EXPERIENCE</h3>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">Sumago Infotech Pvt. Ltd.</h4>
                          <p className="text-gray-700">Software Engineer Trainee</p>
                        </div>
                        <span className="text-gray-600 text-sm">Sep,2024 - March,2025</span>
                      </div>
                      
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Focused on full-stack development using the MERN stack, including frontend interfaces with React.js and backend services with Node.js and Express.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Gained hands-on experience in designing RESTful APIs, integrating MongoDB databases, and deploying applications on cloud platforms.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Implemented features like user authentication, role-based access, and responsive UI components aligned with modern development standards.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span><span className="bg-orange-100 px-1">Followed</span> Agile methodologies for planning and task management, ensuring consistent progress and code quality throughout the internship.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-blue-500 font-semibold text-sm mb-3 border-b border-gray-200 pb-1">EDUCATION</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">Sri Balaji University, Pune.</h4>
                          <p className="text-gray-700 text-sm">Master of Computer Application(MCA) – 8.29 CGPA</p>
                        </div>
                        <span className="text-gray-600 text-sm">July,2023 - May,2025</span>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">Bhagwan Mahavir University, Surat.</h4>
                          <p className="text-gray-700 text-sm">Bachelor of Computer Application(BCA) - 8.08 CGPA</p>
                        </div>
                        <span className="text-gray-600 text-sm">August,2020 - June 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bullet">
            <Card className="p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">Bullet Level Feedback</h3>
              <p className="text-muted-foreground">Individual bullet point analysis coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DetailedFeedback;