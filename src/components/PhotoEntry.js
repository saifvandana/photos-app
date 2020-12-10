import React from 'react';
import './master.css';
import AppContext from './AppContext';

class PhotoEntry extends React.Component {

  static contextType = AppContext;

  render() {

    const image_path = "../images/" + this.props.src;

    return (

        <div className="photo-entry-block" >
            <a href={image_path}>
                <img className="photo-img" src={image_path} alt={image_path} />
            </a>
            <div className="photo-caption">{this.props.caption}</div>
            <div className="photo-info">{this.props.location}</div>
            { this.context.userName !== "" &&
                <div className="photo-comment">Commenting as: {this.context.userName} <input type="text" placeholder="comment"/></div>
             }
        </div>

    );

  }

}

export default PhotoEntry;
