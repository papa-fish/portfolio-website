import Tag from "./Tag";
import ViewProjectButton from "./ViewProjectButton";

export default function Project({ name, description, tags, website }) {

    return(
        <article className="projects">
            <div className="project">
                <div className="project-intro">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <span className="tag-container">
                    {tags.map((tag, idx) => (
                        <Tag key={idx} tag={tag} />
                    ))}
                </span>
                <ViewProjectButton website={website}/>
            </div>
            <div className="project-img">
                <img src="" alt="" />
            </div>
        </article>
    );
};