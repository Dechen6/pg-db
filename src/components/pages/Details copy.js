import React, {Component} from "react";
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'
import axios from "axios";
import Pagination from '@material-ui/lab/Pagination';


var n = 1
var e = ""
var num_of_page =0;
class Details extends Component{
  
  constructor(props){
    super(props)
   
    this.state = {
      items:[],
      isLoaded: false,
    }
    this.search = this.search.bind(this);
  }
 
  

  async componentDidMount(){
 
    this.paginate(e,n);
  }

 async paginate(event,value){
   var accessToken = localStorage.getItem("access")

    const result = axios.create({
      url: 'https://pg-backend-server.herokuapp.com/api/login/',
      headers: {
      Authorization:`Bearer ${accessToken}`
      }
    });
    const data = await result.get('https://pg-backend-server.herokuapp.com/api/pagesCandidate/?page='+value)

      if (data.status == 200) {
           num_of_page = Math.ceil((data.data.count / 10)) ;
           this.setState({
            items:data.data.results,
            isLoaded:true
           })
      }
   
  }

async search(event) {
  event.preventDefault();
  const key = event.target.search.value
  var accessToken = localStorage.getItem("access")

  const result = axios.create({
    url: 'https://pg-backend-server.herokuapp.com/api/login/',
    headers: {
    Authorization:`Bearer ${accessToken}`
    }
  });
 
  const tmpData = await result.get('https://pg-backend-server.herokuapp.com/api/Search/?search='+key)

  if (tmpData.status == 200) {
      
    this.setState({
      items:tmpData.data.results,
      isLoaded:true
    })
  }
}
  render(){
    const {isLoaded,items} = this.state
    
    if(!isLoaded){
      return   
      <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    }
    else{

    return(
      <div style={{paddingLeft:50, paddingRight:50}}>
        <Row>
          <Col sm={6}><h2>Candidate List</h2>
          </Col>

          <Col sm={6}>
                  <Form onSubmit={this.search} className="d-flex" style={{width:300}}>
                      <FormControl type="text" placeholder="Search Candidate" className="mr-2" name="search" aria-label="Search"/>&nbsp;
                      <Button type="submit" variant="outline-success">Search</Button>
                  </Form>
          </Col>

      </Row>
      <Table className="tabledetail" striped bordered hover>
       <thead>
    <tr>
      <th>ID</th>
      <th>Candidate Name</th>
      <th>Gender</th>
      <th>Email</th>
      <th>Profile on sunrise</th>
      <th>DoB</th>
      <th>Country</th>
      <th>Registeration Date</th>
      <th>Job Applied</th>
      <th>Education</th>
      <th>JLPT</th>
      <th>Employment Status</th>
      <th>Employment Date</th>
      <th>Work Experience</th>
      <th>Visa Date</th>
      <th>Remarks</th>
      <th>Resume Link</th>
    </tr>
  </thead>
  <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td> {item.id}</td>
              <td> {item.candidate_name}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.profile_on_sunrise}</td>
              <td>{item.dob}</td>
              <td>{item.country}</td>
              <td>{item.registeration_date}</td>
              <td>{item.job_applied}</td>
              <td>{item.education}</td>
              <td>{item.jlpt}</td>
              <td>{item.employment_status}</td>
              <td>{item.employment_date}</td>
              <td>{item.work_experience}</td>
              <td>{item.visa_date}</td>
              <td>{item.remarks}</td>
              <td>{item.resume_link}</td>
              </tr>
          ))} 
    </tbody>
        </Table>
        <div>
        <Row>
          <Col sm={4}>
          </Col>

          <Col sm={4}>
          <Pagination  count={num_of_page}  color="primary" onChange={(e,v)=> this.paginate(e,v)}/>
          <br></br>
          </Col>

          <Col sm={4}>
          </Col>
       </Row>
        </div>
    </div>
    )
    }
  }
}
export default Details