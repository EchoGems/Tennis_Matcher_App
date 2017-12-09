import Home from 'pages/home'
import NavBar from 'components/nav'
import WebpackerReact from 'webpacker-react';
import Profile from 'pages/profile'
import Map from 'components/Map'
import About from 'pages/about'
import Calendar from 'components/calendar'


WebpackerReact.setup({Home, NavBar, Profile, About, Map, Calendar})
