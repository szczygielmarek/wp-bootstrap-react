import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Post = ({post}) => {
    
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

Post.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired
    }).isRequired
}