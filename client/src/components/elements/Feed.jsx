import React from 'react'
import { video } from '../../assets';

const Feed = (props) => {
    const { id, caption, media_type, media_url} = props.feed
    let post;
    
    const divStyle = {
        // width: '100%',
        // height: '100px',
        // backgroundImage: 'url(' + media_url + ')',
        borderwidth: '0',
      };
      
      if(media_url == undefined || media_url == null) {
        media_url == "https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/382342003_837413391427975_3827654248217812022_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=2q6AxrTqruAAX9qJmI1&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE5ODUyNzkxNTExNjM0MTUwNw%3D%3D.2-ccb7-5&oh=00_AfBvbjuj5AbfvMjO06wjAIm47VuzmtqapHeRRmcl_ue2Dg&oe=65197913&_nc_sid=ee9879"
      }

    switch (media_type) {
        case "VIDEO":
            post = (
                <img 
                    id={id} 
                    src={video} 
                    alt={caption} 
                />
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