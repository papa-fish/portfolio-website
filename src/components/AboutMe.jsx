import './AboutMe.css';

export default function AboutMe() {
    return(
        <div className="about-me-wrapper">
            <h2 className="about-me">About Me</h2>
            <div className="about-me-img-container">
                <div className="img-row">
                    <img src="https://i.imgur.com/BkTH542.png" alt="" />
                    <img src="https://i.imgur.com/02Ry2qX.png" alt="" />
                </div>
                <div className="img-row">
                    <img src="https://i.imgur.com/Kh0RkEQ.png" alt="" />
                    <img src="https://i.imgur.com/QAGi8uG.png" alt="" />
                </div>
                <div className="img-row">
                    <img src="https://i.imgur.com/kiYpWfs.png" alt="" />
                    <img src="https://i.imgur.com/oMY2u0K.png" alt="" />
                </div>
                
                <div className='paragraph-container'>
                    <p>Hey, I'm Luke Moore, a detail-driven freelance Software Developer fascinated by the tech world. With a background in construction engineering, my journey took a turn from gaming-fuelled tech interest to a desire to build a full-blown career in software engineering.  I thrive on perpetual learning, eagerly adopting fresh languages and frameworks to craft digital solutions that push boundaries.
                    <br/>
                    <br/>
                    My approach to my work centres around staying attuned to current circumstances while anticipating future developments. Logic and objectivity are my guiding principles.</p>
                </div>
            </div>
        </div>
    );
};