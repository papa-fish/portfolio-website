import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

import './HomePage.css';

export default function HomePage() {

  const recipient = "lukechristophermoore@gmail.com";
  const subject = "Hi Luke!";
  const body = "You're hired!";

  const openEmailCompose = () => {
    const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

    return(
      <>
        <header>
          <p className='introduction'>Hi, my name is</p>
          <h1 className='my-name'>Luke Moore.</h1>
          <h1 className='statement'>I build things for the internet.</h1>
          <h4 className='headline'>I specialize in creating exceptional digital experiences as a full-stack software engineer.  I'm situated in Sydney, Australia, and I'm open to both local and remote full-time opportunities.</h4>
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

        <section>
          <h2 className='say-hello'>Say hello!</h2>
          <button
            onClick={openEmailCompose} 
            className='contact-me-btn'>Email me</button>
        </section>

      </>
    );
};