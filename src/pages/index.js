import React from "react"

import Nav from "../components/Nav"
import ImgContainer from "../components/ImgContainer"


class IndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }
  }

  render(){
    return(
      <div>
        <Nav />
       <h3>No excuse for plastic use.</h3>
        <ImgContainer />
      </div>
    )
  }
}
export default IndexPage
