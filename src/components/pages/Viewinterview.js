import React, {Component} from "react";
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'
import LongMenu from './threedotInterview'
import axios from "axios";
import Pagination from '@material-ui/lab/Pagination';
var n = 1
var e = ""
var num_of_page =0;
class Viewcandidate extends Component{
  
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
    const data = await result.get('https://pg-backend-server.herokuapp.com/api/pagesInterview/?page='+value)

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
 
  const tmpData = await result.get('https://pg-backend-server.herokuapp.com/api/SearchInterview/?search='+key)

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
      return  <div class="loader">
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
          <Col sm={6}><h2>Interviewed Candidate List</h2>
          </Col>

          <Col sm={6}>
                  <Form onSubmit={this.search} className="d-flex" style={{width:300}}>
                      <FormControl type="text" placeholder="Search Candidate" className="mr-2" name="search" aria-label="Search"/>&nbsp;
                      <Button type="submit" variant="outline-success">Search</Button>
                  </Form>
          </Col>

      </Row>
      <Table striped bordered hover responsive>
       <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Hiring Company</th>
      <th> Interview Date</th>
      <th>result</th>
      <th>Reason</th>
      <th>End Date</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td> {item.cd_id}</td>
              <td> {item.hiring_company}</td>
              <td>{item.interview_date}</td>
              <td>{item.result}</td>
              <td>{item.reason}</td>
              <td>{item.end_date}</td>
              <td>{item.note}</td>
              <td><LongMenu id={item.id}/></td>
              </tr>
          ))} 
    </tbody>
        </Table>
        
        <div>
        <Row>
          <Col sm={4}>
          </Col>

          <Col sm={4}>
          <Pagination  count={num_of_page} color="primary" onChange={(e,v)=> this.paginate(e,v)}/>
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
export default Viewcandidate