import './scss/style.scss';

//bootstrap
import 'bootstrap/js/dist/alert'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/carousel'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/popover'
import 'bootstrap/js/dist/scrollspy'
import 'bootstrap/js/dist/tab'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/js/dist/util'


import React from "react";
import ReactDOM from "react-dom";

const Hello = () => {
    return (
        <h1>Hello, React!</h1>
    );
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);