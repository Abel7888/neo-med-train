import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { 
  Code, Database, Brain, Shield, Zap, Calendar, 
  DollarSign, TrendingUp, Plug, Settings, CheckCircle 
} from 'lucide-react';

const Technology = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-vr-teal via-vr-purple to-vr-blue bg-clip-text text-transparent">
              Built for the Future of Healthcare
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade VR training platform designed for scalability, security, and seamless integration 
              with your existing healthcare systems.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-purple to-neon-accent bg-clip-text text-transparent">
              MVP Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, scalable architecture built with industry-leading technologies for maximum performance and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "VR/AR Frontend",
                technologies: ["Unity Engine", "Meta Quest SDK", "HTC Vive SDK", "WebXR"],
                gradient: "from-vr-teal to-vr-blue"
              },
              {
                icon: Database,
                title: "Backend & Data",
                technologies: ["Node.js APIs", "Python ML", "PostgreSQL", "MongoDB"],
                gradient: "from-vr-purple to-vr-teal"
              },
              {
                icon: Brain,
                title: "AI/ML Layer",
                technologies: ["Skill Assessment", "NLP Processing", "Performance Analytics", "Adaptive Learning"],
                gradient: "from-vr-blue to-neon-accent"
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                technologies: ["HIPAA Ready", "Role-based Access", "End-to-end Encryption", "Audit Logging"],
                gradient: "from-neon-accent to-vr-purple"
              }
            ].map((stack, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow-teal transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${stack.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse`}>
                  <stack.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{stack.title}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-vr-teal rounded-full" />
                      <span className="text-sm text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-teal to-vr-purple bg-clip-text text-transparent">
              Development Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">20-25 weeks to MVP delivery</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Research & Planning",
                  duration: "4-5 weeks",
                  tasks: ["Market Analysis", "Technical Architecture", "UI/UX Design", "Stakeholder Interviews"],
                  color: "vr-teal"
                },
                {
                  phase: "Phase 2", 
                  title: "Core Development",
                  duration: "8-10 weeks",
                  tasks: ["VR Framework Setup", "Basic Simulations", "Backend APIs", "Database Design"],
                  color: "vr-purple"
                },
                {
                  phase: "Phase 3",
                  title: "Advanced Features",
                  duration: "6-8 weeks", 
                  tasks: ["AI Integration", "Multi-user Support", "Analytics Dashboard", "Performance Optimization"],
                  color: "vr-blue"
                },
                {
                  phase: "Phase 4",
                  title: "Integration & Launch",
                  duration: "2-3 weeks",
                  tasks: ["Hospital Integration", "Security Audit", "Staff Training", "Go-Live Support"],
                  color: "neon-accent"
                }
              ].map((phase, index) => (
                <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow-purple transition-all duration-300 relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-${phase.color}`} />
                  <div className="mb-4">
                    <div className={`text-sm font-medium text-${phase.color} mb-1`}>{phase.phase}</div>
                    <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                    <div className="text-sm text-muted-foreground">{phase.duration}</div>
                  </div>
                  <div className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`w-3 h-3 text-${phase.color}`} />
                        <span className="text-sm text-muted-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost & ROI */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-purple to-neon-accent bg-clip-text text-transparent">
                Investment & Returns
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Strategic investment in VR training technology delivers exponential returns through reduced costs, 
                improved outcomes, and accelerated staff development.
              </p>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-card border border-vr-teal/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vr-teal/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-vr-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">MVP Build Cost</h3>
                      <p className="text-2xl font-bold text-vr-teal">~$60K</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-card border border-vr-purple/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vr-purple/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-vr-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Annual Savings</h3>
                      <p className="text-2xl font-bold text-vr-purple">$500K - $2M+</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">ROI Breakdown</h3>
              {[
                { metric: "Reduced Equipment Costs", saving: "70%", description: "Less dependency on expensive mannequins and physical labs" },
                { metric: "Faster Onboarding", saving: "60%", description: "Accelerated training reduces time-to-competency" },
                { metric: "Standardized Training", saving: "45%", description: "Consistent quality across all training programs" },
                { metric: "Scalable Learning", saving: "80%", description: "Train unlimited staff without resource constraints" }
              ].map((item, index) => (
                <Card key={index} className="p-4 bg-gradient-card hover:shadow-glow-teal transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{item.metric}</h4>
                    <span className="text-lg font-bold text-neon-accent">{item.saving}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-teal to-vr-blue bg-clip-text text-transparent">
              Seamless Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built to work with your existing systems. No disruption to current workflows, 
              enhanced capabilities across your entire training infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-card hover:shadow-glow-purple transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-vr-teal to-vr-blue rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">LMS Integration</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Seamlessly connects with existing Learning Management Systems for unified training experiences.
              </p>
              <div className="space-y-3">
                {["Moodle", "Cornerstone OnDemand", "Docebo", "Canvas"].map((lms, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Plug className="w-4 h-4 text-vr-teal" />
                    <span className="text-foreground">{lms}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-card hover:shadow-glow-purple transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-vr-purple to-neon-accent rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">HR Systems</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Integrates with HR platforms to streamline onboarding and track professional development.
              </p>
              <div className="space-y-3">
                {["Workday", "SAP SuccessFactors", "BambooHR", "ADP Workforce"].map((hr, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Plug className="w-4 h-4 text-vr-purple" />
                    <span className="text-foreground">{hr}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-dark/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Partner with Us to Build the Future
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Join us in revolutionizing healthcare training. Let's create a VR solution that transforms 
            how your organization develops clinical skills and prepares healthcare professionals.
          </p>
          
          <Button variant="hero" size="lg" className="bg-white text-tech-dark hover:bg-white/90 hover:shadow-glow-neon">
            Let's Talk
            <Calendar className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Technology;