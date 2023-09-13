import Project from './Project';

import './Projects.css';

export default function Projects() {

    const portfolioTags = [
        "React",
        "React-Router",
        "JavaScript",
        "CSS"
    ];

    const mhaCompanionAppTags = [
        "React",
        "React Native",
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
                name="MHA Companion App"
                description="Welcome to the MHA Companion App, your go-to tool for enhancing your My Hero Academia Collectible Card Game (MHA CCG) experience! This mobile app is built using React Native and is designed to streamline matches in the MHA CCG.
                As a developer, I embarked on this project with no previous experience in mobile development, specifically learning React Native for this purpose. This journey has been a great learning experience for me, and I am excited to share this app with the MHA CCG community.
                The MHA Companion App will soon be available on both the App Store and Google Play Store, making it easily accessible to a wide range of users."
                tags={mhaCompanionAppTags}
                website={"mha-companion-app"}
            />

            <Project 
                name="Portfolio Website"
                description="Introducing my meticulously crafted portfolio website, a testament to my proficiency in coding and collaboration. Developed with precision and care, this digital platform showcases a selection of my notable works and accomplishments. I am proud to acknowledge the creative expertise of my wife, whose design acumen, channeled through Figma, played an integral role in shaping the visually captivating aspects of the website. As visitors explore the diverse facets of my portfolio, they are invited to witness a fusion of technical prowess and innovative design, resulting in a seamless and engaging user experience."
                tags={portfolioTags}
                website="portfolio-website"
            />

            <Project
                name="Servo App"
                description="In my first collaborative endeavour, our objective was to develop a single webpage application (SPA). This application aimed to provide users with the ability to access information pertaining to service stations within their local vicinity, as well as those distributed across Australia. Notably, users could readily identify the nearest stations based on the current centring of the map display. The application also featured a distinctive 'spotlight' station, alongside the presentation of up-to-date pricing details for Oil from WTI/Brent, as well as Natural Gas. These multifaceted functionalities were seamlessly realised through the adept utilisation of the Google Maps API in conjunction with the Futures API."
                tags={servoAppTags}
                website="servo_app"
            />

        </div>
    );
};