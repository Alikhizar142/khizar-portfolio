import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"
import { StaggerContainer } from "@/components/stagger-container"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  ExternalLink,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Brain,
  Eye,
  Database,
  Globe,
  Download,
  Linkedin,
  Star,
  TrendingUp,
  Zap,
  Target,
  Users,
  BookOpen,
  ChevronRight,
} from "lucide-react"

export default function Portfolio() {
  const skills = [
    { name: "Python", level: 95, color: "bg-blue-500" },
    { name: "TensorFlow", level: 90, color: "bg-orange-500" },
    { name: "OpenCV", level: 88, color: "bg-green-500" },
    { name: "Machine Learning", level: 92, color: "bg-purple-500" },
    { name: "Deep Learning", level: 89, color: "bg-pink-500" },
    { name: "Computer Vision", level: 87, color: "bg-indigo-500" },
    { name: "C++", level: 85, color: "bg-red-500" },
    { name: "SQL", level: 83, color: "bg-yellow-500" },
  ]

  const projects = [
    {
      title: "Plant Disease Detection System",
      period: "Sep 2023 - Oct 2023",
      description:
        "Advanced deep learning model using VGG19 architecture to classify plant leaves as healthy or diseased with an intuitive Tkinter GUI interface.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Tkinter"],
      link: "https://github.com/Alikhizar142/Sync-Intern-Internship/tree/main/Plant_Disease_Detection",
      icon: <Eye className="h-6 w-6" />,
      gradient: "from-green-400 to-emerald-600",
      featured: true,
    },
    {
      title: "Pneumonia Detection using CNN",
      period: "Sep 2024 - Dec 2024",
      description:
        "Cutting-edge deep learning project for diagnosing pneumonia from chest X-ray images with real-time web interface and deployment.",
      technologies: ["Python", "TensorFlow", "CNN", "Flask", "Streamlit"],
      link: "https://github.com/Alikhizar142/Pneumonia_Detection",
      demoLink: "https://pneumoniadetection-teama.streamlit.app/",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-blue-400 to-cyan-600",
      featured: true,
    },
    {
      title: "Handwritten Digit Recognition",
      period: "Sep 2023 - Oct 2023",
      description:
        "Real-time CNN model for digit recognition using MNIST dataset with live webcam integration and high accuracy performance.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      link: "https://github.com/Alikhizar142/Sync-Intern-Internship/tree/main/Digit_recognization",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-purple-400 to-pink-600",
    },
    {
      title: "Solar System Ontology",
      period: "Sep 2024 - Dec 2024",
      description:
        "Comprehensive RDF ontology in Turtle format representing the Solar System with interactive graphs and semantic web capabilities.",
      technologies: ["Protégé", "RDF/Turtle", "OWL", "OntoGraph"],
      link: "https://github.com/Alikhizar142/Solar-System-Ontology",
      icon: <Globe className="h-6 w-6" />,
      gradient: "from-orange-400 to-red-600",
    },
    {
      title: "School Management System",
      period: "Feb 2024 - May 2024",
      description:
        "Full-stack web application for comprehensive school operations management with secure role-based access control.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "https://github.com/Alikhizar142/School-Management-System-SMS",
      icon: <Database className="h-6 w-6" />,
      gradient: "from-teal-400 to-blue-600",
    },
    {
      title: "Facial Emotion Detection",
      period: "Apr 2024 - May 2024",
      description:
        "Advanced real-time facial emotion recognition system using CNN architecture with OpenCV integration.",
      technologies: ["Python", "CNN", "OpenCV", "Deep Learning"],
      link: "https://github.com/Alikhizar142/Facial-Emotion-Detection-using-Deep-learning",
      icon: <Eye className="h-6 w-6" />,
      gradient: "from-violet-400 to-purple-600",
    },
  ]

  const experiences = [
    {
      title: "AI Engineer",
      company: "Nusys Research Lab",
      location: "Peshawar, Pakistan",
      period: "Jul 2025 - Current",
      type: "Full-time",
      description: [
        "Developed advanced CV model for face and emotion detection using DeepFace and OpenCV",
        "Implemented intelligent logic to verify user actions based on AI agent prompts",
        "Built real-time webcam interface for emotion and action detection systems",
        "Integrated model responses with AI agent workflows for interactive wellness applications",
      ],
      color: "bg-blue-500",
    },
    {
      title: "Teaching Assistant",
      company: "FAST National University",
      location: "Peshawar, Pakistan",
      period: "Feb 2025 - May 2025",
      type: "Part-time",
      description: [
        "Served as TA for undergraduate Artificial Intelligence course with 100+ students",
        "Created comprehensive quizzes and assignments for AI concepts evaluation",
        "Provided one-on-one assistance to students with complex AI algorithms",
        "Maintained academic integrity and delivered constructive feedback on submissions",
      ],
      color: "bg-green-500",
    },
    {
      title: "AI Engineer Intern",
      company: "SYNC Intern's",
      location: "Remote",
      period: "Sep 2023 - Oct 2023",
      type: "Internship",
      description: [
        "Developed production-ready AI models for Plant Disease Detection and Digit Recognition",
        "Implemented advanced data preprocessing pipelines and model evaluation metrics",
        "Successfully deployed models using modern Python frameworks and libraries",
        "Collaborated effectively via GitHub with comprehensive documentation and reports",
      ],
      color: "bg-purple-500",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "6+", icon: <Target className="h-6 w-6" /> },
    { label: "Technologies Mastered", value: "15+", icon: <Zap className="h-6 w-6" /> },
    { label: "Academic Awards", value: "2", icon: <Award className="h-6 w-6" /> },
    { label: "Years of Experience", value: "2+", icon: <TrendingUp className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12"></div>
          </div>
        </div>

        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <ScrollAnimation animation="fadeInLeft" duration={0.8}>
                <div className="text-white">
                  <ScrollAnimation animation="scaleIn" delay={200}>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Available for opportunities</span>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fadeInUp" delay={300}>
                    <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                      Hi, I'm{" "}
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        Khizar Ali
                      </span>
                    </h1>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fadeInUp" delay={400}>
                    <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
                      AI Engineer & Student passionate about building{" "}
                      <span className="text-yellow-300 font-semibold">intelligent systems</span> that solve real-world
                      problems
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fadeInUp" delay={500}>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Button 
                        size="lg" 
                        className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                        asChild
                      >
                        <a href="mailto:alikhizar142@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Khizar,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards,">
                          <Mail className="h-5 w-5 mr-2" />
                          Get In Touch
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                        asChild
                      >
                        <a href="khizar-ali-cv.pdf" download>
                          <Download className="h-5 w-5 mr-2" />
                          Download CV
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                        asChild
                      >
                        <a href="https://github.com/Alikhizar142" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="fadeInUp" delay={600}>
                    <div className="flex flex-wrap gap-6 text-sm text-blue-100">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Peshawar, Pakistan
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        alikhizar142@gmail.com
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        (+92) 3177941300
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>

              {/* Right Content - Profile Image */}
              <ScrollAnimation animation="fadeInRight" delay={400} duration={1.0}>
                <div className="relative">
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-full animate-pulse"></div>
                    {/* Profile Image */}
                    <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/20">
                      <img
                        src="placeholder-user.jpg"
                        alt="Khizar Ali - AI Engineer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <ScrollAnimation animation="scaleIn" delay={800}>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="h-8 w-8 text-yellow-800" />
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="scaleIn" delay={1000}>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                        <Zap className="h-6 w-6 text-green-800" />
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={150}>
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft" duration={0.8}>
              <div>
                <div className="prose prose-lg">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I'm an AI student with a passion for building smart systems that solve real problems. I've worked on
                    projects like emotion detection and learning-based games, always pushing the boundaries of what's
                    possible with artificial intelligence.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I enjoy working with cutting-edge tools like Python, TensorFlow, and OpenCV to create innovative
                    solutions. My academic excellence has been recognized with the Dean's List and Brown's Medal for top
                    grades.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I'm always ready to learn and take on new challenges in AI, constantly exploring new technologies
                    and methodologies to stay at the forefront of this rapidly evolving field.
                  </p>
                </div>

                <ScrollAnimation animation="fadeInUp" delay={200}>
                  <div className="mt-8 flex gap-4">
                    <Button 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      asChild
                    >
                      <a href="mailto:alikhizar142@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Khizar,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20potential%20collaboration%20opportunities.%0A%0ABest%20regards,">
                        <Users className="h-4 w-4 mr-2" />
                        Let's Collaborate
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      asChild
                    >
                      <a href="khizar-ali-cv.pdf" target="_blank" rel="noopener noreferrer">
                        <BookOpen className="h-4 w-4 mr-2" />
                        View Resume
                      </a>
                    </Button>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" duration={0.8}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
                <StaggerContainer staggerDelay={100}>
                  {skills.map((skill, index) => (
                    <ScrollAnimation key={index} animation="fadeInUp" delay={index * 50}>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                My journey in AI and technology, building innovative solutions and contributing to cutting-edge research
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 200}>
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                  <div className="flex">
                    <div className={`w-2 ${exp.color} flex-shrink-0`}></div>
                    <div className="flex-1">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <CardTitle className="flex items-center gap-3 text-xl">
                              <div
                                className={`w-12 h-12 ${exp.color} rounded-full flex items-center justify-center text-white`}
                              >
                                <Briefcase className="h-6 w-6" />
                              </div>
                              <div>
                                <div className="text-xl font-bold text-gray-900">{exp.title}</div>
                                <div className="text-lg font-semibold text-gray-700">{exp.company}</div>
                              </div>
                            </CardTitle>
                            <CardDescription className="text-base text-gray-600 mt-2">
                              {exp.location} • {exp.type}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {exp.description.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-gray-600 flex items-start gap-3 group-hover:text-gray-700 transition-colors"
                            >
                              <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scaleIn" duration={0.8}>
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
              <div className="flex">
                <div className="w-2 bg-gradient-to-b from-blue-500 to-purple-600 flex-shrink-0"></div>
                <div className="flex-1">
                  <CardHeader className="pb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-3 text-xl">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                            <GraduationCap className="h-8 w-8" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">
                              Bachelor of Science in Artificial Intelligence
                            </div>
                            <div className="text-lg font-semibold text-gray-700">FAST National University (NUCES)</div>
                          </div>
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600 mt-2">
                          Peshawar, Pakistan • EQF Level 6
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1 px-4 py-2 text-base">
                        <Calendar className="h-4 w-4" />
                        Aug 2022 - Current
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <ScrollAnimation animation="fadeInLeft" delay={200}>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Subjects</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Programming (Python, C++), Data Structures, Algorithms
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Artificial Intelligence, Machine Learning, Neural Networks
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Database Systems, Software Engineering
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Linear Algebra, Calculus, Probability & Statistics
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              Big Data Analytics, Knowledge Representation
                            </li>
                          </ul>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation animation="fadeInRight" delay={300}>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 text-lg">Core Technical Skills</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Python, C++, SQL, TensorFlow, Keras, OpenCV
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              ML model development, training, and evaluation
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Real-time CV applications and agent-based AI systems
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Data preprocessing, analysis, and visualization
                            </li>
                          </ul>
                        </div>
                      </ScrollAnimation>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovative AI solutions and applications that demonstrate my expertise in machine learning and computer
                vision
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation
                key={index}
                animation="fadeInUp"
                delay={index * 150}
                className={project.featured ? "lg:col-span-2" : ""}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden h-full">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                      >
                        {project.icon}
                      </div>
                      <Badge variant="outline" className="text-xs font-medium">
                        {project.period}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-gray-600 leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors bg-transparent"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demoLink && (
                        <Button
                          size="sm"
                          className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity`}
                          asChild
                        >
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Honors & Awards</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognition for academic excellence and outstanding performance
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollAnimation animation="fadeInLeft" delay={200}>
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <Award className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">Brown's Medal</div>
                      <div className="text-lg text-gray-700">FAST National University</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Awarded the prestigious Brown's Medal for securing the highest GPA in the department during Spring
                    2023 and Fall 2023 semesters. This medal recognizes academic excellence, consistency, and
                    exceptional performance across all registered courses.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-orange-600 font-medium">
                    <Star className="h-4 w-4" />
                    Highest Academic Achievement
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={400}>
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <Award className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">Dean's List</div>
                      <div className="text-lg text-gray-700">FAST National University</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Recognized on the Dean's List of Honor for two semesters (Fall 2022 and Fall 2023) for achieving top
                    academic standing. This distinction is awarded to high-performing students who consistently
                    demonstrate academic excellence and rank among the top percentile of their class.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-blue-600 font-medium">
                    <TrendingUp className="h-4 w-4" />
                    Top Academic Performance
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent transform skew-y-12"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in discussing AI projects, research opportunities, or potential collaborations.
              Let's connect and explore how we can create innovative solutions together!
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12" staggerDelay={200}>
            <ScrollAnimation animation="scaleIn" delay={200}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">alikhizar142@gmail.com</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="scaleIn" delay={400}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-4 text-green-400" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">(+92) 3177941300</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="scaleIn" delay={600}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-4 text-purple-400" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">Peshawar, Pakistan</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </StaggerContainer>

          <ScrollAnimation animation="fadeInUp" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8"
                asChild
              >
                <a href="mailto:alikhizar142@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Khizar,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards,">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 bg-transparent"
                asChild
              >
                <a href="https://github.com/Alikhizar142" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 bg-transparent"
                asChild
              >
                <a href="https://www.linkedin.com/in/akrcy/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
