import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Monitor, Users, BarChart3, Play, Eye, Clock, Target, Zap, TrendingUp, Award, Activity, CheckCircle, Settings, User } from 'lucide-react';

const Simulator = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-vr-teal via-vr-purple to-vr-blue bg-clip-text text-transparent">
              SaaS Dashboard Mockup
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience what the delivered dashboard will look like for hospitals and training leaders. 
              Real-time tracking, AI feedback, and seamless LMS integration.
            </p>
          </div>
          
          {/* Header Navigation Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-card rounded-lg p-1 border border-vr-teal/20">
              <div className="flex space-x-1">
                <Button variant="secondary" size="sm" className="bg-vr-teal text-white">
                  <User className="w-4 h-4 mr-2" />
                  Trainee View
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Instructor/Admin
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Mockup */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            
            {/* Simulation Library - Left Panel */}
            <Card className="lg:col-span-1 p-6 bg-gradient-card border border-vr-teal/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-vr-teal/20 rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-vr-teal" />
                </div>
                <h3 className="text-lg font-semibold">Simulation Library</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: "IV Insertion", status: "completed", progress: 100 },
                  { name: "Ventilator Setup", status: "in-progress", progress: 60 },
                  { name: "Code Blue Response", status: "available", progress: 0 },
                  { name: "Central Line Placement", status: "locked", progress: 0 }
                ].map((module, index) => (
                  <div key={index} className="p-3 bg-background/50 rounded-lg border border-vr-teal/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{module.name}</span>
                      {module.status === 'completed' && <CheckCircle className="w-4 h-4 text-vr-teal" />}
                      {module.status === 'in-progress' && <Play className="w-4 h-4 text-vr-purple" />}
                    </div>
                    <div className="w-full bg-background/30 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          module.status === 'completed' ? 'bg-vr-teal' : 
                          module.status === 'in-progress' ? 'bg-vr-purple' : 'bg-muted'
                        }`}
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-3 bg-vr-teal/10 rounded-lg border border-vr-teal/20">
                <div className="text-xs text-vr-teal font-medium mb-1">💡 Real-time skill tracking</div>
                <div className="text-xs text-muted-foreground">Progress automatically syncs with hospital LMS</div>
              </div>
            </Card>

            {/* Training Progress - Main Panel */}
            <Card className="lg:col-span-2 p-6 bg-gradient-card">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 mr-3 text-vr-purple" />
                Training Progress Dashboard
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="p-4 bg-background/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Skill Modules Completed</span>
                      <span className="text-lg font-bold text-vr-teal">3/8</span>
                    </div>
                    <div className="w-full bg-background/50 rounded-full h-3">
                      <div className="h-3 bg-gradient-to-r from-vr-teal to-vr-purple rounded-full" style={{ width: '37.5%' }} />
                    </div>
                  </div>
                  
                  <div className="p-4 bg-background/30 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="w-4 h-4 text-vr-blue" />
                      <span className="text-sm text-muted-foreground">Time in Simulation</span>
                    </div>
                    <div className="text-2xl font-bold text-vr-blue">24.5 hrs</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-background/30 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <Target className="w-4 h-4 text-neon-accent" />
                      <span className="text-sm text-muted-foreground">Error Frequency</span>
                    </div>
                    <div className="text-2xl font-bold text-neon-accent">8.2%</div>
                    <div className="text-xs text-muted-foreground">IV insertion errors</div>
                  </div>
                  
                  <div className="p-4 bg-background/30 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <Award className="w-4 h-4 text-vr-purple" />
                      <span className="text-sm text-muted-foreground">Competency Scores</span>
                    </div>
                    <div className="text-2xl font-bold text-vr-purple">92%</div>
                    <div className="text-xs text-muted-foreground">AI-graded average</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-vr-purple/10 rounded-lg border border-vr-purple/20">
                <div className="text-xs text-vr-purple font-medium mb-1">🤖 AI feedback ensures standardization</div>
                <div className="text-xs text-muted-foreground">Intelligent performance analysis with personalized recommendations</div>
              </div>
            </Card>

            {/* Live Session Monitor - Right Panel */}
            <Card className="lg:col-span-1 p-6 bg-gradient-card border border-vr-blue/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-vr-blue/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-vr-blue" />
                </div>
                <h3 className="text-lg font-semibold">Live Monitor</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Active Sessions</span>
                    <div className="w-2 h-2 bg-vr-teal rounded-full animate-pulse" />
                  </div>
                  <div className="text-lg font-bold text-vr-teal">3</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Current Trainees</div>
                  {[
                    { name: "Sarah Chen", module: "IV Insertion", progress: "Step 3/5" },
                    { name: "Mike Rodriguez", module: "Code Blue", progress: "Step 1/7" },
                    { name: "Emma Wilson", module: "Ventilator", progress: "Step 4/6" }
                  ].map((trainee, index) => (
                    <div key={index} className="p-2 bg-background/30 rounded text-xs">
                      <div className="font-medium">{trainee.name}</div>
                      <div className="text-muted-foreground">{trainee.module} - {trainee.progress}</div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Playback
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Analytics Panel - Bottom */}
          <Card className="p-6 bg-gradient-card">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Activity className="w-5 h-5 mr-3 text-neon-accent" />
              Analytics Dashboard
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-background/30 rounded-lg">
                <h4 className="font-semibold mb-3 text-neon-accent">Skill Mastery Heatmap</h4>
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-4 rounded ${
                        i < 8 ? 'bg-vr-teal' : i < 12 ? 'bg-vr-purple' : 'bg-background/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-2">Color-coded proficiency levels</div>
              </div>
              
              <div className="p-4 bg-background/30 rounded-lg">
                <h4 className="font-semibold mb-3 text-vr-blue">Time to Competency</h4>
                <div className="text-3xl font-bold text-vr-blue mb-2">12.3 hrs</div>
                <div className="text-sm text-muted-foreground">Average across all modules</div>
                <div className="text-xs text-vr-teal mt-1">↓ 45% vs traditional training</div>
              </div>
              
              <div className="p-4 bg-background/30 rounded-lg">
                <h4 className="font-semibold mb-3 text-vr-purple">Cost Savings</h4>
                <div className="text-3xl font-bold text-vr-purple mb-2">$847K</div>
                <div className="text-sm text-muted-foreground">Annual savings achieved</div>
                <div className="text-xs text-neon-accent mt-1">vs traditional training methods</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-vr-purple via-neon-accent to-vr-teal bg-clip-text text-transparent">
              Ready to See This in Action?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Experience the power of this dashboard firsthand. See how our SaaS platform can transform 
              your healthcare training programs with real-time insights and AI-powered feedback.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg">
                <Zap className="w-5 h-5 mr-2" />
                Request a Demo
              </Button>
              <Button variant="futuristic" size="lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start a Pilot
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Simulator;