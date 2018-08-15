import "./home.scss";

import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import FilterForm from './../filterForm/FilterForm';
import Post from './../post/Post';

const Home = (props) => {
    
    const {posts, filterPosts} = props;
    const postList = posts && posts.map((post) => 
        <CSSTransition 
            key={post.id} 
            timeout={300} 
            classNames="fade-item">
            <Post key={post.id} post={post} />
        </CSSTransition>    
    );

    return (
        <div className="p-content">
            <div className="container">
                <FilterForm onChange={filterPosts} />
                <TransitionGroup>
                    {postList}
                </TransitionGroup>
            </div>
        </div>
    );
}

export default Home;