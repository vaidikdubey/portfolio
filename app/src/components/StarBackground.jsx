import { useEffect, useState } from "react";

// Star: id, size, x, y, opacity, animationDuration
// Meteor: id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    const [meteors, setMeteors] = useState([]);

    const generateStars = () => {
        const numberOfMeteors = 4;

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 3 + 1, //Meteor size b/w 1px - 3px
                x: Math.random() * 100, //x position of meteor (100 for 100% of viewport)
                y: Math.random() * 20, //y position of meteor (20 for 20% of viewport)
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3, //duration b/w 3s to 6s
            });
        }

        setMeteors(newMeteors);
    };

    const generateMeteors = () => {
        //Generate stars based on the device size
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000,
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, //Star size b/w 1px - 4px
                x: Math.random() * 100, //x position of star (100 for 100% of viewport)
                y: Math.random() * 100, //y position of star (100 for 100% of viewport)
                opacity: Math.random() * 0.5 + 0.5, //(50% to 100%)
                animationDuration: Math.random() * 4 + 2, //duration b/w 2s to 6s
            });
        }

        setStars(newStars);
    };

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};
