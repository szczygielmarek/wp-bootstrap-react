import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {

    let {post} = props;
    
    return (
        
        <div className="o-section--small">
            <Link to={post.slug} className="c-post-entry media">
                <img src={post.thumbnail} className="mr-3 img-thumbnail" />
                <div className="c-post-entry__body media-body">
                    <h5>{post.title}</h5>
                    <div className="lead" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                </div>
            </Link>
        </div>
        
    );
    
}

export default Post;