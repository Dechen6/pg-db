import React, {Component} from "react";
import axios from 'axios'
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'
import swal from 'sweetalert';

class Addcandidate extends Component {
  constructor(props){
    super(props)
 
    this.state = {
      items:[],
      isLoaded: false,
    }
  }
 

  async componentDidMount(){
    let userId = this.props.match.params.id;
    console.log(userId)

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
    
    const data = await result.post('https://pg-backend-server.herokuapp.com/api/CandidateDataCreate/',
    {
      "candidate_name":tmpdata.candidate_name,
      "gender": String(tmpdata.gender),
      "email": tmpdata.email,
      "profile_on_sunrise": tmpdata.profile_on_sunrise,
      "dob": tmpdata.dob,
      "country": tmpdata.country,
      "registeration_date": tmpdata.registeration_date,
      "job_applied": tmpdata.job_applied,
      "education": tmpdata.education,
      "jlpt": tmpdata.jlpt,
      "employment_status": tmpdata.employment_status,
      "employment_date": tmpdata.employment_date,
      "work_experience": tmpdata.work_experience,
      "visa_date": tmpdata.visa_date,
      "remark": tmpdata.remark,
      "resume_link": tmpdata.resume_link

    }
    ) .then(function (response) {
      swal({
        title:"Candidate Added Successfully",
        buttons: {
               cancel: true,
               confirm: "Submit"
                 }
        }).then( val => {
                if(val)  {
                  window.location.replace("http://localhost:3000/Viewcandidate");
                        }
        });
    })
    .catch(function (error) {
      alert(error);
    });


  }

  render() {
    return (
      <div className="container" style={{width:"60%"}}>
        <h2 style={{textAlign:"center"}}>Add Candidate</h2><br></br>
      
      <Form onSubmit={this.handleSubmit}>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      Name
    </Form.Label>
    <Col sm={9}>
      <Form.Control   type="text" name="candidate_name" placeholder="Name"  required/>
    </Col>
  </Form.Group>

  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={3}>
        Gender
      </Form.Label>
      <Col sm={9}>
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
          id="formHorizontalRadios1"
          value = "male"
          checked
        />
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          id="formHorizontalRadios2"
          value = "female"
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      Email
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="email" name="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Profile on sunrise
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="profile_on_sunrise" placeholder="Profile on sunrise" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    DOB
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="dob" placeholder="DOB" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Country
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="country" placeholder="Country" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Registeration date
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="registeration_date" placeholder="Registeration date" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Job applied
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="job_applied" placeholder="job applied" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Education
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="education" placeholder="Education" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    JLIP
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="jlpt" placeholder="JLPT" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Work Experience
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="number" name="work_experience" placeholder="Work Experience" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Employment Date
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="employment_date" placeholder="Employment Date" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Visa Date
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="visa_date" placeholder="Visa Date" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Remark
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="remark" placeholder="Remark" />
    </Col>
  </Form.Group>




  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Resume link
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="file" name="resume_link" placeholder="Resume_link" />
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Employment Status
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="number" name="employment_status" placeholder="Employment Status" />
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
    );
  }
}
export default Addcandidate