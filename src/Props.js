// Props is basically a argument to a function which returns JSX... 
import { Component } from 'react'
const Thead = () => {
  return (
      <thead>
      <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Job</th>
  </tr>
      </thead>
  )
} 

const Tbody = (props) => {
const {chardata} = props;
const rows = chardata.map((chardata,index)=>{
  return(
    <tr key={index}><td>{chardata.person}</td><td>{chardata.name}</td><td>{chardata.lname}</td></tr>
  )
})
  return (
       <tbody> 
       {rows}
       </tbody>
  )
}



export default class header extends Component {
  render() {
const {chardata} = this.props;  
    return (
      <div  className='tab'>
<table>
 <Thead></Thead>
 <Tbody chardata = {chardata}></Tbody>
</table>
    </div>
    )
  }
}

