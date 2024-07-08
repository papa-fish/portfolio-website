import './ViewProjectButton.css';

export default function ViewProjectButton(props) {

    const handleClick = () => {
        window.open(`${props.website}`, '_blank');
    };

    return(
        <button className='project-btn' onClick={handleClick}>
            View Project
        </button>
    );
};