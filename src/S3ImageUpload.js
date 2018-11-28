import React, { Component } from 'react';
import { Storage } from 'aws-amplify';

class S3ImageUpload extends React.Component {
    onChange(e) {
        const file = e.target.files[0];
        Storage.put('example.jpg', file, {
            contentType: 'image/jpeg'
        })
        .then (result => console.log(result))
        .catch(err => console.log(err));
    }
   
    render() {
        return (
            <input
                type="file" accept='image/gif, image/jpeg, image/png'
                onChange={(e) => this.onChange(e)}
            />
        )
    }
}

export default S3ImageUpload;