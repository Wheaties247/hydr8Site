import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"




class ImgContainer extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }
  }

  render(){
    return(
     <StaticQuery 
     query={graphql`
        {
            center3i: file(relativePath: { eq: "3iCenter.png" }) {
                childImageSharp {
                    fixed(height: 500) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `}
    render={data=>{
        return(
            <div>
                <Img fixed={data.center3i.childImageSharp.fixed} />
            </div>
        )
    }}
    />
    )
  }
}
export default ImgContainer
