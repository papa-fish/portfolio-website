import './ViewProjectButton.css';

export default function ViewProjectButton(props) {

    const handleClick = () => {
        window.open(`https://github.com/papa-fish/${props.project}`, '_blank');
    };

    return(
        <button className='project-btn' onClick={handleClick}>
            View Project
        </button>
    );
};