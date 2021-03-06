import React from 'react';
import PropTypes from 'prop-types';

const SinglePost = (props) => {
    
    let {title, excerpt, content, featured_image} = props.post;
    
    return (
        <div className="p-content">

            <div className="c-single-header">
                <img className="u-img-fit img-fluid" src={featured_image} />
            </div>

            <div className="container">
                
                <div className="row">
                    <div className="col">

                        <div className="o-section jumbotron">
                            <h1 className="display-4">{title}</h1>
                            <p className="lead" dangerouslySetInnerHTML={{__html: excerpt}}></p>
                            <hr className="my-4" />
                            <div dangerouslySetInnerHTML={{__html: content}}></div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );

}

export default SinglePost;

SinglePost.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        featured_image: PropTypes.string.isRequired,
    }).isRequired
}