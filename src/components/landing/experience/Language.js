import React from 'react';
import './Languages.scss';

class Language extends React.Component {

    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <h3>{this.props.language.language}</h3>
                <div data-id={this.props.language.skill} className="skillbar"></div>
            </div>
        );
    }
}

export default Language;