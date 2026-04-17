import { Link } from "react-router";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Clock
} from "lucide-react";
import { Button } from "./ui/button";
import { LinkButton } from "./ui/link-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

// Parallax Section Component
function ParallaxSection({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Staggered Item Component
function StaggeredItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.6]);

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1598981457915-aea220950616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwZW5naW5lZXJpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzcyNDY4NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Students studying in engineering classroom"
    },
    {
      src: "https://images.unsplash.com/photo-1649920442906-3c8ef428fb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBjb2FjaGluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MzA4NzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Classroom coaching session"
    },
    {
      src: "https://images.unsplash.com/photo-1758270704262-ecc82b23dc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWN0dXJlJTIwaGFsbCUyMHRlYWNoaW5nfGVufDF8fHx8MTc3MzA4NzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Lecture hall teaching"
    },
    {
      src: "https://images.unsplash.com/photo-1758270705799-12efda48d4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHN0dWR5JTIwc2Vzc2lvbnxlbnwxfHx8fDE3NzMwODczNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Group study session"
    },
    {
      src: "https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3Mjk5NDc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Students learning in classroom"
    }
  ];

  // Auto-slide carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from IIT/NIT alumni with years of teaching experience"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Well-researched notes and practice materials for thorough preparation"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Hundreds of successful selections in top institutes every year"
    },
    {
      icon: TrendingUp,
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual focus for every student"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Multiple batch options to suit working professionals and students"
    },
    {
      icon: CheckCircle,
      title: "Regular Assessments",
      description: "Weekly tests and mock exams to track your progress"
    }
  ];

  const stats = [
    { value: "15+", label: "Years of Teaching Experience" },
    { value: "5000+", label: "Students Trained" },
    { value: "15+", label: "Expert Faculty" }
  ];

  const benefits = [
    "Comprehensive coverage of all topics",
    "Regular doubt clearing sessions",
    "Previous year question papers",
    "Online test series included",
    "Study material in digital format",
    "Career guidance and counseling"
  ];

  return (
    <div>
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative overflow-hidden py-20 text-white lg:py-28" 
        style={{ background: 'linear-gradient(to bottom right, #F7D514, #F7D514)', position: 'relative' }}
      >
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
                Excel in GATE & IIT-JEE with Expert Guidance
              </h1>
              <p className="mb-8 text-lg opacity-90">
                Join thousands of successful students who achieved their dreams with our 
                comprehensive coaching programs and experienced faculty.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <LinkButton to="/courses?openDropdown=true" size="lg" style={{ backgroundColor: '#2E66B1' }}>
                  Explore Courses
                </LinkButton>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ImageWithFallback
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                className="rounded-lg shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Animation */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            {stats.map((stat, index) => (
              <StaggeredItem key={index} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div 
                    className="mb-2 text-3xl md:text-4xl" 
                    style={{ color: '#2E66B1' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </StaggeredItem>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Stagger Animation */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ParallaxSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl text-gray-900 md:text-4xl">
              Why Choose Auspen Academy?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We provide everything you need to excel in your GATE and IIT-JEE examinations
            </p>
          </ParallaxSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <StaggeredItem key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(46, 102, 177, 0.1)' }}>
                        <feature.icon className="h-6 w-6" style={{ color: '#2E66B1' }} />
                      </div>
                      <h3 className="mb-2 text-lg text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggeredItem>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section with Parallax Image */}
      <section className="py-20" style={{ backgroundColor: 'rgba(46, 102, 177, 0.05)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <ParallaxSection>
              <h2 className="mb-6 text-3xl text-gray-900 md:text-4xl">
                Complete Preparation Package
              </h2>
              <p className="mb-8 text-gray-600">
                Our comprehensive program covers everything you need to crack GATE and IIT-JEE with flying colors.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <LinkButton to="/courses" size="lg">
                  View All Courses
                </LinkButton>
              </div>
            </ParallaxSection>
            <ParallaxSection>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlZHVjYXRpb24lMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzcyNDY4NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Study materials"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* CTA Section with Scale Animation */}
      <ParallaxSection 
        className="py-16 text-white" 
        style={{ background: 'linear-gradient(to right, #2E66B1, #1e4a7a)' }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2 
            className="mb-4 text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Your Success Journey?
          </motion.h2>
          <motion.p 
            className="mb-8 text-lg opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our next batch and get access to expert guidance, study materials, and a proven methodology
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <LinkButton to="/contact" size="lg" className="bg-white hover:bg-gray-100" style={{ color: '#2E66B1' }}>
              Enroll Now
            </LinkButton>
          </motion.div>
        </div>
      </ParallaxSection>
    </div>
  );
}