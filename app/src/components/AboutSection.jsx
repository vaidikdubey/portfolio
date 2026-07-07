import { Code2, Lightbulb, Workflow } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Turning Ideas into Digital Products
                        </h3>

                        <p className="text-muted-foreground">
                            I specialize in building scalable full-stack
                            applications that combine intuitive user
                            experiences, robust backend systems, and modern
                            engineering practices to solve real-world problems.
                        </p>

                        <p className="text-muted-foreground">
                            I'm always looking to expand my skill set, embrace
                            new challenges, and apply thoughtful engineering to
                            build software that's reliable, scalable, and
                            genuinely useful.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a
                                href="./public/Vaidik_Dubey_Resume.pdf"
                                download="Vaidik_Dubey_Resume.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-foreground hover:bg-primary/30 transition-colors duration-300 font-bold"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code2 className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Full-Stack Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Developing scalable full-stack web
                                        applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Workflow className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Backend & Automation
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Designing reliable backend systems and
                                        automation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Lightbulb className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Problem Solving
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Turning complex ideas into practical
                                        software
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
