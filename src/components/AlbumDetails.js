import React, { Component } from 'react';
import { Form, Header, Segment } from 'semantic-ui-react';
import S3ImageUpload from './S3ImageUpload';
import PhotosList from './PhotosList';

class AlbumDetails extends Component {
    render() {
        if (!this.props.album) return 'Loading album...';
        
        return (
            <Segment>
            <Header as='h3'>{this.props.album.name}</Header>
            <S3ImageUpload albumId={this.props.album.id}/>        
            <PhotosList photos={this.props.album.photos.items} />
            {
                this.props.hasMorePhotos && 
                <Form.Button
                onClick={this.props.loadMorePhotos}
                icon='refresh'
                disabled={this.props.loadingPhotos}
                content={this.props.loadingPhotos ? 'Loading...' : 'Load more photos'}
                />
            }
            </Segment>
        )
    }
}

export default AlbumDetails;