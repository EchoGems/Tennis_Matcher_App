import Home from 'pages/home'
import NavBar from 'components/nav'
import WebpackerReact from 'webpacker-react';
import Map from 'components/Map'
import About from 'pages/about'
import NavBar_signed_in from 'components/NavBar_signed_in'
import Card from 'components/cards/card'
import Card2 from 'components/cards/card2'
import Card3 from 'components/cards/card3'
import Footer from 'components/footer'
import MatchesIndex from 'pages/matchesindex.js'

WebpackerReact.setup({Home, NavBar, NavBar_signed_in, About, Map, Card, Card2, Card3, MatchesIndex, Footer})

