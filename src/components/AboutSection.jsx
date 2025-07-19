import { Briefcase, Code, User } from 'lucide-react';
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Fullstack web developer</h3>
                        <p className="text-muted-foreground">
                            Over the past few years, I’ve worked on several personal and academic projects that have strengthened both my technical and problem-solving skills. I enjoy working in teams, learning from others, and continuously improving through real-world experiences.
                        </p>
                        <p className="text-muted-foreground">
                            My goal is to contribute to innovative and user-centered digital products. I am actively seeking opportunities—internships, freelance, or collaborative projects—where I can apply my skills, gain hands-on experience, and grow as a professional web developer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground"> Creating responsive websites and web applications with modern frameworks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                                    <p className="text-muted-foreground"> Designing intuitive user interfaces and seamless user experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management</h4>
                                    <p className="text-muted-foreground"> Leading projects from conception to conpletion with agile methodologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
