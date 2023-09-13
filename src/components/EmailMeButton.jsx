export default function EmailMeButton() {

    const recipient = "admin@lukemoore.au";
    const subject = "Hi Luke!";
    const body = "You're hired!";
  
    const openEmailCompose = () => {
      const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl);
    };

    return(
        <section>
            <h2 className='say-hello'>Say hello!</h2>
            <button
            onClick={openEmailCompose} 
            className='contact-me-btn'>Email me</button>
        </section>
    );
};