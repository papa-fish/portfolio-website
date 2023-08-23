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
    ]

    return(
        <>
            <div className='projects-page-wrapper'>
                <Projects />
                <Project 
                    name="MangoDB"
                    description="A comprehensive solution for managing and expanding your manga collection. With MangoDB, you can effortlessly create, update, and organize your bookmarked mangas within a single, user-friendly platform. Easily add new titles and categorize your bookmarked mangas based on your preferences. Mango DB's intuitive interface ensures your collection is always up to date, enabling you to dive into your favorite stories seamlessly. Elevate your reading experience and join the future of manga collection management with Mango DB."
                    tags={mangoDbTags}
                    website="Mango-DB"
                />
            </div>

            <hr />

            <EmailMeButton />

        </>
    );
};