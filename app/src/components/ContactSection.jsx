import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils.js";
import { toast } from "react-hot-toast";
import { sendEmail } from "@/lib/email.js";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

export const ContactSection = () => {
    const MESSAGE_MAX_LENGTH = 1000;

    const recaptchaRef = useRef(null);

    const [message, setMessage] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [captchaToken, setCaptchaToken] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (!captchaToken) {
            toast.error("Please complete the reCAPTCHA.");
            return;
        }

        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            const res = await sendEmail({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
                captchaToken,
            });

            if (res.status === 200) {
                toast.success("Message sent successfully!");

                form.reset();
                setMessage("");
            }
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error("EmailJS Error:", error);
            }
            toast.error("Couldn't send your message. Please try again later.");
        } finally {
            setIsSubmitting(false);
            recaptchaRef.current?.reset();
            setCaptchaToken(null);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Whether you're hiring, looking for a collaborator, or have
                    an exciting project in mind, I'm always open to meaningful
                    conversations and new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-left text-lg font-medium">
                                        Email
                                    </h4>
                                    <a
                                        href="mailto:vaidik26dubey@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        vaidik26dubey@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-left text-lg font-medium">
                                        Phone
                                    </h4>
                                    <a
                                        href="tel:+919174002626"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91-9174002626
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-left text-lg font-medium">
                                        Location
                                    </h4>
                                    <a
                                        href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh/@23.1990663,77.0762346,10z/data=!3m1!4b1!4m6!3m5!1s0x397c428f8fd68fbd:0x2155716d572d4f8!8m2!3d23.2599333!4d77.412615!16zL20vMGN3NTE?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Bhopal, Madhya Pradesh, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/vaidik-dubey/"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href="https://x.com/vaidik_26"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <FaXTwitter size={24} />
                                </a>
                                <a
                                    href="https://github.com/vaidikdubey"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="John Doe..."
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    maxLength={MESSAGE_MAX_LENGTH}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Hello, I'd like to talk about..."
                                />
                                <div
                                    className={`text-xs md:text-sm text-right ${
                                        MESSAGE_MAX_LENGTH - message.length <=
                                        100
                                            ? "text-red-500"
                                            : "text-gray-500"
                                    } ${message.length === 0 ? "hidden" : "block"}`}
                                >
                                    {MESSAGE_MAX_LENGTH - message.length}{" "}
                                    characters left
                                </div>
                            </div>
                            <ReCAPTCHA
                                sitekey={
                                    import.meta.env.VITE_RECAPTCHA_SITE_KEY
                                }
                                onChange={setCaptchaToken}
                                theme={localStorage.getItem("theme")}
                                ref={recaptchaRef}
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting || !captchaToken}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2 text-xs md:text-base",
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
