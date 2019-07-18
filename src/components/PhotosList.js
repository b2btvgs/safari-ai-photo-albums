import React from 'react';
import { S3Image } from 'aws-amplify-react';
import { Divider } from 'semantic-ui-react';
import Lightbox from './Lightbox';

class PhotosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: null
    };
  }
  
  handlePhotoClick = (photo) => {
    this.setState({
      selectedPhoto: photo
    }); 
  }
  
  handleLightboxClose = () => {
    this.setState({
      selectedPhoto: null
    }); 
  }
    
  photoItems() {
    return this.props.photos.map(photo =>
      <S3Image 
        key={photo.thumbnail.key} 
        imgKey={photo.thumbnail.key.replace('public/', '')} 
        style={{display: 'inline-block', 'paddingRight': '5px'}}
        onClick={this.handlePhotoClick.bind(this, photo.fullsize)}
      />
    );
  }

  render() {
    return (
      <div>
        <Divider hidden />
        {this.photoItems()}
        <Lightbox photo={this.state.selectedPhoto} onClose={this.handleLightboxClose} />
      </div>
    );
  }
}

export default PhotosList;