import * as React from "react"

import Seo from "../components/Seo";
import Background from '../components/Background';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Menu from '../components/Menu';
import Slideshow from '../components/Slideshow';

const menulist = ['', '', 'about me', 'fursona', 'gallery', 'album'];

const IndexPage = () => (
  <Background className="fixed bg-white w-screen h-screen block p-3">
    <Layout className="relative w-full h-full">
      <Container className="absolute mx-32 my-40 z-20">
        <Menu>{menulist}</Menu>
      </Container>
      <Container className="absolute bg-osmanthus-fragrans bg-cover bg-center bg-no-repeat w-full h-full z-10">
        <Slideshow></Slideshow>
      </Container>
    </Layout>
  </Background>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
