import './AboutMe.css';

export default function AboutMe() {
    return(
        <div className="about-me-wrapper">
            <h2 className="about-me">About Me</h2>
            <div className="about-me-img-container">
                <div className="img-row">
                    <img src="https://fakeimg.pl/150x150" alt="" />
                    <img src="https://fakeimg.pl/150x150" alt="" />
                </div>
                <div className="img-row">
                    <img src="https://fakeimg.pl/150x150" alt="" />
                    <img src="https://fakeimg.pl/150x150" alt="" />
                </div>
                <div className="img-row">
                    <img src="https://fakeimg.pl/150x150" alt="" />
                    <img src="https://fakeimg.pl/150x150" alt="" />
                </div>
                
                <div className='paragraph-container'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laboriosam magni commodi, assumenda minus quis reiciendis sequi quas quibusdam officiis suscipit nesciunt doloribus blanditiis. Mollitia molestias quis esse reiciendis vel?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae commodi incidunt temporibus a laborum nihil ipsum, officia expedita quae necessitatibus! Facere blanditiis temporibus eos labore explicabo. Assumenda magnam eligendi nobis!</p>
                </div>
            </div>
        </div>
    );
};