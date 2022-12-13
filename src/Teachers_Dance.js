import './Staff.css'
export default function Teachers_Dance(){
    let staff = JSON.parse(localStorage.getItem('staff'))
    return(
        <div className="main">

            {staff?.filter(object => object.department === "Хореографическое творчество").map(staf => (
                <div className="profile-card">
                    <div className="img">
                        <img src={require("./static/media/" + staf.avatar )}/>
                    </div>
                    <div className="caption">
                        <h3>{staf.fio}</h3>
                        <p>{staf.description}</p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

