"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  AlertCircle,
  Upload,
  X,
  FileText,
  Send,
  Award,
  Check,
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import Header from "@/app/career/Header";
import toast from "react-hot-toast";

interface Job {
  id: number;
  title: string;
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  jobType: string;
  location: string;
  experience: string;
  deadline: string;
  salary?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  coverLetter: string;
  cv: File | null;
}

const JobApplicationPage = () => {
  const router = useRouter();
  const params = useParams();
  const jobId = params.jobId as string;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    cv: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Job data - In production, fetch from API/database
  const jobs: Job[] = [
    {
      id: 1,
      title: "Head Civil Engineer",
      fullDescription:
        "We are seeking an experienced Head Civil Engineer to lead our engineering team at Mahbub Group. This role requires exceptional leadership abilities, strong technical expertise, and a proven track record in managing large-scale construction projects. You will be responsible for overseeing all civil engineering operations, ensuring projects are completed on time, within budget, and to the highest quality standards while maintaining our commitment to excellence and innovation.",
      responsibilities: [
        "Lead and manage the civil engineering team across multiple projects",
        "Oversee daily engineering operations and project execution",
        "Ensure compliance with safety standards and building regulations",
        "Review and approve technical designs, drawings, and specifications",
        "Coordinate with clients, contractors, and stakeholders",
        "Manage project budgets, schedules, and resource allocation",
        "Mentor junior engineers and provide technical guidance",
        "Conduct site inspections and quality assessments",
        "Implement best practices and continuous improvement initiatives",
        "Prepare progress reports and presentations for management",
      ],
      requirements: [
        "Bachelor's degree in Civil Engineering or related field",
        "10+ years of experience in civil engineering",
        "5+ years in a leadership or management role",
        "Professional Engineer (PE) license preferred",
        "Strong knowledge of construction codes and regulations",
        "Excellent project management and leadership skills",
        "Proficiency in AutoCAD, Civil 3D, and other engineering software",
        "Outstanding communication and interpersonal abilities",
        "Experience with large-scale infrastructure projects",
        "Ability to manage multiple projects simultaneously",
      ],
      benefits: [
        "Competitive salary package",
        "Health and life insurance",
        "Annual performance bonuses",
        "Professional development opportunities",
        "Flexible working arrangements",
        "Transportation allowance",
        "Annual leave and holidays",
        "Team building activities",
      ],
      jobType: "Full Time",
      location: "On-site",
      experience: "10+ Years",
      deadline: "30 November 2025",
      salary: "Competitive based on experience",
    },
    {
      id: 2,
      title: "Accounts Manager",
      fullDescription:
        "Mahbub Group is looking for an experienced Accounts Manager to join our finance team. The successful candidate will be responsible for managing all accounting operations, financial reporting, and ensuring compliance with financial regulations. This role requires strong leadership skills, attention to detail, and the ability to work in a fast-paced environment.",
      responsibilities: [
        "Manage day-to-day accounting operations and transactions",
        "Prepare monthly, quarterly, and annual financial statements",
        "Oversee accounts payable and receivable processes",
        "Manage payroll processing and tax compliance",
        "Conduct financial analysis and variance reporting",
        "Ensure compliance with accounting standards and regulations",
        "Supervise and mentor accounting staff members",
        "Liaise with external auditors and tax consultants",
        "Implement internal controls and financial procedures",
        "Prepare budgets and financial forecasts",
      ],
      requirements: [
        "Bachelor's degree in Accounting, Finance, or related field",
        "7-9 years of accounting and finance experience",
        "CPA, CA, or equivalent professional certification preferred",
        "Strong knowledge of accounting software and ERP systems",
        "Excellent analytical and problem-solving skills",
        "Strong attention to detail and accuracy",
        "Leadership and team management experience",
        "Excellent communication and presentation skills",
        "Knowledge of local tax laws and regulations",
        "Advanced proficiency in MS Excel and financial modeling",
      ],
      benefits: [
        "Attractive salary package",
        "Medical insurance coverage",
        "Performance-based incentives",
        "Professional certification support",
        "Career advancement opportunities",
        "Paid time off and holidays",
        "Modern office environment",
        "Team collaboration culture",
      ],
      jobType: "Full Time",
      location: "On-site",
      experience: "7-9 Years",
      deadline: "20 November 2025",
      salary: "Negotiable based on qualifications",
    },
    {
      id: 3,
      title: "Assistant Manager",
      fullDescription:
        "We are seeking a dynamic Assistant Manager to support our operations at Mahbub Group. This role requires excellent organizational skills, leadership abilities, and a hands-on approach to daily management tasks. You'll work closely with senior management to ensure smooth operations and deliver exceptional results.",
      responsibilities: [
        "Assist in daily operations management and coordination",
        "Support team scheduling and resource planning",
        "Monitor performance metrics and operational KPIs",
        "Handle customer inquiries and resolve issues promptly",
        "Ensure quality standards are maintained consistently",
        "Assist in training and development of team members",
        "Prepare operational reports and documentation",
        "Support budget management and cost control initiatives",
        "Coordinate with different departments for smooth operations",
        "Implement process improvements and efficiency measures",
      ],
      requirements: [
        "Bachelor's degree in Business Administration or related field",
        "3-6 years of relevant management experience",
        "Proven leadership and team management skills",
        "Strong organizational and multitasking abilities",
        "Excellent communication and interpersonal skills",
        "Problem-solving mindset and decision-making abilities",
        "Proficiency in MS Office suite and management tools",
        "Ability to work in a fast-paced environment",
        "Customer service orientation",
        "Flexibility and adaptability to change",
      ],
      benefits: [
        "Competitive monthly salary",
        "Health insurance benefits",
        "Performance bonuses",
        "Training and development programs",
        "Career growth opportunities",
        "Paid annual leave",
        "Professional work environment",
        "Team building events",
      ],
      jobType: "Full Time",
      location: "On-site",
      experience: "3-6 Years",
      deadline: "25 November 2025",
    },
    {
      id: 4,
      title: "Junior Architect",
      fullDescription:
        "Join our creative architecture team at Mahbub Group as a Junior Architect. This is an excellent opportunity for a motivated individual to work on diverse projects while learning from experienced professionals. You'll be involved in all stages of design and project development, contributing to innovative architectural solutions.",
      responsibilities: [
        "Assist in developing architectural designs and concepts",
        "Create detailed 3D models and architectural renderings",
        "Prepare construction documents and technical drawings",
        "Collaborate with senior architects and design team members",
        "Conduct site visits and document existing conditions",
        "Research materials, products, and building systems",
        "Coordinate with engineers and other consultants",
        "Assist in client presentations and design reviews",
        "Ensure designs comply with building codes and regulations",
        "Support project documentation and filing",
      ],
      requirements: [
        "Bachelor's degree in Architecture",
        "1-3 years of experience in an architecture firm",
        "Proficiency in AutoCAD, Revit, and SketchUp",
        "Knowledge of 3D rendering software (V-Ray, Lumion, 3ds Max)",
        "Strong design and visualization skills",
        "Good understanding of building codes and construction methods",
        "Excellent attention to detail and accuracy",
        "Creative thinking and problem-solving abilities",
        "Strong communication and teamwork skills",
        "Portfolio demonstrating design capabilities",
      ],
      benefits: [
        "Competitive starting salary",
        "Medical insurance",
        "Mentorship from senior architects",
        "Professional development support",
        "Exposure to diverse projects",
        "Annual leave entitlement",
        "Modern design tools and software",
        "Collaborative work environment",
      ],
      jobType: "Full Time",
      location: "On-site",
      experience: "1-3 Years",
      deadline: "28 November 2025",
    },
  ];

  const job = jobs.find((j) => j.id === parseInt(jobId));

  if (!job) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-sky-400 mb-4">
              Job Not Found
            </h1>
            <button
              onClick={() => router.push("/careers")}
              className="text-sky-500 hover:text-sky-600 font-medium"
            >
              ← Back to Careers
            </button>
          </div>
        </div>
      </>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF or Word document");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB");
        return;
      }
      setFormData((prev) => ({ ...prev, cv: file }));
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, cv: null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const submitData = new FormData();
      submitData.append("fullName", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("experience", formData.experience);
      submitData.append("coverLetter", formData.coverLetter);
      submitData.append("jobTitle", job.title);
      submitData.append("jobId", jobId);
      if (formData.cv) {
        submitData.append("cv", formData.cv);
      }

      const response = await fetch("/api/job-application", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          coverLetter: "",
          cv: null,
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        toast.error(
          data.error || "Failed to submit application. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full bg-gray-50 min-h-screen py-8 md:py-12">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Back Button */}
          <motion.button
            onClick={() => router.push("/careers")}
            className="flex items-center gap-2 text-sky-500 hover:text-sky-600 mb-6 group font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Careers</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Side - Job Details (2 columns) */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Job Header */}
              <div className="bg-white rounded-[32px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-6">
                  {job.title}
                </h1>

                {/* Job Meta Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Job Type
                      </p>
                      <p className="font-bold text-cyan-800">{job.jobType}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Location
                      </p>
                      <p className="font-bold text-cyan-800">{job.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Experience
                      </p>
                      <p className="font-bold text-cyan-800">
                        {job.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        Deadline
                      </p>
                      <p className="font-bold text-cyan-800">{job.deadline}</p>
                    </div>
                  </div>
                </div>

                {job.salary && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl mt-6 border border-green-200">
                    <Award className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="text-sm text-green-700 font-medium">
                        Salary
                      </p>
                      <p className="text-green-900 font-bold">{job.salary}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Job Description */}
              <div className="bg-white rounded-[32px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-sky-400 mb-4">
                  Job Description
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {job.fullDescription}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-[32px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-sky-400 mb-6">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="w-6 h-6 bg-green-600 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-[32px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-sky-400 mb-6">
                  Requirements & Qualifications
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-[32px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-6 md:p-8 border border-sky-200">
                <h2 className="text-2xl font-bold text-sky-400 mb-6 flex items-center gap-2">
                  <Award className="w-7 h-7 text-sky-500" />
                  What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-green-600 rounded-sm flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Application Form (1 column) */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-[32px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-sky-400 mb-6">
                  Apply for this Position
                </h2>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm font-medium leading-relaxed">
                        {submitStatus.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-cyan-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-cyan-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-cyan-800 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <label className="block text-sm font-semibold text-cyan-800 mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                      placeholder="e.g., 5 years"
                    />
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-cyan-800 mb-2">
                      Upload CV/Resume *
                    </label>
                    {!formData.cv ? (
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-sky-500 transition-colors bg-gray-50 hover:bg-sky-50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600 text-center">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PDF or Word (Max 5MB)
                          </p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          disabled={isSubmitting}
                          required
                        />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-sky-500" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {formData.cv.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(formData.cv.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          disabled={isSubmitting}
                          className="p-1 hover:bg-red-100 rounded-full transition-colors disabled:opacity-50"
                        >
                          <X className="w-5 h-5 text-red-500" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-semibold text-cyan-800 mb-2">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                      placeholder="Tell us why you're a great fit for this position..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-bold rounded-[84px] transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-lg"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApplicationPage;
