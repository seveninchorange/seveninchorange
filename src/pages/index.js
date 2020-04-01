import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/seo'

const IndexPage = () => (
  <div>
    <Head title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to='/page-2/'>Go to page 2</Link>
  </div>
)

export default IndexPage
