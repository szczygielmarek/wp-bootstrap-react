import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import restService from './js/rest.service';

import Home from './components/home/Home';
import SinglePost from './components/singlePost/SinglePost';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            posts: [],
            filteredPosts: []
        };

        this.filterPosts = this.filterPosts.bind(this);
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        restService.getPosts((posts) => {
            this.setState({
                posts,
                filteredPosts: posts,
                loading: false
            });
        });
    }

    filterPosts(filter) {
        let filteredPosts = this.state.posts;
        filteredPosts = filteredPosts.filter((post) => {
            let title = post.title.toLowerCase();
            return title.indexOf(filter.toLowerCase()) > -1;
        });
        
        this.setState({
            filteredPosts
        })
    }

    render() {
        let {posts, filteredPosts} = this.state;
        
        return (
            <Router>
                {posts.length > 0 && (
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={500}
                                classNames="fade"
                            >
                                <Switch location={location}>
                                    <Route exact path="/" render={() => (
                                        <Home posts={filteredPosts} filterPosts={this.filterPosts} />
                                    )} />
                                    <Route path="/:slug" render={({match}) => (
                                        <SinglePost post={posts.find(p => p.slug === match.params.slug)} />
                                    )} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                )}
            </Router>
        );
    }

}