import AboutMe from '../components/AboutMe';
import EmailMeButton from '../components/EmailMeButton';
import Projects from '../components/Projects';

import './HomePage.css';

export default function HomePage() {
    return(
      <>
        <header>
          <p className='introduction'>Hi, my name is</p>
          <h1 className='my-name'>Luke Moore.</h1>
          <h1 className='statement'>I build things for the internet.</h1>
          <h4 className='headline'>I specialise in creating exceptional digital experiences as a full-stack software engineer.  I'm situated in Melbourne, Australia, and I'm open to both local and remote full-time opportunities.</h4>
        </header>

        <hr />

        <section>
          <Projects />
        </section>

        <hr />

        <section>
          <AboutMe />
        </section>

        <hr />

        <EmailMeButton />

      </>
    );
};