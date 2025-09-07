import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Monitor, Users, BarChart3, Repeat, Play, Eye, Settings, Zap } from 'lucide-react';
import vrTeamTraining from '@/assets/vr-team-training.jpg';

const Simulator = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-vr-teal via-vr-purple to-vr-blue bg-clip-text text-transparent">
              Experience the VR Simulator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immersive training simulations that prepare healthcare professionals for real-world scenarios. 
              Every module is repeatable, trackable, and customizable.
            </p>
          </div>
          
          {/* Main Simulator Showcase */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-vr-teal/20">
              <img 
                src={vrTeamTraining} 
                alt="VR Team Training Simulation" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/80 via-transparent to-transparent" />
              
              {/* Floating UI Elements */}
              <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-vr-teal/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-vr-teal rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live Training Session</span>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-vr-purple/30">
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-vr-purple" />
                  <span className="text-sm font-medium">4 Active Trainees</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-neon-accent/30">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-4 h-4 text-neon-accent" />
                  <span className="text-sm font-medium">92% Accuracy Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Simulation Library */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Simulation Library</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive training modules covering essential clinical skills and emergency procedures.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "IV Insertion Training", level: "Beginner to Advanced", time: "15-30 min" },
                  { title: "Code Blue Response", level: "Intermediate", time: "20-45 min" },
                  { title: "Ventilator Setup & Management", level: "Advanced", time: "30-60 min" },
                  { title: "Patient Assessment", level: "All Levels", time: "10-25 min" },
                  { title: "Emergency Procedures", level: "Advanced", time: "25-50 min" }
                ].map((module, index) => (
                  <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow-teal transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-vr-teal/20 rounded-lg flex items-center justify-center group-hover:bg-vr-teal/30 transition-colors">
                          <Play className="w-5 h-5 text-vr-teal" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{module.title}</h3>
                          <p className="text-sm text-muted-foreground">{module.level} • {module.time}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Start
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Performance Tracking */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-vr-purple to-vr-blue rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Performance Tracking</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  Real-time analytics and detailed performance insights to optimize learning outcomes.
                </p>
              </div>

              {/* Sample Dashboard */}
              <Card className="p-6 bg-gradient-card border border-vr-purple/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">Training Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-vr-teal rounded-full" />
                      <div className="w-2 h-2 bg-vr-purple rounded-full" />
                      <div className="w-2 h-2 bg-neon-accent rounded-full" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-vr-teal">94%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-vr-purple">12</div>
                      <div className="text-sm text-muted-foreground">Sessions Completed</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-neon-accent">8.2</div>
                      <div className="text-sm text-muted-foreground">Avg. Performance</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-vr-blue">3.2h</div>
                      <div className="text-sm text-muted-foreground">Total Training</div>
                    </div>
                  </div>
                  
                  <div className="h-32 bg-background/30 rounded-lg flex items-center justify-center">
                    <div className="text-muted-foreground">Performance Chart Visualization</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-teal to-vr-purple bg-clip-text text-transparent">
              Advanced Training Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Instructor View",
                description: "Real-time monitoring and session playback for comprehensive training oversight",
                color: "vr-teal"
              },
              {
                icon: Users,
                title: "Multi-User Mode",
                description: "Teams can train together in shared VR environments for collaborative learning",
                color: "vr-purple"
              },
              {
                icon: Repeat,
                title: "Infinite Repetition",
                description: "Practice scenarios unlimited times without equipment wear or scheduling conflicts",
                color: "neon-accent"
              },
              {
                icon: Settings,
                title: "Customizable Scenarios",
                description: "Modify difficulty, patient conditions, and environmental factors for tailored training",
                color: "vr-blue"
              },
              {
                icon: Zap,
                title: "AI Feedback",
                description: "Intelligent performance analysis with personalized improvement recommendations",
                color: "vr-teal"
              },
              {
                icon: BarChart3,
                title: "Progress Tracking",
                description: "Detailed analytics on skill development, completion rates, and learning outcomes",
                color: "vr-purple"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow-teal transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-12 h-12 bg-${feature.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-purple via-neon-accent to-vr-teal bg-clip-text text-transparent">
              Ready to Transform Your Training?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Experience the power of VR training firsthand. See how our simulator can revolutionize your healthcare education programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg">
                Request a Live Demo
              </Button>
              <Button variant="futuristic" size="lg">
                Start a Pilot Program
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Simulator;