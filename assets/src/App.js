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
            loading: true,
            posts: [],
            filter: '',
        };

        this.filterPosts = this.filterPosts.bind(this);
    }

    componentDidMount() {
        restService.getPosts((posts) => {
            this.setState({
                posts,
                loading: false
            });
        });
    }

    filterPosts(filter) {
        this.setState({
            filter
        });
    }

    render() {
        let {posts, filter} = this.state;
        
        let filteredPosts = posts.length && posts.filter((post) => {
            let title = post.title.toLowerCase();
            return title.indexOf(filter.toLowerCase()) > -1;
        });

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
                                    <Route exact path="/demo/" render={() => (
                                        <Home posts={filteredPosts} filterPosts={this.filterPosts} />
                                    )} />
                                    <Route path="/demo/:slug" render={({match}) => (
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