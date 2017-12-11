import Home from 'pages/home'
import NavBar from 'components/nav'
import WebpackerReact from 'webpacker-react';
import Profile from 'pages/profile'
import Map from 'components/Map'
import About from 'pages/about'
import NavBar_signed_in from 'components/NavBar_signed_in'
import MatchesIndex from 'pages/matchesindex.js'

WebpackerReact.setup({Home, NavBar, NavBar_signed_in, Profile, About, MatchesIndex, Map})
