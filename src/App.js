import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Main from "./components/Main";
import Snackbar from "./components/Snackbar";
import NotFound from "./components/404";

const App = () => {
    const [selectedScene, setSelectedScene] = useState("ps1");
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState("");
    const [snackbarColor, setSnackbarColor] = useState("success");

    const handleSnackbar = (text, color = "success") => {
        setIsSnackbarOpen(true);
        if (color === "success") {
            setSnackbarColor("success");
        } else {
            setSnackbarColor("error");
        }
        setSnackbarText(text);
    };

    useEffect(() => {
        if (isSnackbarOpen === false) return;
        setTimeout(() => {
            setIsSnackbarOpen(false);
        }, 3000);
    }, [isSnackbarOpen]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main setSelectedScene={setSelectedScene} />} />
                <Route
                    path="/game"
                    element={<Game selectedScene={selectedScene} handleSnackbar={handleSnackbar} />}
                />
                <Route
                    path="/leaderboard"
                    element={
                        <Leaderboard
                            selectedScene={selectedScene}
                            setSelectedScene={setSelectedScene}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            {isSnackbarOpen && (
                <Snackbar snackbarText={snackbarText} snackbarColor={snackbarColor} />
            )}
        </>
    );
};

export default App;
