import React from "react";
import './Business.css';

class Business extends React.Component {
    render() {
        return (
            <div className = "Business">
              <div className = "image-container">
                <img src={this.props.business.imageSrc} alt=''/>
                {console.log(this.props.buisiness)}
              </div>
              <h2>Marginotto Pizzeria</h2>
            </div>
        );
}
}

export default Business;
