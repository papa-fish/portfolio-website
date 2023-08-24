import Project from './Project';

import './Projects.css';

export default function Projects() {

    const portfolioTags = [
        "React",
        "React-Router",
        "JavaScript",
        "CSS"
    ];

    const deckManagementTags = [
        "React",
        "React-Router",
        "MUI",
        "Express.JS",
        "JavaScript",
        "CSS",
        "Mongoose",
    ];

    const servoAppTags = [
        "JavaScript",
        "EJS",
        "CSS",
        "Node.JS",
        "Express.JS",
        "SQL (PSQL)"
    ];

    return(
        <div className="projects-component-container">
            <h2>Projects</h2>
            <p>Within these projects lies a snapshot of my learning and growth journey, showcasing my genuine excitement for crafting imaginative solutions.</p>

            <Project 
                name="Portfolio Website"
                description="Introducing my meticulously crafted portfolio website, a testament to my proficiency in coding and collaboration. Developed with precision and care, this digital platform showcases a selection of my notable works and accomplishments. I am proud to acknowledge the creative expertise of my wife, whose design acumen, channeled through Figma, played an integral role in shaping the visually captivating aspects of the website. As visitors explore the diverse facets of my portfolio, they are invited to witness a fusion of technical prowess and innovative design, resulting in a seamless and engaging user experience."
                tags={portfolioTags}
                website="portfolio-website"
            />

            <Project 
                name="Plus Ultra Deck Management"
                description="Welcome to the Plus Ultra Deck Management platform. My purpose with this website is to offer you a comprehensive solution for effectively searching, constructing, and overseeing your card collection within the context of the My Hero Academia Collectible Card Game (MHA CCG). Catering to both adept players and novices alike, this website is meticulously curated to furnish you with an array of tools aimed at elevating your endeavours in card acquisition and deck assembly."
                tags={deckManagementTags}
                website="plus-ultra-deck-management"
            />

            <Project
                name="Servo App"
                description="In my first collaborative endeavor, our objective was to develop a single webpage application (SPA). This application aimed to provide users with the ability to access information pertaining to service stations within their local vicinity, as well as those distributed across Australia. Notably, users could readily identify the nearest stations based on the current centring of the map display. The application also featured a distinctive 'spotlight' station, alongside the presentation of up-to-date pricing details for Oil from WTI/Brent, as well as Natural Gas. These multifaceted functionalities were seamlessly realized through the adept utilization of the Google Maps API in conjunction with the Futures API."
                tags={servoAppTags}
                website="servo_app"
            />

        </div>
    );
};