import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <BrowserRouter>
                <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                    gutter={12}
                    containerStyle={{
                        bottom: 24,
                        right: 24,
                    }}
                    toastOptions={{
                        duration: 4000,
                        className:
                            "bg-card text-foreground border border-border rounded-xl shadow-xl backdrop-blur-md",
                        style: {
                            background: "hsl(var(--card))",
                            color: "hsl(var(--foreground))",
                            border: "1px solid hsl(var(--border))",
                            boxShadow:
                                "0 10px 30px rgba(0,0,0,0.18), 0 0 15px hsla(var(--primary),0.15)",
                            padding: "16px",
                            maxWidth: "420px",
                        },
                        success: {
                            iconTheme: {
                                primary: "hsl(var(--primary))",
                                secondary: "hsl(var(--card))",
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: "#ef4444",
                                secondary: "hsl(var(--card))",
                            },
                        },
                    }}
                />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
