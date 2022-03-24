import { Component } from "react";

export class Mov extends Component {
    constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      genre:this.props.genre,
      number:this.props.number,
      daily:this.props.daily,
    }
    
}


render () {
  return(
  <>
              
       <td>{this.state.title}</td>
         <td>{this.state.genre}</td>
         <td>{this.state.number}</td>
         <td>{this.state.daily}</td>
        
        

  </>   
      
  )
}

}
export default Mov;
    
