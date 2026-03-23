import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCourseDropdownOpen(false);
      }
    };

    if (courseDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [courseDropdownOpen]);

  const courses = [
    { value: "iit-jee-main", label: "IIT-JEE Main Preparation" },
    { value: "iit-jee-advanced", label: "IIT-JEE Advanced Preparation" },
    { value: "gate", label: "GATE Engineering Preparation" },
    { value: "crash", label: "IIT-JEE/GATE Crash Course" },
    { value: "other", label: "Other / Not Sure" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = "service_c2qx6op";
      const templateId = "template_kem2xpb";
      const publicKey = "odaWPZZ12BoldwuMv";

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        course: courses.find(c => c.value === formData.course)?.label || formData.course,
        message: formData.message || "No message provided",
        to_email: "info@auspenacademy.com"
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success
      toast.success("Thank you! Your inquiry has been sent successfully. We'll contact you soon!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Oops! Something went wrong. Please try again or call us directly at +91 9998885881");
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = [
    {
      name: "Kakinada - Main Branch",
      address: "9-7-11/ B-1 Road facing,(beside UCH community hall) Gandhi Nagar - Kakinada 533 004",
      phone: "+91 9998885881",
      email: "info@auspenacademy.com",
      status: "open"
    },
    {
      name: "Vizag Branch",
      address: "Visakhapatnam",
      status: "coming-soon"
    },
    {
      name: "Vijayawada Branch",
      address: "Vijayawada",
      status: "coming-soon"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 text-white" style={{ background: 'linear-gradient(to bottom right, #F7D514, #F7D514)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl md:text-5xl">Get in Touch</h1>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Have questions? We're here to help you start your journey to success
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="course">Course Interested In *</Label>
                      <div className="relative">
                        <button
                          type="button"
                          className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-left text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                        >
                          {formData.course ? courses.find(c => c.value === formData.course)?.label : "Select a course"}
                          <ChevronDown className="ml-2 h-5 w-5" />
                        </button>
                        {courseDropdownOpen && (
                          <div
                            ref={dropdownRef}
                            className="absolute left-0 right-0 z-10 mt-1 max-h-60 overflow-y-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {courses.map(course => (
                              <button
                                key={course.value}
                                type="button"
                                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => {
                                  setFormData({ ...formData, course: course.value });
                                  setCourseDropdownOpen(false);
                                }}
                              >
                                {course.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your requirements..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full text-lg" 
                        size="lg" 
                        disabled={isSubmitting}
                        style={{ 
                          backgroundColor: isSubmitting ? '#cccccc' : '#2E66B1',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          padding: '1.5rem 2rem',
                          fontSize: '1.125rem',
                          fontWeight: '600'
                        }}
                      >
                        <Send className="mr-2 h-5 w-5" />
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(46, 102, 177, 0.1)' }}>
                        <Phone className="h-6 w-6" style={{ color: '#2E66B1' }} />
                      </div>
                      <div>
                        <h3 className="mb-1 text-gray-900">Call Us</h3>
                        <a href="tel:+919998885881" className="hover:underline" style={{ color: '#2E66B1' }}>
                          +91 9998885881
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(46, 102, 177, 0.1)' }}>
                        <Mail className="h-6 w-6" style={{ color: '#2E66B1' }} />
                      </div>
                      <div>
                        <h3 className="mb-1 text-gray-900">Email Us</h3>
                        <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                        <a href="mailto:info@auspenacademy.com" className="hover:underline" style={{ color: '#2E66B1' }}>
                          info@auspenacademy.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(46, 102, 177, 0.1)' }}>
                        <MapPin className="h-6 w-6" style={{ color: '#2E66B1' }} />
                      </div>
                      <div>
                        <h3 className="mb-1 text-gray-900">Visit Us</h3>
                        <p className="text-sm text-gray-600">
                          9-7-11/ B-1 Road facing,(beside UCH community hall) Gandhi Nagar - Kakinada 533 004
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl text-gray-900">Our Locations</h2>
            <p className="text-gray-600">
              Currently serving Kakinada, with new branches opening soon
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {locations.map((location, index) => (
              <Card key={index} className={location.status === "coming-soon" ? "opacity-75" : ""}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg text-gray-900">{location.name}</h3>
                    {location.status === "coming-soon" && (
                      <span className="rounded-full px-3 py-1 text-xs font-medium text-white" style={{ backgroundColor: '#F7D514' }}>
                        Opening Soon
                      </span>
                    )}
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    {location.status === "open" && (
                      <>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <a href={`tel:${location.phone}`} className="hover:underline" style={{ color: '#2E66B1' }}>
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <a href={`mailto:${location.email}`} className="hover:underline" style={{ color: '#2E66B1' }}>
                            {location.email}
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-gray-900">How can I enroll in a course?</h3>
                <p className="text-sm text-gray-600">
                  You can enroll by visiting our nearest branch, calling us, or filling out the 
                  inquiry form above. Our counselors will guide you through the enrollment process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-gray-900">Do you offer online classes?</h3>
                <p className="text-sm text-gray-600">
                  Yes, we offer both classroom and online modes for most of our courses. You can 
                  choose the mode that suits your convenience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-gray-900">Is there a refund policy?</h3>
                <p className="text-sm text-gray-600">
                  Yes, we have a student-friendly refund policy. Contact our admissions team for 
                  detailed information about terms and conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}