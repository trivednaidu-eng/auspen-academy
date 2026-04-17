import { Award, BookOpen, Users, Target, TrendingUp, Clock, Heart } from "lucide-react";

export function AboutUs() {
  const facultyQualities = [
    {
      title: "IIT & Premier Institute Alumni",
      description: "All faculty members are graduates from IITs and other premier institutions with exceptional academic records and proven expertise",
      icon: Award
    },
    {
      title: "Subject Matter Experts",
      description: "Deep specialization in respective subjects with years of research, teaching experience, and continuous professional development",
      icon: BookOpen
    },
    {
      title: "Proven Track Record",
      description: "Consistent record of producing top rankers in GATE and IIT-JEE examinations year after year",
      icon: TrendingUp
    },
    {
      title: "Industry Experience",
      description: "Many faculty members bring real-world industry experience, providing practical insights beyond theoretical knowledge",
      icon: Users
    },
    {
      title: "Dedicated Mentors",
      description: "Not just teachers, but mentors who are personally invested in each student's success and academic growth",
      icon: Heart
    },
    {
      title: "Always Available",
      description: "Committed to student support with regular doubt-clearing sessions and personalized attention to address individual learning needs",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to bottom right, #F7D514, #F7D514)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl md:text-5xl">About Auspen Academy</h1>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Excellence in Education, Right from the Start
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl text-gray-900">Who We Are</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Auspen Academy is a premier coaching institute dedicated to preparing students for GATE and IIT-JEE examinations. Located in the heart of Kakinada, we have established ourselves as a trusted name in competitive exam preparation.
                </p>
                <p>
                  Our mission is simple yet powerful: to provide world-class education that transforms aspiring engineers into successful professionals. We believe that every student has the potential to excel, and our role is to unlock that potential through expert guidance, comprehensive study materials, and unwavering support.
                </p>
                <p>
                  With a focus on conceptual clarity, problem-solving skills, and exam strategy, we have helped thousands of students achieve their dreams of securing top ranks and gaining admission to prestigious institutions.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg bg-white p-8 shadow-lg border-2" style={{ borderColor: '#2E66B1' }}>
                <h3 className="mb-6 text-2xl" style={{ color: '#2E66B1' }}>Our Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#F7D514' }} />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Excellence</h4>
                      <p className="text-sm text-gray-600">Committed to the highest standards of education and student success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#F7D514' }} />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Integrity</h4>
                      <p className="text-sm text-gray-600">Honest, transparent, and ethical in all our practices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#F7D514' }} />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Student-Centric</h4>
                      <p className="text-sm text-gray-600">Every decision we make prioritizes student learning and growth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#F7D514' }} />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Innovation</h4>
                      <p className="text-sm text-gray-600">Continuously evolving our teaching methods and study materials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Quality Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl">World-Class Faculty</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Our faculty is our greatest strength - highly qualified educators who are passionate about teaching and committed to student success
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facultyQualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4">
                    <div 
                      className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg" 
                      style={{ backgroundColor: index % 2 === 0 ? 'rgba(46, 102, 177, 0.1)' : 'rgba(247, 213, 20, 0.2)' }}
                    >
                      <Icon className="h-7 w-7" style={{ color: index % 2 === 0 ? '#2E66B1' : '#F7D514' }} />
                    </div>
                    <h3 className="mb-2 text-lg font-medium">{quality.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{quality.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl">Our Faculty's Credentials</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Numbers that speak for our faculty's excellence and commitment
            </p>
          </div>

          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold" style={{ color: '#2E66B1' }}>100%</div>
              <p className="text-sm text-gray-600">Faculty from IITs & Premier Institutions</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold" style={{ color: '#2E66B1' }}>15+</div>
              <p className="text-sm text-gray-600">Years of Excellence in Education</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold" style={{ color: '#2E66B1' }}>5000+</div>
              <p className="text-sm text-gray-600">Students Mentored to Success</p>
            </div>
          
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl">Our Teaching Methodology</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              A systematic approach designed for maximum learning and retention
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(46, 102, 177, 0.1)', color: '#2E66B1' }}>
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-2 font-medium">Concept Building</h3>
              <p className="text-sm text-gray-600">
                Strong foundation through conceptual clarity and fundamentals
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(247, 213, 20, 0.2)', color: '#F7D514' }}>
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-2 font-medium">Problem Solving</h3>
              <p className="text-sm text-gray-600">
                Extensive practice with previous year questions and mock tests
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(46, 102, 177, 0.1)', color: '#2E66B1' }}>
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-2 font-medium">Doubt Clearing</h3>
              <p className="text-sm text-gray-600">
                Personal attention and dedicated doubt clearing sessions
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(247, 213, 20, 0.2)', color: '#F7D514' }}>
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="mb-2 font-medium">Regular Assessment</h3>
              <p className="text-sm text-gray-600">
                Continuous evaluation and personalized feedback for improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to right, #2E66B1, #1e4a7a)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl">Why Choose Auspen Academy?</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-3 text-xl">Comprehensive Curriculum</h3>
              <p className="text-sm opacity-90">
                Complete coverage of syllabus with emphasis on important topics and exam patterns
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-3 text-xl">Small Batch Sizes</h3>
              <p className="text-sm opacity-90">
                Limited students per batch ensuring personalized attention and better learning outcomes
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-3 text-xl">Proven Results</h3>
              <p className="text-sm opacity-90">
                Consistent track record of students securing top ranks and admissions to premier institutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}