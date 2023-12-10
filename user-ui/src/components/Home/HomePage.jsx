import Header from "../Header/Header"
import hero1 from "../../assets/images/hero_1.jpg"
import course1 from "../../assets/images/course_1.jpg"
import course2 from "../../assets/images/course_2.jpg"
import course3 from "../../assets/images/course_3.jpg"
import course4 from "../../assets/images/course_4.jpg"
import course5 from "../../assets/images/course_5.jpg"
import course6 from "../../assets/images/course_6.jpg"
import star from "../../assets/images/star.png"

import "./HomePage.css"


const HomePage = () => {
  const courseArray = [{img: course1},{img: course2},{img: course3},{img: course4},{img: course5},{img: course6},]
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="hero-img-container">
        <img src={hero1} alt="" />
        <div className="overlay">Academic University</div>
      </div>

      <h1 className="academic-work">Why Academics Works</h1>

    <div className="feature-container">
        <div className="feature">
        <h2>Personalize Learning</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
        <button>Learn More</button>
      </div>
      
        <div className="feature">
        <h2>Personalize Learning</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
        <button>Learn More</button>
      </div>

        <div className="feature">
        <h2>Personalize Learning</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
        <button>Learn More</button>
      </div>

    </div>

      <h1 className="academic-work">Popular Courses</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, id?</p>
      <div className="home-card-conatianer">
        { courseArray.map((course) => {
          return(
              <div key={course.img} className="home-card">
                <img src={course.img} alt="" />
                <h1>Mobile application</h1>
                <h2>How To Create Mobile Apps Using Ionic</h2>
                <div className="rattings-icons">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                <button>Enroll In This Course</button>
              </div>
          )
          })}
        </div>

      <div className="about-university">
        <h1>About Our University</h1>
        <div >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nesciunt quaerat ad reiciendis perferendis voluptate fugiat sunt fuga error totam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus assumenda omnis tempora ullam alias amet eveniet voluptas, incidunt quasi aut officiis porro ad, expedita saepe necessitatibus rem debitis architecto dolore? Nam omnis sapiente placeat blanditiis voluptas dignissimos, itaque fugit a laudantium adipisci dolorem enim ipsum cum molestias? Quod quae molestias modi fugiat quisquam. Eligendi recusandae officiis debitis quas beatae aliquam?</p>
          <button>Read more</button>
        </div>
      </div>
    </>
  )
}
export default HomePage