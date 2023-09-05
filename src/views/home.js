import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Division Associate</title>
        <meta property="og:title" content="Direct Division Associate" />
      </Helmet>
    </div>
  )
}

export default Home
