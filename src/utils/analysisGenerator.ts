// Utility to generate random analysis data
export const generateRandomAnalysis = () => {
  const scores = [45, 52, 61, 68, 73, 79, 84, 88, 91];
  const names = [
    "Sarah Johnson Resume",
    "Michael Chen Resume", 
    "Alex Rodriguez Resume",
    "Emily Davis Resume",
    "David Thompson Resume",
    "Jessica Wilson Resume"
  ];
  
  const score = scores[Math.floor(Math.random() * scores.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  
  // Generate metrics based on score
  const impactScore = Math.floor(score * 0.4 + Math.random() * 5);
  const presentationScore = Math.floor(score * 0.3 + Math.random() * 5);
  const competenciesScore = Math.floor(score * 0.3 + Math.random() * 5);
  
  const improvementSteps = [
    {
      title: "Showcase more competencies",
      points: `+${Math.floor(Math.random() * 10 + 8)}`,
      description: "Include more experiences as per your target function to showcase soft skills."
    },
    {
      title: "Remove overused and filler words", 
      points: `+${Math.floor(Math.random() * 8 + 5)}`,
      description: "Avoid repetition and the use of filler words in your resume."
    },
    {
      title: "Improve bullet structure",
      points: `+${Math.floor(Math.random() * 7 + 4)}`,
      description: "Begin resume bullets with action verbs and quantify your work."
    }
  ];
  
  return {
    score,
    name,
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
    improvementSteps
  };
};