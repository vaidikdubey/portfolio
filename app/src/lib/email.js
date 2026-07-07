import emailjs from "@emailjs/browser";

export const sendEmail = async ({ name, email, message, captchaToken }) => {
    return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            name,
            email,
            message,
            "g-recaptcha-response": captchaToken,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
};
