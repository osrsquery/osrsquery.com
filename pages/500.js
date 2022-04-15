import { NextSeo } from 'next-seo';
import Link from "next/link"
import { FaHouseDamage } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

const Custom500 = () => {
    return (
        <>
            <NextSeo title="500" />
            <div className="container">
                <div className="content-container-block about-us-background">
                    <div className="horizontal-flex">
                        <div className="about-us-text">
                            <h2 className="section-heading">Oops 500!</h2>
                            <p className="about-us-paragraph">Oops, something went wrong.</p>
                            <p></p>
                            <p className="about-us-paragraph">Try to refresh this page or feel free to contact us if the problem persists. Or you can either return to the previous page, visit our homepage or contact our support team over at our discord.</p>
                        </div>

                        <div className="quick-links-flex">
                            <div className="quick-link-group">
                                <div className="quick-link-badge purple">
                                    <FaHouseDamage size={180} color="#4ACDD1"/>
                                </div>
                                <Link href={'/'}><a className="quick-link-btn-purple w-button">Homepage</a></Link>
                            </div>

                            <div className="quick-link-group">
                                <div className="quick-link-badge green">
                                     <BsDiscord size={180} color="#4ACDD1"/>
                                </div>
                                <Link href={'https://discord.gg/Z3GgPdVu9b'}><a className="quick-link-btn w-button">Discord</a></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Custom500;