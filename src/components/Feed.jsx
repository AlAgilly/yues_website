import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url} = props.feed
    let post;
    
    const divStyle = {
        // width: '100%',
        // height: '100px',
        // backgroundImage: 'url(' + media_url + ')',
        borderwidth: '0',
      };
      
      

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='100%'
                    height='auto' 
                    src={media_url} 
                    type="video/mp4" 
                    controls playsinline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM" || "IMAGE":
            post = ( 
                <img 
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
            );
            break;
        default:
            post = (
                <img 
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
            );
    }

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;