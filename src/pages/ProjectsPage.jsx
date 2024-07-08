import EmailMeButton from '../components/EmailMeButton';
import Project from '../components/Project';
import Projects from '../components/Projects';

import './ProjectsPage.css';

export default function ProjectsPage() {

    const mangoDbTags = [
        "JavaScript",
        "HTML",
        "CSS",
        "Node.JS",
        "Express.JS",
        "SQL (PSQL)"
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

    return(
        <>
            <div className='projects-page-wrapper'>
                <Projects />
                <Project 
                    name="Plus Ultra Deck Management"
                    description="Welcome to the Plus Ultra Deck Management platform. My purpose with this website is to offer you a comprehensive solution for effectively searching, constructing, and overseeing your card collection within the context of the My Hero Academia Collectible Card Game (MHA CCG). Catering to both adept players and novices alike, this website is meticulously curated to furnish you with an array of tools aimed at elevating your endeavours in card acquisition and deck assembly."
                    tags={deckManagementTags}
                    website="https://github.com/papa-fish/plus-ultra-deck-management"
                />
                <Project 
                    name="MangoDB"
                    description="A comprehensive solution for managing and expanding your manga collection. With MangoDB, you can effortlessly create, update, and organise your bookmarked mangas within a single, user-friendly platform. Easily add new titles and categorise your bookmarked mangas based on your preferences. Mango DB's intuitive interface ensures your collection is always up to date, enabling you to dive into your favourite stories seamlessly. Elevate your reading experience and join the future of manga collection management with Mango DB."
                    tags={mangoDbTags}
                    website="https://github.com/papa-fish/mango-db"
                />
            </div>

            <hr />

            <EmailMeButton />

        </>
    );
};