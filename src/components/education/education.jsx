
import { educationData } from "./data";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import "./education.css";


const Education = () => {
  return (
    <section>
      <h5>My journey</h5>
      <h2>My <span>&#123;Qualification&#125;</span></h2>
      <div className="education_container container ">
        <div className="education">
          <h3>
            <FaGraduationCap className="icon" /> Education
          </h3>
          <div className="timeline">
            {educationData.map((item) => {
              if (item.category === "education") {
                return (
                  <div className="timeline-item" key={item.id}>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="logo-container">
                        <img 
                          src={item.image} 
                          alt={item.place}
                          className="company-logo"
                        />
                      </div>
                      <span className="date">{item.date}</span>
                      <h4 className="title">{item.title}</h4>
                      <h5 className="place">{item.place}</h5>
                      <small className="desc">{item.desc}</small>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="education">
          <h3>
            <BsFillBriefcaseFill className="icon" /> Experience
          </h3>
          <div className="timeline">
            {educationData.map((item) => {
              if (item.category === "work") {
                return (
                  <div className="timeline-item" key={item.id}>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="logo-container">
                        <img 
                          src={item.image} 
                          alt={item.place}
                          className="company-logo"
                        />
                      </div>
                      <span className="date">{item.date}</span>
                      <h4 className="title">{item.title}</h4>
                      <h5 className="place">{item.place}</h5>
                      <small className="desc">{item.desc}</small>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;