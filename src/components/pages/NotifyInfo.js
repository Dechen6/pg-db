import React from 'react'
import './styles/notify.css'

function NotifyInfo({name, gender, email, profile, dob,
    country,
    registeration,
    job,
    education,
    jlpt,
    employment_status,
    employment_date,
    work_experience,
    visa,
    remarks,
    resume,}) {
    return (
        <div>
            {/* <center><h1>Candidate Detail</h1></center>
            <p>{name}</p>
            <p>{id}</p> */}

<section className="pricing-section">
            <div className="row justify-content-md-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="section-title text-center title-ex1">
                  <h2>Candidate Details</h2>
                </div>
              </div>
            </div>
            {/* card starts */}
            <div className="container">
                <div className="row">
                < div className="col-md-2"></div>
                
              <div className="col-md-8">
                <div className="price-card featured">
                {/* <p>Name: &nbsp; &nbsp;&nbsp;{name}</p>
                
                
                <p>Employment Status: {employment_status}</p>
                <p>Employment Date: {employment_date}</p>
                <p>Work Experience: {work_experience}</p>
                <p>Visa: {visa}</p>
                <p>Remarks: {remarks}</p>
                <p>Resume: {resume}</p> */}

<div className="table-responsive">
          <table className="table table-fixed">
            <tbody>
            <tr>
                <td className="col-3">Name</td>
                <td className="col-3">{name}</td>
              </tr>  
              <tr>
                <td className="col-3">Gender</td>
                <td className="col-3">{gender}</td>
              </tr>
              <tr>
                <td className="col-3">Email</td>
                <td className="col-3">{email}</td>
              </tr>
              <tr>
                <td className="col-3">Profile on Sunrise</td>
                <td className="col-3">{profile}</td>
              </tr>  
              <tr>
                <td className="col-3">Date of Birth</td>
                <td className="col-3">{dob}</td>
              </tr> 
              <tr>
                <td className="col-3">Country</td>
                <td className="col-3">{country}</td>
              </tr>  
              <tr>
                <td className="col-3">Registeration Date</td>
                <td className="col-3">{registeration}</td>
              </tr>  
              <tr>
                <td className="col-3">Job Applied for</td>
                <td className="col-3">{job}</td>
              </tr>  
              <tr>
                <td className="col-3">Education</td>
                <td className="col-3">{education}</td>
              </tr> 
              <tr>
                <td className="col-3">JLPT</td>
                <td className="col-3">{jlpt}</td>
              </tr>  
              <tr>
                <td className="col-3">Employment Status</td>
                <td className="col-3">{employment_status}</td>
              </tr>  
              <tr>
                <td className="col-3">Employemnt Date</td>
                <td className="col-3">{employment_date}</td>
              </tr>  
              <tr>
                <td className="col-3">Work Experience</td>
                <td className="col-3">{work_experience}</td>
              </tr> 
              <tr>
                <td className="col-3">Visa</td>
                <td className="col-3">{visa}</td>
              </tr>  
              <tr>
                <td className="col-3">Remarks</td>
                <td className="col-3">{remarks}</td>
              </tr> 
              <tr>
                <td className="col-3">Resume</td>
                <td className="col-3">{resume}</td>
              </tr>          
            </tbody>
          </table>
        </div>
                </div>
              </div>

              <div className="col-md-2"> </div>
            </div>
             </div> 
        </section>

        </div>
    )
}

export default NotifyInfo
