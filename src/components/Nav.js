import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/nav.module.css"

const {container, leftDivPosition, navLinks, freeTrial} = styles
class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }

  }
  renderLinks(){
    const linkNames = [
        "PRODUCTS",
        "SERVICES",
        "ABOUT",
        "FAQS",
        "REVIEWS",
        "NEWS",
        "CONTACT"    
    ]
    return linkNames.map((ele,i)=>{
        return <p i ={i} className={navLinks}>{ele}</p>
    })
  }

  render(){
    return(
        <StaticQuery 
        query={graphql`
        {
            logo: file(relativePath: { eq: "logoforwebsite.png" }) {
                childImageSharp {
                    fixed(height: 66) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `}
            render ={data=>{
                return(
                    <div className={container}>
                        <div className={leftDivPosition}>
                        
                        </div>
                    <Img fixed={data.logo.childImageSharp.fixed} alt="logo" />
                    <div className={leftDivPosition}>
                        
                        </div>
                    {this.renderLinks()}
                        <p className={freeTrial}>FREE TRAIL</p>
                    </div>
                )
            }} 
        />
      
    )
  }
}
export default Nav
