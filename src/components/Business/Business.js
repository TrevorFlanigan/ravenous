import React from "react";
import './Business.css';

class Business extends React.Component {
    render() {
      if(this.props.business){
        return (
            <div className = "Business">
              <div className = "image-container">
                <a href={this.props.business.url}><img src={this.props.business.imageSrc} alt=''/></a>
              </div>
              <a href={this.props.business.url}><h2 className="Business-information">{this.props.business.name}</h2></a>
              <h2 className="Business-reviews">{this.props.business.rating}/5</h2>
              <h3 className="Business-reviews">{this.props.business.reviewCount} reviews</h3>
              <a href={`https://www.google.com/maps/place/${this.props.business.address}`}><h3 className="Business-address">{this.props.business.address}</h3></a>
            </div>
        );
      } else{
        return [];
      }
}
}

export default Business;
