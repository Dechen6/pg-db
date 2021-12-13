import React, {Component} from "react";
import axios from 'axios'
import {Table, Row, Col} from 'react-bootstrap'
import Pagination from '@material-ui/lab/Pagination';
import './Table.css';
import NotifyInfo from "./NotifyInfo";
var num_of_page =0;
class Notify extends Component{
  
  constructor(props){
    super(props)
   
    this.state = {
      items:[],
      isLoaded: false,
    }
    this.search = this.search.bind(this);
  }
 
  

  async componentDidMount(){
   
    this.paginate();
  }

 async paginate(event,value){
   var accessToken = localStorage.getItem("access")

    const result = axios.create({
      url: 'https://pg-backend-server.herokuapp.com/api/login/',
      headers: {
      Authorization:`Bearer ${accessToken}`
      }
    });
    const data = await result.get('https://pg-backend-server.herokuapp.com/api/Notification/')

      if (data.status == 200) {
          //  num_of_page = Math.ceil((data.data.count / 10)) ;
           this.setState({
            items:data.data,
            isLoaded:true
           })
      }
   
  }
  async search(event)
{
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
      items:tmpData.data,
      isLoaded:true
    })
  }
}
  render(){
    const {isLoaded,items} = this.state
    var getid = window.location.href.split("/")[4];
    if(!isLoaded){
      return<div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
    }
    else{

    return(
      <div style={{paddingLeft:50, paddingRight:50}}>
      {items.map(item => (
            item.id == getid &&
              <NotifyInfo name={item.candidate_name} 
              id ={item.id} 
              gender={item.gender} 
              email={item.email} 
              profile={item.profile_on_sunrise}
              dob={item.dob}
              country={item.country}
              registeration={item.registeration_date}
              job={item.job_applied}
              education={item.education}
              jlpt={item.jlpt}
              employment_status={item.employment_status}
              employment_date={item.employment_date}
              work_experience={item.work_experience}
              visa={item.visa_date}
              remarks={item.remarks}
              resume={item.resume}

              />        
          ))} 
    </div>
    )
    }
  }
}
export default Notify