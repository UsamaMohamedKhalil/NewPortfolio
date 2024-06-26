import React from 'react'
import { RiBlazeFill, RiInstagramLine, RiDownloadLine, RiFacebookCircleFill, RiYoutubeFill, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.png"
import CV from "../../assets/CV.pdf"
import SlideUp from '../animations/slideUp'

const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Osama Mohamed</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href="https://www.facebook.com/OsamaMohamedMediaBuyer" target="_blank"><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a href="https://www.instagram.com/osamamohamedeg" target="_blank"><i><RiInstagramLine size={20} /></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/osama-mohamed-679522209/" target="_blank"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://github.com/UsamaMohamedKhalil" target="_blank"><i><RiGithubLine size={20} /></i></a></li>
                                        <li><a href="https://www.youtube.com/@OsamaMohamedKhalil" target="_blank"><i><RiYoutubeFill size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Osama Mohamed, Fullstack Developer, Media Buyer,
                                    and Designer based in Egypt.
                                </h2>
                                <div className="hero-btns">
                                    <a href={CV} download="Osama_Mohamed_CV.pdf" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiBlazeFill size={18} /></i> Designs</li>
                                    <li><i><RiBlazeFill size={18} /></i> Social Marketing</li>
                                    <li><i><RiBlazeFill size={18} /></i> Shopify</li>
                                    <li><i><RiBlazeFill size={18} /></i> Wordpress</li>
                                    <li><i><RiBlazeFill size={18} /></i> Web Application</li>
                                    <li><i><RiBlazeFill size={18} /></i> Product Design</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About
