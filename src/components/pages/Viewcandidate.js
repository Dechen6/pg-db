import React, {Component} from "react";
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'
import LongMenu from './threedot'
import { Link } from 'react-router-dom';
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
      return   <div class="loader">
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

          <Col sm={4}>
                  <Form onSubmit={this.search} className="d-flex" style={{width:300}}>
                      <FormControl type="text" placeholder="Search Candidate" className="mr-2" name="search" aria-label="Search"/>&nbsp;
                      <Button type="submit" variant="outline-success">Search</Button>
                  </Form>
          </Col>

          <Col sm={2}>
          <Button href="Addcandidate" variant="outline-dark">Add</Button>
          </Col>

      </Row>
       <Table striped bordered hover responsive>
       <thead>
    <tr>
      <th>ID</th>
      <th>Candidate Name</th>
      <th>Gender</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td> {item.id}</td>
              <td> {item.candidate_name}</td>
              <td>{item.gender}</td>
              <td><Link to="/Details">View details</Link></td>
                <td><LongMenu id={item.id} name={item.candidate_name}/></td>
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
export default Viewcandidate