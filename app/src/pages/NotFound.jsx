import { Link } from "react-router-dom";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

export const NotFound = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground />

            <ThemeToggle />

            <div className="min-h-screen w-full flex flex-col justify-center items-center text-center">
                <h1 className="text-8xl md:text-9xl font-extrabold text-glow opacity-0 animate-fade-in tracking-wider">
                    404
                </h1>

                <h2 className="text-xl md:text-3xl font-semibold mt-2 opacity-0 animate-fade-in-delay-1">
                    Lost in Deep Space
                </h2>

                <p className="text-sm md:text-base mt-3 mb-8 opacity-0 animate-fade-in-delay-2 balance max-w-md">
                    The page you are looking for has drifted out of orbit. It
                    either never existed or was pulled into a black hole.
                </p>

                <Link to="/" className="cosmic-button opacity-0 animate-fade-in-delay-3">
                    Return to Orbit
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
