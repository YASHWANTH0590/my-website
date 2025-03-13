import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [nameText, setNameText] = useState('');
    const [titleText, setTitleText] = useState('');
    const fullName = "Hi, I'm G Sai Dattu Yaswanth";
    const fullTitle = "A Frontend Developer";

    useEffect(() => {
        let index = 0;
        const nameTimer = setInterval(() => {
            setNameText(fullName.substring(0, index + 1));
            index++;
            if (index === fullName.length) {
                clearInterval(nameTimer);
                let titleIndex = 0;
                const titleTimer = setInterval(() => {
                    setTitleText(fullTitle.substring(0, titleIndex + 1));
                    titleIndex++;
                    if (titleIndex === fullTitle.length) {
                        clearInterval(titleTimer);
                    }
                }, 100);
            }
        }, 100);

        return () => clearInterval(nameTimer);
    }, []);

    return (
        <div className="home-container">
            <h1 className="main-heading">🚀 Welcome to My Portfolio 🚀</h1>

            <div className="home-content">
                <h1 className="typing-text">{nameText}</h1>
                <h2 className="typing-text title">{titleText}</h2>
            </div>
        </div>
    );
};

export default Home;
