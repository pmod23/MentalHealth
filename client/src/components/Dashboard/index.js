import React from 'react';

// Import components
import Button from '../forms/Button';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <section className="dashboard">
                <div className="dashboard__container">

                    <div className="dashboard__header">
                        <h2 className="dashboard__title">Take your weekly wellness survey</h2>
                        <Button path="/wellness-survey" styles="ghost white">Take Survey</Button>
                    </div>

                    <div className="dashboard__recommendations">
                        <div className="dashboard__recommendation dashboard__recommendation--1"><h3>Yoga</h3></div>
                        <div className="dashboard__recommendation dashboard__recommendation--2"><h3>Meditation</h3></div>
                        <div className="dashboard__recommendation dashboard__recommendation--3"><h3>Therapy</h3></div>
                    </div>

                </div>
            </section>
        )
    }

}
