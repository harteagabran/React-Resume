export default function Project(project = {}) {
    project= project.project;
    let allLang = [...project.front, ...project.back];
    let lang = allLang.join(" ");
    return (
        <div className="card">
            <div className="card-body p-0 px-3">
                <div className="row card-title pb-0">
                    <span className="col-4 pb-0 fw-bold">{project.name}</span>
                    <span className="col text-end">{lang}</span>
                </div>
                
                <p className="card-text mb-0 px-3">{project.about}</p>
                <p className="link text-center mb-0">{project.git}</p>
            </div>
        </div>
    )
}