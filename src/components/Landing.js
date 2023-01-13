import React from "react";
import "../styles/Landing.scss";
import Typewriter from "typewriter-effect";

function Landing () {

  

    return (
        <div className="landing__main__container" id="Landing">
            <div className="landing__page">
                <div className="landing__typewriter">
                    <div className="typewriter-container">
                        <Typewriter
                        options={{
                            autoStart: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .pauseFor(500)
                            .typeString("Hi")
                            .pauseFor(350)
                            .deleteAll()
                            .pauseFor(200)
                            .typeString(
                                "I'm <span style='color: var(--action-color);  font-weight: 400;'> Guillermo Aviles<span> <br></br>"
                            )
                            .typeString("<strong></strong>Mechanical Engineer")
                            .changeDeleteSpeed(30)
                            .pauseFor(250)
                            .deleteChars(19)
                            .changeDelay(70)
                            .typeString("Researcher")
                            .changeDeleteSpeed(10)
                            .pauseFor(250)
                            .deleteChars(10)
                            .changeDelay("natural")
                            .typeString(
                                "<span style='color: var(--action-color);  font-weight: 400;'>Software Engineer 👨🏽‍💻</span>"
                            )
                            .changeDeleteSpeed("natural")
                            .pauseFor(2000)
                            .deleteChars(7)
                            .start();
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;