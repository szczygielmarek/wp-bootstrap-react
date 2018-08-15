//styles
import './scss/style.scss';

//bootstrap
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/util';

//react
import React from "react";
import {render} from "react-dom";
import App from "./App";
render(
    <App />,
    document.getElementById('root')
);