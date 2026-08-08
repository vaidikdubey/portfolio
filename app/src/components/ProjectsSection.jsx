import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "RepoLens: RAG-Powered Codebase Exploration Tool",
        description:
            "A RAG-powered codebase exploration tool featuring automated repository ingestion, semantic vector search, and precise file-path attributions.",
        image: "/projects/RepoLens.png",
        tags: [
            "Next.js",
            "TypeScript",
            "Pinecone",
            "Gemini API",
        ],
        demoUrl: "https://repolens-rag.vercel.app/",
        github: "https://github.com/vaidikdubey/RepoLens",
    },
    {
        id: 2,
        title: "DevSnippet: Minimalist Code Snippet Sharing Platform",
        description:
            "A minimal, privacy-centric code sharing platform with Monaco Editor integration, auto-expiring links, and self-destructing snippets.",
        image: "/projects/DevSnippet.png",
        tags: [
            "Next.js",
            "TypeScript",
            "Monaco Editor",
            "NextAuth",
        ],
        demoUrl: "https://devsnippet-space.vercel.app/",
        github: "https://github.com/vaidikdubey/devsnippet",
    },
    {
        id: 3,
        title: "WhisperBox: AI-Powered Anonymous Messaging Platform",
        description:
            "A secure anonymous feedback platform featuring personal share links, robust dashboard settings, OTP verification, and AI-powered prompts.",
        image: "/projects/WhisperBox.png",
        tags: [
            "Next.js",
            "TypeScript",      
            "Gemini API",
            "NextAuth",
        ],
        demoUrl: "https://whisperbox-msg.vercel.app/",
        github: "https://github.com/vaidikdubey/WhisperBox",
    },
    {
        id: 4,
        title: "FormCraft: No-Code Custom Form Builder",
        description:
            "A no-code form builder with drag-and-drop customization, conditional logic, secure authentication, and payment integration.",
        image: "/projects/FormCraft.png",
        tags: ["React", "Node.js", "MongoDB", "dnd-kit"],
        demoUrl: "https://formcraft-wcrv.onrender.com/",
        github: "https://github.com/vaidikdubey/FormCraft",
    },
    {
        id: 5,
        title: "EduFlow: Learning Management System",
        description:
            "A full-stack learning management system with course management, quizzes, analytics, certificates, and role-based access.",
        image: "/projects/EduFlow.png",
        tags: ["React", "Node.js", "PostgreSQL", "Razorpay"],
        demoUrl: "https://eduflow-campus.vercel.app/",
        github: "https://github.com/vaidikdubey/EduFlow",
    },
    {
        id: 6,
        title: "Quiky: Quick Commerce Platform",
        description:
            "A fullstack quick-commerce platform powering product management, orders, inventory, rider assignment, and real-time tracking.",
        image: "/projects/Quiky-Code.png",
        tags: ["React", "Node.js", "Google Maps", "PostgreSQL"],
        // demoUrl: "",
        github: "https://github.com/vaidikdubey/Quiky---Quick-Commerce-Platform",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A glimpse into the projects I've built, combining modern
                    technologies, thoughtful engineering, and practical
                    problem-solving.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span
                                            key={key}
                                            className="px-2 py-1 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="w-full flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 flex justify-center items-center gap-2"
                                            target="_blank"
                                        >
                                            Demo <ExternalLink size={20} />{" "}
                                        </a>
                                        <a
                                            href={project.github}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 flex justify-center items-center gap-2"
                                            target="_blank"
                                        >
                                            Code <FaGithub size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/vaidikdubey"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Explore GitHub <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};
