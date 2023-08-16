import Tag from './Tag';

import './Projects.css';
import ViewProjectButton from './ViewProjectButton';

export default function Projects() {
    return(
        <div className="projects-component-container">
            <h2>Projects</h2>
            <p>Within these projects lies a snapshot of my learning and growth journey, showcasing my genuine excitement for crafting imaginative solutions.</p>

            <article className="projects">
                <div className="project">
                    <div className="project-intro">
                        <h3>Title</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ratione nihil quos provident ea illo nisi dolore rerum ipsum magni exercitationem mollitia enim porro dignissimos, ut voluptatum facilis magnam nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis dolore placeat neque beatae ex autem molestias voluptatem inventore veritatis reprehenderit illo modi sint laboriosam sed, repudiandae repellat magni eligendi!</p>
                    </div>
                    <span className="tag-container">
                        <Tag tag="JavaScript"/>
                        <Tag tag="HTML"/>
                        <Tag tag="CSS"/>
                        <Tag tag="Node.JS"/>
                        <Tag tag="Express.JS"/>
                    </span>
                    <ViewProjectButton project="portfolio-website"/>
                </div>
                <div className="project-img">
                    <img src="" alt="" />
                </div>
            </article>

            <article className="projects">
                <div className="project">
                    <div className="project-intro">
                        <h3>Title</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ratione nihil quos provident ea illo nisi dolore rerum ipsum magni exercitationem mollitia enim porro dignissimos, ut voluptatum facilis magnam nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis dolore placeat neque beatae ex autem molestias voluptatem inventore veritatis reprehenderit illo modi sint laboriosam sed, repudiandae repellat magni eligendi!</p>
                    </div>
                    <span className="tag-container">
                        <Tag tag="JavaScript"/>
                        <Tag tag="HTML"/>
                        <Tag tag="CSS"/>
                        <Tag tag="Node.JS"/>
                        <Tag tag="Express.JS"/>
                    </span>
                    <ViewProjectButton project="plus-ultra-deck-management"/>
                </div>
                <div className="project-img">
                    <img src="" alt="" />
                </div>
            </article>
            
            <article className="projects">
                <div className="project">
                    <div className="project-intro">
                        <h3>Title</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ratione nihil quos provident ea illo nisi dolore rerum ipsum magni exercitationem mollitia enim porro dignissimos, ut voluptatum facilis magnam nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti perspiciatis dolore placeat neque beatae ex autem molestias voluptatem inventore veritatis reprehenderit illo modi sint laboriosam sed, repudiandae repellat magni eligendi!</p>
                    </div>
                    <span className="tag-container">
                        <Tag tag="JavaScript"/>
                        <Tag tag="HTML"/>
                        <Tag tag="CSS"/>
                        <Tag tag="Node.JS"/>
                        <Tag tag="Express.JS"/>
                    </span>
                    <ViewProjectButton project="servo_app"/>
                </div>
                <div className="project-img">
                    <img src="" alt="" />
                </div>
            </article>

        </div>
    );
};