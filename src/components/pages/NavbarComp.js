import React, {Component} from "react";
import { Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input, dropdown } from 'mdb-ui-kit'; // module




class NavbarComp extends Component{

  constructor(props){
    super(props)
   
    this.state = {
      items:[],
      no_len:0,
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
   
  const data = await result.get('https://pg-backend-server.herokuapp.com/api/Notification/')

  if (data.status == 200) {
    
    this.setState({
      items:data.data,
      isLoaded:true
    })
  }
   var notificationCount = this.state.items.length;
  }

  async logout(event){
    swal({
      title:"LOGOUT",
      buttons: {
             cancel: true,
             confirm: "Okay"
             
               }
      }).then( val => {
              if(val)  {
                window.location.replace("./");
                      }
      });
  };
  

  render(){
    var {items,no_len} = this.state
    var notificationCount = this.state.items.length;
    var notificationData = []

    for (let index = 0; index < items.length; index++) {
      var hreflink = "/Notify/"+items[index].id;
      notificationData.push(<li><a className="dropdown-item" key = {index} href={hreflink}>{items[index].candidate_name}</a></li>)
    }

    return(
      <div>
    {/* Navbar */}
        <nav style={{padding:20}} className="navbar navbar-expand-lg navbar-light bg-light" >
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div  className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Navbar brand */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img src="assets/img/f.png" height={40} alt="" loading="lazy" />
              </a>

              {/* Left links */}
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                </li>
                <li className="nav-item">
                <Nav.Link as={Link} to="/Viewcandidate">Candidate</Nav.Link>
                </li>
                <li className="nav-item">
                <Nav.Link as={Link} to="/viewinterview">Interview</Nav.Link>
                </li>
                <li className="nav-item">
                <Nav.Link as={Link} to="/import">import</Nav.Link>
                </li>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
            {/* Right elements */}
          
          <div className="d-flex align-items-center position-absolute" style={{right:10+"px",top:20+"px"}}>

              {/* Notifications */}
              {/* <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="Notify" role="button">
                <i className="fas fa-bell" />
                <span className="badge rounded-pill badge-notification bg-danger">{notificationCount}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a onClick={this.logout} className="dropdown-item" href="#"  >Logout</a>
                </li>
              </ul> */}

          <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-bell" />
                <span className="badge rounded-pill badge-notification bg-danger">{notificationCount}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink" style={{height:200+"px",overflowY:'scroll', overflowX:'hidden'}}>
                  {notificationData}
              </ul>



              &nbsp;&nbsp;&nbsp;&nbsp;

              {/* Avatar */}
              <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-circle" height={25} alt="" loading="lazy" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a onClick={this.logout} className="dropdown-item" href="#"  >Logout</a>
                </li>
              </ul>
            </div>
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
</div>
    )
    }
  }
export default NavbarComp