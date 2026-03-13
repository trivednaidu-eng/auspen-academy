import { Link, useSearchParams } from "react-router";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Clock, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import { Button } from "./ui/button";
import { LinkButton } from "./ui/link-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Courses() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "gate"; // Default to GATE

  const gateCourses = [
    {
      id: "gate-engineering",
      title: "GATE Engineering Preparation",
      description: "Comprehensive GATE preparation for all engineering branches",
      duration: "Long Term",
      batchSize: "Max 100 Students",
      mode: ["Classroom", "Online", "Weekend"],
      highlights: [
        "Subject-wise expert faculty",
        "Complete coverage of GATE syllabus",
        "20+ full-length mock tests",
        "Concept building from basics",
        "Interview preparation guidance"
      ],
      popular: true
    },
    {
      id: "gate-crash-course",
      title: "GATE Crash Course",
      description: "Intensive revision course for last-minute GATE preparation",
      duration: "Short Term",
      batchSize: "Max 100 Students",
      mode: ["Online", "Classroom"],
      highlights: [
        "Quick revision of all topics",
        "Focus on important questions",
        "Time management techniques",
        "Test series with detailed solutions",
        "Exam strategy and tips"
      ],
      popular: true
    }
  ];

  const iitJeeCourses = [
    {
      id: "iit-jee-main",
      title: "IIT-JEE Main Preparation",
      description: "Complete preparation for IIT-JEE Main with focus on Physics, Chemistry, and Mathematics",
      duration: "Long Term",
      batchSize: "Max 100 Students",
      mode: ["Classroom", "Online"],
      highlights: [
        "Comprehensive coverage of NCERT syllabus",
        "Weekly tests and assessments",
        "Topic-wise practice questions",
        "Previous year papers discussion",
        "Regular doubt clearing sessions"
      ],
      popular: true
    },
    {
      id: "iit-jee-advanced",
      title: "IIT-JEE Advanced Preparation",
      description: "Advanced level preparation for IIT-JEE with intensive problem-solving approach",
      duration: "Long Term",
      batchSize: "Max 100 Students",
      mode: ["Classroom", "Online"],
      highlights: [
        "Advanced concepts and problem solving",
        "IIT professor guest lectures",
        "Mock tests as per IIT-JEE Advanced pattern",
        "Study material from IIT experts",
        "One-on-one mentorship sessions"
      ],
      popular: true
    },
    {
      id: "iit-jee-crash-course",
      title: "IIT-JEE Crash Course (Main & Advanced)",
      description: "Intensive revision course covering both IIT-JEE Main and Advanced",
      duration: "Short Term",
      batchSize: "Max 100 Students",
      mode: ["Classroom", "Online"],
      highlights: [
        "Quick revision of all topics",
        "Focus on important questions",
        "Time management techniques",
        "Test series with detailed solutions",
        "Exam strategy and tips"
      ],
      popular: true
    }
  ];

  const courses = category === "gate" ? gateCourses : iitJeeCourses;

  const branches = [
    "Computer Science & Engineering",
    "Electronics & Communication",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to bottom right, #F7D514, #F7D514)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl md:text-5xl">
              {category === "gate" ? "GATE Courses" : "IIT-JEE Courses"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              {category === "gate" 
                ? "Comprehensive GATE preparation programs for all engineering branches"
                : "Complete IIT-JEE preparation programs from Main to Advanced level"}
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <Card key={course.id} className={course.popular ? "border-2" : ""} style={course.popular ? { borderColor: '#2E66B1' } : {}}>
                {course.popular && (
                  <div className="px-4 py-2 text-center text-sm text-white" style={{ backgroundColor: '#2E66B1' }}>
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{course.batchSize}</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-sm text-gray-600">Mode of Teaching:</div>
                    <div className="flex flex-wrap gap-2">
                      {course.mode.map((mode) => (
                        <Badge key={mode} variant="secondary">{mode}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 text-sm text-gray-900">Course Highlights:</div>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <LinkButton to="/contact" className="w-full">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </LinkButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GATE Branches Section */}
      {category === "gate" && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl text-gray-900">GATE Preparation Available For</h2>
              <p className="text-gray-600">
                We offer specialized coaching for all major engineering branches
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {branches.map((branch, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center gap-3 p-4">
                    <BookOpen className="h-5 w-5 flex-shrink-0" style={{ color: '#2E66B1' }} />
                    <span className="text-sm text-gray-700">{branch}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl text-gray-900">What's Included in Every Course</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <BookOpen className="mb-2 h-8 w-8" style={{ color: '#2E66B1' }} />
                <CardTitle>Study Material</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Comprehensive notes, practice problems, and reference materials prepared by expert faculty
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="mb-2 h-8 w-8" style={{ color: '#2E66B1' }} />
                <CardTitle>Test Series</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Regular tests, mock exams, and detailed performance analysis to track your progress
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="mb-2 h-8 w-8" style={{ color: '#2E66B1' }} />
                <CardTitle>Doubt Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Dedicated doubt clearing sessions and one-on-one mentorship with experienced faculty
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to right, #2E66B1, #1e4a7a)' }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl md:text-4xl">Not Sure Which Course to Choose?</h2>
          <p className="mb-8 text-lg opacity-90">
            Talk to our counselors for personalized guidance based on your goals and preparation level
          </p>
          <LinkButton to="/contact" size="lg" className="bg-white hover:bg-gray-100" style={{ color: '#2E66B1' }}>
            Get Free Counseling
          </LinkButton>
        </div>
      </section>
    </div>
  );
}