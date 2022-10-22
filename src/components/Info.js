import photo from "../images/photo.jpg"

export default function Info() {
    return (
        <div className="info">
            <img src={photo} className="info--photo" alt="" />
            <h1 className="info--name">Alf Fonti</h1>
            <p className="info--subtitle">Frontend Developer</p>
            <a className="info--website" href="https://www.alphfonti.online/">alphfonti.online</a>
            <div className="info--buttons-wrapper">
                <a className="btn btn-email" href="mailto:alffonti@gmail.com">Email</a>
                <a className="btn btn-linkedin" href="https://www.linkedin.com/in/alffonti/">LinkedIn</a>
            </div>
        </div>
    )
}