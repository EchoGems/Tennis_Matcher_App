import Home from 'pages/home'
import NavBar from 'components/nav'
import WebpackerReact from 'webpacker-react';
import Profile from 'pages/profile'
import About from 'pages/about'

WebpackerReact.setup({Home, NavBar, Profile, About})
