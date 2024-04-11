import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { FaCalculator, FaChartLine, } from 'react-icons/fa';
import "../custom-font/fonts.css";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/bootsnav.css";
import "../css/jquery.fancybox.css";
import "../css/custom.css";
import copy1 from "../imagescopy/service_img1.jpg";
import copy2 from "../imagescopy/service_img2.jpg";
import copy3 from "../imagescopy/service_img3.jpg";

const services = [
  { id: 1, icon: <FaCalculator />, title: "Estimation", description: "Accurate project cost estimation." },
  { id: 2, icon: <FaChartLine />, title: "Analytics", description: "Data analytics for project insights." },
  // Add the rest of your services here...
];

const OurServices = () => {
  return (
    <section id="services1">
            <div className="container1">
                <h2>OUR SERVICES</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service_item">
                            <img src={copy1} alt="Our Services" />
                            <h3>CONSTRUCTION MANAGEMENT</h3>
                            <p>Discover the future of building excellence with our construction management services. Beyond just managing timelines and budgets, we delve deep into crafting spaces that inspire. Our approach intertwines innovation with sustainability, ensuring every project not just meets but exceeds expectations. It’s not just about the buildings we create; it’s about the lasting impact on communities and the environment. Let’s redefine what it means to build for tomorrow.</p>

                            <Link to="/login" className="btn know_btn">know more</Link>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service_item">
                            <img src={copy2} alt="Our Services" />
                            <h3>RENOVATION</h3>
                            <p>Embark on a journey of transformation with our bespoke renovation services. Each space tells a story, and our mission is to enhance yours, blending aesthetics with functionality. From the foundational beams to the finishing touches, we pay meticulous attention to every detail, ensuring your vision comes to life. Experience renovation redefined, where tradition meets innovation, and every project is a masterpiece in its own right.</p>
                            <Link to="/login" className="btn know_btn">know more</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service_item">
                            <img src={copy3} alt="Our Services" />
                            <h3>ARCHITECTURE</h3>
                            <p>At the heart of every memorable skyline is visionary architecture that pushes the boundaries of design and functionality. Our approach to architecture goes beyond creating spaces — it's about crafting environments that inspire, connect, and endure. With a blend of innovation, sustainability, and bespoke design, we bring your vision to life in ways that respect both heritage and the horizon of possibilities. Join us in shaping the future, one building at a time.</p>
                            <Link to="/login" className="btn know_btn">know more</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" className='cta-button'>HOME</Link>
        </section>
        
  );
};

export default OurServices;
