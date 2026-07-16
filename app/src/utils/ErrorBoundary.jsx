import { cn } from "@/lib/utils";
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error, errInfo) {
        console.log("Error boundary caught an error: ", error);
        console.error(errInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    className={cn(
                        "h-full w-full min-h-screen flex flex-col justify-center items-center gap-3 px-5",
                        "bg-background text-foreground transition-colors duration-300",
                    )}
                >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 star animate-pulse-subtle" />
                        <div className="absolute top-1/3 right-1/4 w-2 h-2 star animate-float" />
                        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 star animate-pulse-subtle" />
                    </div>

                    <h2 className="text-2xl text-center md:text-4xl font-semibold animate-fade-in">
                        Well... that's not supposed to happen!
                    </h2>

                    <p className="text-sm text-center md:text-lg opacity-80 animate-fade-in-delay-1 max-w-md">
                        A tiny bug sneaked in where it wasn't invited. <br />
                    </p>

                    <button
                        onClick={() => window.location.reload()}
                        className="cosmic-button mt-6 animate-fade-in-delay-2"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
