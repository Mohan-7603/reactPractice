import { Component } from 'react'
const Thead = () => {
  return (
      <thead>
      <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Job</th>
    <th>Action</th>
  </tr>
      </thead>
  )
} 

const Tbody = (props) => {
const {chardata,removeChar} = props;
const rows = chardata.map((chardata,index)=>{
  return(
    <tr key={index}>
        <td>{chardata.name}</td>
        <td>{chardata.age}</td>
        <td>{chardata.job}</td>
        <td><button onClick={()=>removeChar(index)}>delete</button></td>
    </tr>
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
const {chardata,removeChar} = this.props;
    return (
      <div  className='tab'> 
<table>
 <Thead></Thead>
 <Tbody removeChar = {removeChar}  chardata = {chardata}></Tbody>
</table>
    </div>
    )
  }
}