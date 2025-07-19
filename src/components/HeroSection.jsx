import { ArrowDown } from 'lucide-react';
export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Kevin</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2"> D Kid</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a third-year Information Technology student with a strong passion for creating dynamic and responsive web applications. I specialize in fullstack development using modern technologies like React, Node.js, Express, and SQL Server. I enjoy turning ideas into real-world digital experiences, focusing on clean code, user-centered design, and performance optimization. Currently, I'm looking for opportunities to learn, grow, and contribute to real-world projects alongside experienced developers.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}