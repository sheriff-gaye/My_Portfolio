import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Me from "../../assets/IMG_4513.jpg";
import { Send } from "lucide-react";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>
        About <span className="brand">&#123;Me&#125;</span>
      </h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="about_me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>4+ Years </small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>5+</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I am a passionate developer who thrives on solving real world
            problems through creative and efficient solutions. I enjoy
            collaborating with diverse teams, constantly learning, and staying
            updated on the latest technologies. My goal is to build user focused
            applications that make a meaningful impact.
          </p>

          <a href="#contact" class="btn btn-primary">
            Let's Talk
            <Send />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
