import Tag from "./Tag";
import ViewProjectButton from "./ViewProjectButton";

export default function Project({ name, description, tags, website, image }) {

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
                <div className="project-btn-wrapper">
                    <ViewProjectButton website={website}/>
                </div>
            </div>
        </article>
    );
};