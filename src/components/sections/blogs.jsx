import React from 'react'
import { RiEyeLine } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'
import { blodData } from '../../utlits/fackData/blogsData'

const Blogs = () => {
    return (
        <section id="blog" className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Videos</p>
                            <h2>Latest Videos</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {blodData.map(({ date, descripation, id, src, title, link }) => (
                        <Card key={id} date={date} src={src} descripation={descripation} title={title} link={link} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs

const Card = ({ date, src, title, descripation, id, link }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <ZoomIn id={id}>
                <div className="blog-item">
                    <div className="image">
                        <img src={src} alt="Blog" />
                    </div>
                    <div className="content">
                        <div className="blog-meta mt-15">
                            <a className="date" href="#"><i className="far fa-calendar-alt"></i>{date}</a>
                        </div>
                        <h5>
                            <a href="#">{title}</a>
                        </h5>
                        <p>{descripation}</p>
                        <hr />
                        <a href={link} target='_blank' className="theme-btn">View Video<i><RiEyeLine size={15} /></i></a>
                    </div>
                </div>
            </ZoomIn>
        </div>
    )
}
