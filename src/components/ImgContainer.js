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
            trans3i: file(relativePath: { eq: "3iW-C_trans.png" }) {
                childImageSharp {
                    fixed(height: 500) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            wellsys: file(relativePath: { eq: "Wellsys12000.png" }) {
                childImageSharp {
                    fixed(height: 500) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            b4: file(relativePath: { eq: "b4_black_standing_500_trans.png" }) {
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
                <Img fixed={data.trans3i.childImageSharp.fixed} />
                <Img fixed={data.wellsys.childImageSharp.fixed} />
                <Img fixed={data.b4.childImageSharp.fixed} />
            </div>
        )
    }}
    />
    )
  }
}
export default ImgContainer
