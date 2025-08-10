import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  FileText, 
  Users, 
  Target, 
  CheckCircle,
  AlertTriangle,
  XCircle,
  Send
} from "lucide-react";
import Header from "@/components/dashboard/Header";

const DetailedFeedback = () => {
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
            <Card className="p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">System Feedback</h3>
              <p className="text-muted-foreground">Detailed system analysis coming soon...</p>
            </Card>
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