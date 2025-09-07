import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { 
  Code, Database, Brain, Shield, Zap, Calendar, 
  DollarSign, TrendingUp, Plug, Settings, CheckCircle,
  Monitor, Layers, Cloud, Lock, Workflow, GitBranch
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
              Technical Architecture
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade system architecture designed for scalability, security, and seamless integration. 
              Built with industry-leading technologies for maximum performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* System Architecture Diagram */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-purple to-neon-accent bg-clip-text text-transparent">
              System Architecture Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-layered architecture ensuring scalability, security, and seamless user experience across all platforms.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Monitor,
                  title: "Frontend Layer",
                  subtitle: "VR/AR Experience",
                  technologies: ["Unity Engine", "Unreal Engine", "Meta Quest SDK", "HTC Vive SDK", "VRTK/OpenXR"],
                  gradient: "from-vr-teal to-vr-blue",
                  description: "Cross-device VR interactions and immersive training simulations"
                },
                {
                  icon: Database,
                  title: "Backend Layer", 
                  subtitle: "Data & Management",
                  technologies: ["Node.js APIs", "Python FastAPI", "PostgreSQL", "MongoDB", "AWS/Azure/GCP"],
                  gradient: "from-vr-purple to-vr-teal",
                  description: "Scalable APIs with structured and session data management"
                },
                {
                  icon: Brain,
                  title: "AI/ML Layer",
                  subtitle: "Intelligence Engine",
                  technologies: ["TensorFlow", "PyTorch", "Skill Assessment", "NLP Processing", "Performance Analytics"],
                  gradient: "from-vr-blue to-neon-accent",
                  description: "AI-powered skill assessment and personalized learning"
                },
                {
                  icon: Shield,
                  title: "Security Layer",
                  subtitle: "Compliance & Protection",
                  technologies: ["HIPAA Ready", "OAuth2.0/SAML", "TLS/SSL", "AES-256", "RBAC"],
                  gradient: "from-neon-accent to-vr-purple",
                  description: "Enterprise-grade security and healthcare compliance"
                }
              ].map((layer, index) => (
                <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow-teal transition-all duration-300 hover:-translate-y-1 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${layer.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse`}>
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-foreground">{layer.title}</h3>
                    <p className="text-sm text-vr-teal font-medium">{layer.subtitle}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{layer.description}</p>
                  <div className="space-y-2">
                    {layer.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-vr-teal rounded-full" />
                        <span className="text-xs text-muted-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
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
              Enterprise Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamless integration with existing hospital systems and learning management platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-card hover:shadow-glow-purple transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-vr-teal to-vr-blue rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Hospital LMS Integration</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Connect seamlessly with existing Learning Management Systems for unified training experiences.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Moodle", "Docebo", "Cornerstone OnDemand", "Canvas LMS"].map((lms, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-background/30 rounded-lg">
                    <Plug className="w-4 h-4 text-vr-teal" />
                    <span className="text-sm font-medium">{lms}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-card hover:shadow-glow-purple transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-vr-purple to-neon-accent rounded-lg flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">HR Systems Integration</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Integrate with HR platforms to streamline onboarding and track professional development.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Workday", "SAP SuccessFactors", "BambooHR", "ADP Workforce"].map((hr, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-background/30 rounded-lg">
                    <Plug className="w-4 h-4 text-vr-purple" />
                    <span className="text-sm font-medium">{hr}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-teal to-vr-purple bg-clip-text text-transparent">
              25-Week Development Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">From research to pilot deployment - structured development phases</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: "Phase 1",
                  title: "Research & Design",
                  duration: "4-5 weeks",
                  tasks: ["Market Analysis", "Technical Architecture", "UI/UX Design", "Stakeholder Interviews", "Requirement Gathering"],
                  color: "vr-teal",
                  icon: GitBranch
                },
                {
                  phase: "Phase 2", 
                  title: "Prototype Development",
                  duration: "8-10 weeks",
                  tasks: ["VR Framework Setup", "Core Simulations", "Backend APIs", "Database Design", "Basic UI Implementation"],
                  color: "vr-purple",
                  icon: Code
                },
                {
                  phase: "Phase 3",
                  title: "Advanced Features",
                  duration: "6-8 weeks", 
                  tasks: ["AI Integration", "Multi-user Support", "Analytics Dashboard", "Performance Optimization", "Security Implementation"],
                  color: "vr-blue",
                  icon: Brain
                },
                {
                  phase: "Phase 4",
                  title: "Pilot Deployment",
                  duration: "2-3 weeks",
                  tasks: ["Hospital Integration", "Security Audit", "Staff Training", "Go-Live Support", "Performance Monitoring"],
                  color: "neon-accent",
                  icon: Cloud
                }
              ].map((phase, index) => (
                <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow-purple transition-all duration-300 relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-${phase.color}`} />
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 bg-${phase.color}/20 rounded-lg flex items-center justify-center`}>
                        <phase.icon className={`w-5 h-5 text-${phase.color}`} />
                      </div>
                      <div>
                        <div className={`text-sm font-medium text-${phase.color} mb-1`}>{phase.phase}</div>
                        <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{phase.duration}</div>
                  </div>
                  <div className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`w-3 h-3 text-${phase.color}`} />
                        <span className="text-xs text-muted-foreground">{task}</span>
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-purple to-neon-accent bg-clip-text text-transparent">
                Investment & ROI Analysis
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Strategic investment in VR training technology delivers exponential returns through reduced costs, 
                improved outcomes, and accelerated staff development.
              </p>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-card border border-vr-teal/20 hover:shadow-glow-teal transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vr-teal/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-vr-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">MVP Build Cost</h3>
                      <p className="text-3xl font-bold text-vr-teal">~$60K</p>
                      <p className="text-sm text-muted-foreground">25-week development cycle</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-card border border-vr-purple/20 hover:shadow-glow-purple transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vr-purple/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-vr-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Annual Savings</h3>
                      <p className="text-3xl font-bold text-vr-purple">$500K - $2M+</p>
                      <p className="text-sm text-muted-foreground">Depending on hospital size</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">ROI Breakdown & Benefits</h3>
              {[
                { 
                  metric: "Reduced Equipment Costs", 
                  saving: "70%", 
                  description: "Less dependency on expensive mannequins and physical simulation labs",
                  icon: Monitor
                },
                { 
                  metric: "Faster Onboarding", 
                  saving: "60%", 
                  description: "Accelerated training programs reduce time-to-competency significantly",
                  icon: Zap
                },
                { 
                  metric: "Standardized Training", 
                  saving: "45%", 
                  description: "Consistent quality and outcomes across all training programs",
                  icon: CheckCircle
                },
                { 
                  metric: "Scalable Learning", 
                  saving: "80%", 
                  description: "Train unlimited staff without resource or space constraints",
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <Card key={index} className="p-4 bg-gradient-card hover:shadow-glow-teal transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-neon-accent/20 rounded-lg flex items-center justify-center group-hover:bg-neon-accent/30 transition-colors">
                        <item.icon className="w-4 h-4 text-neon-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground">{item.metric}</h4>
                    </div>
                    <span className="text-xl font-bold text-neon-accent">{item.saving}</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-11">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-vr-teal/20 via-vr-purple/20 to-vr-blue/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Partner with Us to Build the Future of Clinical Training
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Join us in revolutionizing healthcare training with cutting-edge VR technology. 
            Let's create a comprehensive solution that transforms how your organization develops clinical skills.
          </p>
          
          <Button variant="hero" size="lg" className="bg-white text-tech-dark hover:bg-white/90 hover:shadow-glow-neon">
            <Calendar className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Technology;