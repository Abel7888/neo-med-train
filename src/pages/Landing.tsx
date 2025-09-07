import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, TrendingUp, Clock, Target, Shield } from 'lucide-react';
import vrNurseHero from '@/assets/vr-nurse-hero.jpg';
import trainingComparison from '@/assets/training-comparison.jpg';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        <div className="absolute inset-0">
          <img 
            src={vrNurseHero} 
            alt="VR Healthcare Training" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-vr-teal via-vr-purple to-vr-blue bg-clip-text text-transparent leading-tight">
              Train Smarter. Faster. In Virtual Reality.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A next-generation VR simulator for clinical skills — repeatable, scalable, and cost-effective.
            </p>
            
            <div className="mb-8 p-6 bg-gradient-card rounded-lg border border-vr-teal/20">
              <p className="text-lg text-foreground/90">
                Hospitals spend millions each year training staff with mannequins, labs, and instructors. 
                But physical training is expensive, time-limited, and hard to scale. With our VR Staff 
                Training Simulator, healthcare workers can practice life-saving skills endlessly — at a fraction of the cost.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/simulator">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  See the Simulator in Action
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="futuristic" size="lg" className="w-full sm:w-auto">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-vr-teal to-vr-purple bg-clip-text text-transparent">
              Training is Broken — and Costly
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={trainingComparison} 
                alt="Traditional vs VR Training Comparison" 
                className="w-full rounded-lg shadow-card"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <Card className="p-6 bg-gradient-card border-red-500/30 hover:border-red-500/50 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">High cost of training spaces & equipment</h3>
                    <p className="text-muted-foreground">Expensive mannequins, dedicated lab spaces, and specialized equipment drain budgets.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card border-red-500/30 hover:border-red-500/50 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Limited access to trainers & mannequins</h3>
                    <p className="text-muted-foreground">Scheduling conflicts and resource bottlenecks slow down training programs.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card border-red-500/30 hover:border-red-500/50 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inconsistent learning across staff</h3>
                    <p className="text-muted-foreground">Different instructors, varying quality, and no standardized measurement.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-vr-purple to-neon-accent bg-clip-text text-transparent">
              Virtual Reality Training That Feels Real
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With our platform, trainees can practice procedures like IV insertion or code blue responses, 
              repeat simulations until mastery, and learn in immersive, realistic hospital environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Practice Procedures",
                description: "IV insertion, code blue responses, ventilator use, and more"
              },
              {
                icon: Target,
                title: "Repeat Until Mastery",
                description: "Unlimited practice sessions without equipment wear or scheduling conflicts"
              },
              {
                icon: Shield,
                title: "Realistic Environments",
                description: "Immersive hospital settings that prepare staff for real-world scenarios"
              },
              {
                icon: TrendingUp,
                title: "AI-Driven Feedback",
                description: "Instant performance analysis and personalized improvement recommendations"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover:shadow-glow-teal transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-gradient-button rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "For Hospitals",
                subtitle: "Cut training costs, scale onboarding, reduce staff shortages.",
                icon: Shield,
                gradient: "from-vr-teal to-vr-blue"
              },
              {
                title: "For Educators", 
                subtitle: "Standardize skill teaching and track trainee performance.",
                icon: Users,
                gradient: "from-vr-purple to-vr-teal"
              },
              {
                title: "For Staff",
                subtitle: "Upskill faster, build confidence, and learn without pressure.",
                icon: TrendingUp,
                gradient: "from-vr-blue to-neon-accent"
              }
            ].map((card, index) => (
              <Card key={index} className="p-8 bg-gradient-card hover:shadow-glow-purple transition-all duration-500 hover:scale-105 group cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:animate-float`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{card.title}</h3>
                <p className="text-lg text-muted-foreground">{card.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-neon-accent via-vr-teal to-vr-purple bg-clip-text text-transparent">
              The Future of Healthcare Training is Virtual
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              From hospitals to medical schools, the shift is happening. Simulation-based training is proven to 
              improve skill retention, cut costs, and reduce medical errors. VR makes it affordable, repeatable, and engaging.
            </p>
            
            <div className="bg-gradient-card p-8 rounded-2xl border border-vr-teal/20 mb-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-vr-teal mb-2">85%</div>
                  <p className="text-muted-foreground">Reduction in training costs</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-vr-purple mb-2">3x</div>
                  <p className="text-muted-foreground">Faster skill acquisition</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-accent mb-2">92%</div>
                  <p className="text-muted-foreground">Staff confidence improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-dark/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Train Smarter?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join the healthcare revolution. Transform your training programs with immersive VR technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/simulator">
              <Button variant="hero" size="lg" className="bg-white text-tech-dark hover:bg-white/90 hover:shadow-glow-neon">
                See the Simulator
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="futuristic" size="lg" className="border-white/30 text-white hover:border-white hover:bg-white/10">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;