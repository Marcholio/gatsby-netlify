import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { AppBar } from "@material-ui/core"
import {
  MDBFooter,
  MDBContainer,
  MDBJumbotron,
  MDBCol,
  MDBRow,
  MDBCardTitle,
} from "mdbreact"

import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => {
  const content = useStaticQuery(graphql`
    query ContentQuery {
      metadata: site {
        siteMetadata {
          title
          author
        }
      }

      jumbo: markdownRemark(
        fileAbsolutePath: { glob: "**/markdown/jumbo/*.md" }
      ) {
        frontmatter {
          description
          header
        }
      }
    }
  `)

  console.log(content)

  return (
    <React.Fragment>
      <SEO title="Home" />
      <AppBar>
        <h1>
          <Link to="/">{content.metadata.siteMetadata.title}</Link>
        </h1>
      </AppBar>
      <MDBContainer fluid style={{ padding: 0 }}>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron
              fluid
              className="text-white text-center py-5 px-4 my-5"
              style={{
                backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
                backgroundSize: "100% auto",
              }}
            >
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  {content.jumbo.frontmatter.header}
                </MDBCardTitle>
                <p>{content.jumbo.frontmatter.description}</p>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBFooter color="blue">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://markustyrkko.com">
            {" "}
            {content.metadata.siteMetadata.author}{" "}
          </a>
        </MDBContainer>
      </MDBFooter>
    </React.Fragment>
  )
}

export default IndexPage
