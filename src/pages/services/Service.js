import React from 'react';

function Service() {


    return (
        <>
            {/* SERVICES */}
            < div className="services" >
                <h2>MY SERVICES</h2>

                <div className="services-grid">
                    <div className="service-card">
                        <h3>Website Development</h3>
                        <p>
                            Création de sites web modernes, rapides et responsive adaptés à vos besoins.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Web Design</h3>
                        <p>
                            Design UI/UX moderne avec une expérience utilisateur optimale.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>WordPress Development</h3>
                        <p>
                            Création et gestion de sites WordPress faciles à maintenir.
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Service;