import { useLocation, useNavigate } from 'react-router-dom';
import './ViewProjectButton.css';

export default function ViewProjectButton() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/') {
            navigate('projects');
        } else {
            window.open('https://github.com/papa-fish?tab=repositories', '_blank');
        }
    }

    return(
        <button className='project-btn' onClick={handleClick}>
            View Project
        </button>
    );
};