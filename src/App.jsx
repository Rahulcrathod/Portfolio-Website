import React, { useEffect, useState } from 'react'
import { USER, PROJECTS } from './data.js'
import headshotUrl from './assets/headshot.jpg'
import { Phone, Mail, Github, Linkedin, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";   // ✅ Added for contact form
import headerImg from "./assets/bc.png";


// ---------------- THEME HOOK ----------------
function useTheme() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return [dark, setDark];
}

// ---------------- TYPING EFFECT ----------------
function TypingEffect({ text, speed = 120 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Chip({ children }) {
  return (
    <span className="px-3 py-1 text-sm rounded-full border border-zinc-200 dark:border-zinc-700">
      {children}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
      {children}
    </h2>
  );
}

// ---------------- TIMELINE COMPONENT ----------------
function TimelineItem({ icon, title, Project, period, description, LiveDemo }) {
  return (
    <div className="relative pl-10 pb-10">
      <div className="absolute left-4 top-0 w-1 h-full bg-indigo-400 dark:bg-indigo-600"></div>
      <div className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full shadow-md">
        {icon}
      </div>
      <div className="bg-white dark:bg-zinc-800 shadow-md rounded-xl p-5 ml-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {Project && <h3 className='text-xl font-semibold'>{Project}</h3>}
        <span className="text-sm text-zinc-500">{period}</span>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">{description}</p>
        {LiveDemo && (<a href={LiveDemo} target="_blank" className="text-indigo-600 hover:underline">Live Demo</a>)} 
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <section id="experience">
      <SectionTitle>Experience & Education</SectionTitle>
      <div className="relative border-l-2 border-indigo-300 dark:border-indigo-700 pl-6">
        <TimelineItem
          icon="🎓"
          title="BE in Computer Science Engineering @ Benglore Institute of Technology, Benglore"
          period="2021 - Present"
          description="Currently pursuing Computer Science Engineering at Bangalore Institute of Technology. Learning fundamentals of software engineering, algorithms, and modern technologies."
        />
        <TimelineItem
          icon="🎓"
          title="Diploma in Computer Science Engineering @ Government Polytechnic, Kalburgi"
          period="2022 - 2025"
          description="Completed my diploma in Computer Science Engineering, where I gained strong foundations in programming, data structures, databases, operating systems, and software development. During my diploma, I worked on academic projects and explored modern technologies like React, Node.js, and databases (MySQL, MongoDB)."
        />
        <TimelineItem
          icon="🛠"
          title="Full Stack Development Intern – ProLEAP"
          period="02/01/2025 - 24/04/2025"
          description="Completed 640 hours of training and hands-on project work in Full Stack Development. Developed features for ongoing projects, strengthened React.js and Node.js skills, and delivered production-quality solutions under industry guidance."
        />
        <TimelineItem
          icon="🚀"
          title="Personal Project"
          Project="Blogging Website – Full Stack MERN-style App"
          period="2025"
          description="A full-stack blogging platform where users can create, read, update, and manage blog posts. Built using HTML, CSS, Node.js, Express.js, and MongoDB with user authentication and dynamic content management."
          LiveDemo="https://blogwebsite-1rl3.onrender.com/"
        />
      </div>
    </section>
  );
}

// ---------------- REGISTER FORM ----------------
function RegisterForm({ onRegister, onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      alert("User already exists! Please login.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert(`Registered successfully! Welcome, ${name}`);
    onRegister(newUser);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-zinc-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-800 shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">
          Sign Up
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-5 p-3 text-lg border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-5 p-3 text-lg border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 p-3 text-lg border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-8 p-3 text-lg border rounded-lg"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 text-lg rounded-lg hover:bg-indigo-700"
        >
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitch}
            className="text-indigo-600 hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

// ---------------- LOGIN+PHOTO SPLIT ----------------
function LoginWithPhoto({ onLogin, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      onLogin(user);
    } else {
      alert("Invalid credentials! Please register first.");
    }
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white p-10">
        <img
          src={headshotUrl}
          alt="Rahul headshot"
          className="w-52 h-52 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          Hi, I'm Rahul C Rathod
        </h1>
        <p className="mt-4 max-w-md text-center text-xl">
          Full-stack developer who enjoys building fast, human-friendly UIs, clean backend APIs and learning new technologies.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 dark:bg-zinc-900 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-zinc-800 shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">
            Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-5 p-3 text-lg border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-8 p-3 text-lg border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 text-lg rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
          <p className="mt-4 text-center">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={onSwitch}
              className="text-indigo-600 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

// ---------------- MAIN APP ----------------
export default function App() {
  const [dark, setDark] = useTheme();
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );
  const [showRegister, setShowRegister] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!loggedInUser) {
    return showRegister ? (
      <RegisterForm
        onRegister={(user) => {
          localStorage.setItem("loggedInUser", JSON.stringify(user));
          setLoggedInUser(user);
        }}
        onSwitch={() => setShowRegister(false)}
      />
    ) : (
      <LoginWithPhoto
        onLogin={(user) => setLoggedInUser(user)}
        onSwitch={() => setShowRegister(true)}
      />
    );
  }

  // ---------------- CONTACT FORM HANDLER ----------------



  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
  "service_9wmkw5q",    // your actual Service ID
  "template_d71igkm",    // your actual Template ID
  e.target,
  "SiR8YSA9tvRDzD-vv"      // your actual Public Key
)
      .then(
        () => {
          alert("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message ❌", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <header className="sticky top-0 z-40 glass">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-bold tracking-tight text-xl md:text-2xl">
            Portfolio of{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {loggedInUser.name}
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 text-lg font-semibold items-center">
            <a href="#home" className="hover:text-fuchsia-500">Home</a>
            <a href="#experience" className="hover:text-fuchsia-500">Experience</a>
            <a href="#projects" className="hover:text-fuchsia-500">Projects</a>
            <a href="#about" className="hover:text-fuchsia-500">About</a>
            <a href="#contact" className="hover:text-fuchsia-500">Contact</a>

            <button
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                setLoggedInUser(null);
              }}
              className="ml-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
            >
              Logout
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-indigo-600 text-white rounded-lg">☰</button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-800 shadow-lg rounded-lg flex flex-col p-2 gap-2">
                <a href="#home" className="hover:text-indigo-500">Home</a>
                <a href="#experience" className="hover:text-indigo-500">Experience</a>
                <a href="#projects" className="hover:text-indigo-500">Projects</a>
                <a href="#about" className="hover:text-indigo-500">About</a>
                <a href="#contact" className="hover:text-indigo-500">Contact</a>
                <button onClick={() => { localStorage.removeItem("loggedInUser"); setLoggedInUser(null); }} className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg">Logout</button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-12 grid gap-12">
        {/* Hero */}
        <section id="home" className="glass rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-left">
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight">
              Hi, <TypingEffect text="I'm Rahul C Rathod" />
            </h1>
            <p className="mt-4 md:mt-6 text-lg text-zinc-800 dark:text-zinc-300 max-w-xl">
              Full-stack developer who enjoys building fast, human-friendly UIs, Develop new frontend Project, clean backend APIs and learning new technologies.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href={`mailto:${USER.email}`} className="px-6 py-2 rounded-xl bg-indigo-600 text-white shadow-md text-lg text-center">Contact</a>
              <a href="https://rahulcrathod.netlify.app" target="_blank" className="px-6 py-2 rounded-xl border shadow-md text-lg text-center">Live Site</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end relative mt-6 md:mt-0">
            <img src={headshotUrl} alt="Rahul headshot" className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover border-4 border-indigo-500 shadow-lg" />
          </div>
        </section>

        {/* Experience */}
        <Timeline />

        {/* Projects */}
        <section id="projects">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {PROJECTS.map((p) => (
              <a key={p.title} href={p.link} target="_blank" className="glass rounded-2xl p-4 md:p-6 hover:scale-[1.01] transition">
                <div className="text-xl font-bold">{p.title}</div>
                <p className="mt-2 md:mt-3 text-base text-zinc-800 dark:text-zinc-300">{p.blurb}</p>
                <div className="mt-2 md:mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
              </a>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="glass rounded-3xl p-4 md:p-8 text-lg">
          <SectionTitle>About</SectionTitle>
          <p>
            I’m Rahul C Rathod, a Full-stack Developer based in Benglore, India. Currently pursuing Computer Science Engineering in Benglore Institute Technology. 
            I enjoy building fast, user-friendly interfaces, frontend projects, and clean backend systems.
            <br /><br />
            <SectionTitle>💻 Tech Stack</SectionTitle>
            Frontend: React, HTML, CSS, JavaScript, TailwindCSS <br/>
            Backend: Node.js, Express.js <br/>
            Databases: MongoDB, MySQL <br/>
            Other: Python, Pandas, Git/GitHub
            <br /><br />
            <SectionTitle>🚀 Currently Exploring</SectionTitle>
            Advanced React (Next.js, Context API), Typescript, Cloud Deployment, AI APIs
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="glass rounded-3xl p-4 md:p-8">
          <SectionTitle>Contact Me</SectionTitle>
          <form onSubmit={sendEmail} className="grid gap-4 md:gap-6">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded-lg h-32" required></textarea>
            <button type="submit" className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">Send Message</button>
          </form>
        </section>

      </main>
    </div>
  );
}// here my all code just modify and send me back 