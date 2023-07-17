import React from 'react';

function Home() {
    const start_btn = () => {
        window.location.href = '#Objetivos';
    };

    return (
        <section id="home">
            <div className="intro_box">
                <div onClick={start_btn} className="btn_start"></div>
                <div className="intro">
                    <h1 className="intro_a" id="intro_1">Èric Martínez</h1>
                    <h3 className="intro_a" id="intro_2">Junior Data Scientist</h3>
                </div>
            </div>
        </section>
    );
}

export default Home;

