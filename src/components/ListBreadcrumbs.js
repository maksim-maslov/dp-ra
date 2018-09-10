import React, { Component } from 'react';

import { HashRouter, Route, Link, Nav, NavLink, Switch } from 'react-router-dom';

const ListBreadcrumbs = props => {
    return props.list.map(el => <li className="site-path__item"><NavLink to={el.link}>{el.text}</NavLink></li>);
};

export default ListBreadcrumbs;