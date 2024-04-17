import React, { useState } from "react";
import '../css-html/index.css';

function About() {

    const [expanded, setExpanded] = useState({});
    
    const toggleExpand = (index) => {
        setExpanded(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };
    
    
    const faqItems = [
        {
            question: "What is KYPer?",
            answer: "KYPer (pronounced Keep-er) is a webapp designed to help and encourage consumers in finding local alternatives to everyday products."
        },
        {
            question: "But, why?",
            answer: "There are many reasons to use KYPer, but our first focus was creating a system to help us avoid purchasing goods from the megacorporporations behind most of the mass-produced products in the United States."
        }
    ];
    
    return (
        <body>
            <div className="about-kyper">
                <h1>About <span className="kyper-kyp">KYP</span>er</h1>
                <div classname="faq-box">
                    {faqItems.map((item, index) => (
                        <div key={index} className="faq-item">
                            <li className="question" onClick={() => toggleExpand(index)}>
                            {item.question}
                            </li>
                            {expanded[index] && <div className="answer">{item.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="team-about">
                <h1>Come Meet Group N Over on GitHub!</h1>
                <div className="team-spaces">
                    <div classname="box-1">
                        <a href="https://github.com/baron-git"><img src="https://avatars.githubusercontent.com/u/76495335?v=4"/></a>
                        <p>baron-git</p>
                    </div>
                    <div classname="box-2">
                        <a href="https://github.com/EnosKakwambi"><img src="https://avatars.githubusercontent.com/u/123114197?v=4"/></a>
                        <p>EnosKakwambi</p>
                    </div>
                    <div classname="box-3">
                        <a href="https://github.com/logbasem"><img src="https://avatars.githubusercontent.com/u/7990867?v=4"/></a>
                        <p>logbasem</p>
                    </div>
                    <div classname="box-4">
                        <a href="https://github.com/Brianna-P"><img src="https://avatars.githubusercontent.com/u/124546519?v=4"/></a>
                        <p>Brianna-P</p>
                    </div>
                    <div classname="box-5">
                        <a href="https://github.com/kpe03"><img src="https://avatars.githubusercontent.com/u/99045807?v=4"/></a>
                        <p>kpe03</p>
                    </div>
                    <div classname="box-6">
                        <a href="https://github.com/jstays"><img src="https://avatars.githubusercontent.com/u/98559350?v=4"/></a>
                        <p>jstays</p>
                    </div>
                    <div classname="box-7">
                        <a href="https://github.com/Nithomps"><img src="https://avatars.githubusercontent.com/u/123123306?v=4"/></a>
                        <p>Nithomps</p>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default About;