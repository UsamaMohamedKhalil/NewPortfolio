import React from 'react'
import { RiGlobalFill, RiQuillPenLine, RiSpaceShipFill } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
    {
        id: 1,
        icon: <RiGlobalFill size={65} />,
        service_name: "Web application , shopify , wordpress",
        service_description: "creates dynamic and scalable web applications that meet your business requirements and provide a great user experience, builds and customizes Shopify stores, providing a smooth and efficient e-commerce experience for your customers and designs and develops WordPress websites that are robust, easy to manage, and tailored to your business goals. "
    },
    {
        id: 2,
        icon: <RiQuillPenLine size={65} />,
        service_name: "Designs",
        service_description: "creates visually appealing and functional designs that cater to your specific needs, ensuring a seamless user experience and  "
    },
    {
        id: 3,
        icon: <RiSpaceShipFill size={65} />,
        service_name: "Social Media",
        service_description: "develops strategic social media campaigns that enhance your online presence and engage your target audience effectively."
    },
    

]
const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Services</p>
                            <h2>Quality Services</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services