import React, {Component} from "react";
import axios from 'axios'
import { Form, Row, Col} from 'react-bootstrap'
import Swal from 'sweetalert';
var file = "";
var dataq = "";
class Import extends Component {
  
  constructor(props){
    super(props)
 
    this.state = {
      items:[],
      isLoaded: false,
    }
  }
 
  async componentDidMount(){
    let userId = this.props.match.params.id;
    console.log(userId);
    
  }
  
  async importFile(event){
    event.preventDefault();
    file = event.target.files[0]
    var FormData = require('form-data');
    dataq = new FormData();
    console.log(dataq);
    dataq.append('file',file);
    Swal({
          title:"Upload File to Database",
          text: "Are You Sure?",
          buttons: {
                cancel: true,
                confirm: "Submit"
                  }
    }).then( val => {
          if(val)  {
            axios.post('https://pg-backend-server.herokuapp.com/api/import/',dataq).then((response) => {
              Swal({
                title: "Thanks!",
                text: "You File is uploaded",
                icon: "success"
                });
            });
                 
          }
    });
    
    
  }

  render() {
    return (
      <div className="container" style={{width:"60%"}}>
        <h2 style={{textAlign:"center"}}>Import excel data</h2><br></br>
      
      {/* <Form onSubmit={this.submitdata}>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Col>
              <Form.Control   type="file" name="file" placeholder="file" className="form-control-file" onChange={this.importFile}  required/>
            </Col>
          </Form.Group>

    </Form> */}

<Form onSubmit={this.submitdata}>
<Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Choose your file to upload</Form.Label>
    <Form.Control type="file" size="lg" />
  </Form.Group>
  </Form>
</div>
    );
  }
}
export default Import