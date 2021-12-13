import React, {Component,useState} from "react";
import {Table, Button, Form, Row, Col} from 'react-bootstrap'
import LongMenu from './threedot'
import { Link , useParams} from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';

class Editinterview extends Component{
  constructor(props){
    super(props)
   
    this.state = {
      items:[],
      isLoaded: false,
    }
  }
 

  async componentDidMount(){
 
    var accessToken = localStorage.getItem("access")

    const result = axios.create({
      url: 'https://pg-backend-server.herokuapp.com/api/login/',
      headers: {
      Authorization:`Bearer ${accessToken}`
      }
    });
    var currentURl = window.location.href;
    var id = currentURl.split('/')[4];
  const data = await result.get('https://pg-backend-server.herokuapp.com/api/CandidateInterviewId/'+id)

  if (data.status == 200) {
    
    this.setState({
      items:data.data,
      isLoaded:true
    })
  }
  console.log(this.state)
  }
  
  async handleSubmit(event){
    event.preventDefault();
    let objdata = []
    console.log(event)
    let tmpdata = {}
    for(let data of event.target){

      tmpdata[data.name] = data.value
      
    }

    console.log(tmpdata)
// console.log("post data")
var accessToken = localStorage.getItem("access")

const result = axios.create({
  headers: {
  Authorization:`Bearer ${accessToken}`
  }
});
var currentURl = window.location.href;
var id = currentURl.split('/')[4];
    const data = await result.post('https://pg-backend-server.herokuapp.com/api/CandidateInterview/' +id,
    {
      "cd_id": tmpdata.cd_id,
    "hiring_company": tmpdata.hiring_company,
    "interview_date": tmpdata.interview_date,
    "result": tmpdata.result ,
    "reason": tmpdata.reason,
    "end_date": tmpdata.end_date,
    "note": tmpdata.note

    }
    ) .then(function (response) {
      
      swal({
        title:"Candidate interview updated Successfully",
        buttons: {
               cancel: true,
               confirm: "Submit"
                 }
        }).then( val => {
                if(val)  {
                  window.location.replace("http://localhost:3000/Viewinterview");
                        }
        });
    })
    .catch(function (error) {
      alert(error);
    });


  }
render(){
  const {isLoaded,items} = this.state
    
    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else{

    return(
      <div className="container" style={{width:"60%"}}>
      <h2 style={{textAlign:"center"}}>Edit Interviewed Candidate</h2><br></br>

    <Form onSubmit={this.handleSubmit}>
<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
  <Form.Label column sm={3}>
  cd_id
  </Form.Label>
  <Col sm={9}>
    <Form.Control   type="number" name="cd_id" placeholder="cd_id" defaultValue={items.cd_id}/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
  <Form.Label column sm={3}>
  Hiring Company
  </Form.Label>
  <Col sm={9}>
    <Form.Control  type="text" name="hiring_company" placeholder="Hiring Company" defaultValue={items.hiring_company} />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
  <Form.Label column sm={3}>
  Interview Date
  </Form.Label>
  <Col sm={9}>
    <Form.Control  type="date" name="interview_date" placeholder="Interview Date" defaultValue={items.interview_date} />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
  <Form.Label column sm={3}>
  Result
  </Form.Label>
  <Col sm={9}>
    <Form.Control  type="text" name="result" placeholder="Result" defaultValue={items.result} />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
  <Form.Label column sm={3}>
  Reason
  </Form.Label>
  <Col sm={9}>
    <Form.Control  type="text" name="reason" placeholder="Reason" defaultValue={items.reason} />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
  <Form.Label column sm={3}>
  End Date
  </Form.Label>
  <Col sm={9}>
    <Form.Control  type="date" name="end_date" placeholder="End Date" defaultValue={items.end_date}/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
  <Form.Label column sm={3}>
  Registeration date
  </Form.Label>
  <Col sm={9}>
    <Form.Control  type="date" name="registeration_date" placeholder="Registeration date" defaultValue={items.registeration_date}/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
  <Form.Label column sm={3}>
  Note
  </Form.Label>
  <Col sm={9}>
    <Form.Control  type="text" name="note" placeholder="Note" defaultValue={items.note}/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Col sm={{ span: 10, offset: 3 }}>
    <Button variant="success" type="submit" value="Submit" >Save</Button>&nbsp;&nbsp;
    <Button variant="danger" type="cancel" value="cancel" >Cancel</Button>
  </Col>
</Form.Group>
</Form>
</div>
    )
    }
  }
}
export default Editinterview