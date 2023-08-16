import Projects from '../components/Projects';

import './ProjectsPage.css';

export default function ProjectsPage() {
    return(
        <>
            <div className='projects-page-wrapper'>
                <Projects />
            </div>

            <hr />

            <section>
                <h2 className='say-hello'>Say hello!</h2>
                <button className='contact-me-btn'>Email me</button>
            </section>

        </>
    );
};