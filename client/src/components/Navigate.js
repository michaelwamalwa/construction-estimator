import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navigate.css";
import "../custom-font/fonts.css";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/bootsnav.css";
import "../css/jquery.fancybox.css";
import "../css/custom.css";
import slider1 from '../images/slider_img.jpg';
import slider2 from'../images/slider_img2.jpg'
import slider3 from '../images/slider_img3.jpg'


export default function Navigate() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [active, setActive] = useState("nav__menu");
    const whyUsItems = [
        {
          icon: 'fa-leaf',
          title: 'We deliver quality',
          description: 'Our dedication to quality is unwavering, as we tirelessly strive to exceed expectations by maintaining the highest standards in every project we undertake. We are committed to delivering exceptional value and excellence, ensuring that every aspect of our work reflects our deep commitment to quality and attention to detail.',
        },
        {
          icon: 'fa-futbol-o',
          title: 'Always on time',
          description: 'Our commitment to punctuality is paramount, ensuring that every project and service we deliver is completed within the agreed timeframe. We understand the importance of time in achieving success and strive to meet deadlines with efficiency and precision, guaranteeing that our clients can rely on us for timely delivery without compromising quality.',
        },
        {
          icon: 'fa-group',
          title: 'We are passionate',
          description: 'Our teams passion drives us to excel, fueling our dedication to delivering exceptional results. This fervor for what we do is at the core of our approach, ensuring that we tackle each project with enthusiasm and a commitment to excellence. Its this passionate spirit that sets us apart and enables us to turn visions into realities',
        },
        {
          icon: 'fa-line-chart',
          title: 'Professional Services',
          description: 'Our professional services are underpinned by a commitment to excellence and a deep understanding of our craft. We pride ourselves on delivering outstanding results with integrity and precision, leveraging our expertise to exceed expectations. This dedication to quality and excellence is what drives us forward and ensures we remain at the forefront of our industry.',
        },
      ];
    const slides = [
        {
            img: slider1,
            title: "We are Certified Engineers",
            subtitle: "Construction Services",
            description: "As certified engineers, we bring a foundation of trust and expertise to every project. Our credentials are a testament to our dedication to quality and excellence in the construction industry. Every structure we create stands on the principles of durability, safety, and innovation, ensuring that we not only meet but exceed the expectations placed upon us. Our commitment to excellence is unwavering, as we continue to build environments that enhance and inspire.",
        }, 
        {
            img: slider2,
            title: "Innovative Solutions",
            subtitle: "Creative & Professional",
            description: "Our approach to problem-solving is rooted in innovation and creativity, underpinned by a deep professional expertise. We thrive on turning complex challenges into seamless solutions, bringing visions to life through meticulous planning and execution. In a landscape that's constantly evolving, our focus on innovative solutions ensures that we're always ahead, crafting spaces that are not only functional but also transformative, fostering progress and inspiration.",
        }, 
        {
            img: slider3,
            title: "Quality Assurance",
            subtitle: "Trust & Reliability",
            description: "Quality is at the core of everything we do, serving as the foundation for the trust and reliability we build with each client. Our comprehensive quality assurance process guarantees that every project we undertake is executed with precision, meeting the highest standards of excellence. By focusing on durability, functionality, and aesthetics, we ensure that our work not only meets but surpasses expectations, cementing our reputation as a trusted partner in the industry.",
        }
    ];
    const nextSlide = () => {
        setSlideIndex((current) => (current === slides.length - 1 ? 0 : current + 1 ));
    }
    const prevSlide = () => {
        setSlideIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
    };
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(timer);
    }, [slideIndex]);

    const navToggle = () => {
        setActive(active => active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    };
  
    const linkStyle = {
        textDecoration: 'none', 
        color: 'white', 
        fontSize: '14px', 
        alignItems: 'center', 
        gap: '1.5rem'
    };

    return (
        <div className="page-container">
        <nav className="nav">
            <div style={linkStyle} className="brand">CONSTRUCTION GEEK</div>
            <ul className={active}>
                <li className="nav__item">
                    <Link style={linkStyle} to="/login">JOIN US</Link>
                </li>
                <li className="nav__item">
                    <Link style={linkStyle} to="/about">ABOUT US</Link>
                </li>
                <li className="nav__item">
                    <Link style={linkStyle} to="/contact">CONTACT US</Link>
                </li>
                <li className="nav__item">
                    <Link style={linkStyle} to="/services">OUR SERVICES</Link>
                </li>
                <li className="nav__item">
                    <Link style={linkStyle} to="/team">MEET THE TEAM</Link>
                </li>
                <li className="nav__item">
                    <Link style={linkStyle} to="/store">STORE</Link>
                </li>
            </ul>
            <button onClick={navToggle} className="nav-toggler" aria-label="Toggle navigation">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </button>
        </nav>
        <section id="home" className="home">
            <div className="carousel" >
            {slides.map((slide, index) => (
             <div key={index} className={`slide ${index === slideIndex ? 'active' : ''}`}>
                <img src={slide.img} alt={`Slide ${index}`} />
                <div className="overlay">
                                <div className="carousel-caption">
                                    <h3>{slide.title}</h3>
                                    <h1>{slide.subtitle}</h1>
                                    <p>{slide.description}</p>
                                    <Link to="/login" className="btn know_btn">know more</Link>
                                    <Link to="/login" className="btn know_btn">view project</Link>
                                </div>
                            </div>
                    </div>
                    ))} 
            </div>
        </section>

{/*WHY US?*/}
<section id="why_us">
      <div className="container1 text-center">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="head_title">
              <h2>WHY CHOOSE US?</h2>
              <p>Our commitment to excellence is the cornerstone of our service, driven by a passion for delivering unparalleled value and satisfaction. At the heart of our philosophy is a relentless pursuit of quality, ensuring that every project not only meets but exceeds the highest expectations. Our team, equipped with expertise and dedication, navigates the complexities of each challenge to deliver solutions that are not just effective but also innovative and sustainable. Trust us to transform your visions into reality, creating spaces and experiences that endure and inspire.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {whyUsItems.map((item, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="why_us_item">
                <span className={`fa ${item.icon}`}></span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  
    {/*Footer */}
<footer>
      <div className="container1 footer_top">
        <div className="row">
          <div className="col-lg-4 col-sm-7">
            <div className="footer_item">
              
              <p>In our relentless pursuit of excellence, we embrace
                 the complexities of every challenge. Our dedication to quality and
                  innovation is unwavering, as we continuously seek to surpass the 
                  expectations set before us. Each project is a testament to our commitment,
                   not just to meet the immediate needs but to anticipate and address the future ones.
                    Our approach is holistic, considering every aspect of the project to ensure sustainability, 
                    functionality, and aesthetic appeal. This philosophy underpins our mission: to deliver projects 
                    that stand the test of time, enriching lives and communities for years to come.</p>

              <ul className="list-inline footer_social_icon">
                <li><Link to ="https://www.facebook.com/jeff.elchapa" ><span className="fa fa-facebook"></span></Link></li>
                <li><Link to="https://twitter.com/wudan_champ"><span className="fa fa-twitter"></span></Link></li>
                <li><Link to="https://www.youtube.com/channel/UCuB20M_USCGwTfS8rHJpiJA"><span className="fa fa-youtube"></span></Link></li>
                <li><Link to="https://myaccount.google.com/?pli=1&nlr=1"><span className="fa fa-google-plus"></span></Link></li>
                <li><Link to="https://www.linkedin.com/in/jeff-michael-26115223a/"><span className="fa fa-linkedin"></span></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-5">
            <div className="footer_item">
              <h4>Explore link</h4>
              <ul className="list-unstyled footer_menu">
                {/* Links */}
                <li><Link to="/services"><span className="fa fa-play"></span> Our services</Link></li>
                <li><Link to="/team"><span className="fa fa-play"></span> Meet our team</Link></li>
            
              </ul>
            </div>
          </div>
      
        </div>
      </div>
       
      <div className="footer_bottom text-center">
        <p>
        
        </p>
      </div>
    </footer>
        </div>
    );
}
