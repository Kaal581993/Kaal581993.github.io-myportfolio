import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Main from './main';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import {Layout, Header, Grid, Cell, HeaderRow,Textfield, Navigation, Drawer, Content} from 'react-mdl';
class Resume extends Component{
  render(){
    return(
      <div><Navigation>
      <Link className="bread-crumbs" to="/">Home&nbsp;&nbsp;</Link>
      <Link className="bread-crumbs" to="/resume"> /&nbsp;&nbsp;Resume</Link>
      </Navigation>
      <Grid>
               <Cell col={4}>
                 <div style={{textAlign: 'center'}}>
                 <img src="https://github.com/Kaal581993/My-Avatar/blob/master/my%20image.png?raw=true"
                 alt="My-Avatar"
                 className="contact-avatar-img"
                 style={{margin:'auto',height: 'auto', minWidth: '40'}}
                  />
                 </div>
                 <div style={{textAlign: 'center'}}>
                 <h3 style={{paddingTop: '2em'}}>Viral Prajapati</h3>
                 <h4 style={{color: 'grey'}}>Tech Support Engineer | Web Designer | Graphics Designer</h4>
                 <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                 <p><h4>About my previous job:</h4>
                      I have been a tech support engineer having total of 1 year 2 months in total. Recently my career was affected with Covid-19 <br/>
                      On initial stage when I joined the company, after having 14 days completed, I had few symptoms of fever and was diagnosed with Jaundice and Typhoid.<br/>
                      Earlier after further diagnostics it seemed to be somthing else. <br/>
                      We never knew as there were not many kits available earlier, but I was cured by 5 day medication of chloroquine. Since after then, Lockdown started and my training phase was affected.
                  </p>
                  <p>
                  <h4>About my Technical Background:</h4>
                  I posses very much skillful knowledge on Linux environments. Also I can make Reponsive Web designs using Bootsrap and Materialize CSS libraries. I can make my own CSS library for a particular custom Web Design
                  </p>
                 <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                 <h5>Address</h5>
                 <p>A/ 204, Gracy Arc, Prakash Mkt. Rd. Bhayandar West, Thane: 401101</p>
                 <h5>Phone</h5>
                 <p>+91-99671-26565</p>
                 <h5>Email</h5>
                 <p>viral.prajapati.nmims@gmail.com</p>
                 <h5>Web</h5>
                 <p>mywebsite.com</p>
                 <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                 </div>
               </Cell>
               <Cell className="resume-right-col" col={8}>
               <h2>Experience</h2>

             <Experience
               startYear={2020}
               endYear={2020}
               jobName="Customer Succcess Engineer"
               jobDescription={(
                 <div style={{flexDirection:'column'}}>
                    <div>1. Providing API calls support for Headless CMS, API call defect management and filing defect documentation, product support to users for exact solutions to their query.</div><br/>
                    <div>2. Provide escalated ticket/incident management supported applications as well as will participate in defect management, issue tracking/trending.</div><br/>
                    <div>3. Working with a team in collaboration and documentation support.</div><br/>
                    <div>4. Performs routine daily operations, monitoring, fault detection and initial troubleshooting at its own end before delivering a solution to the customer.</div><br/>
                    <div>5. Establish and maintain working relationships with internal teams, including professional services consultants, product management, engineers, and support staff.</div><br/>
                 </div>
               )}
               />

               <Experience
                 startYear={2019}
                 endYear={2019}
                 jobName="Application Tech Supprt Engineer"
                 jobDescription={(
                   <div style={{flexDirection:'column'}}>
                   <div>1. Assisted in establishing standards that fecilitate automating the build process for the development.</div><br/>
                   <div>2. Provide escalated ticket/incident management supported applications as well as will participate in defect management, issue tracking/trending.</div><br/>
                   <div>3. Establish and maintain working relationships with internal teams, including professional services consultants, product management, engineers, and support staff.</div><br/>
                   <div>4. Performs routine daily operations, monitoring, fault detection and initial troubleshooting for eZee Frontdesk, eZee Burrp, managed systems and Client-Server Connectivity globally.</div><br/>
                   </div>
                 )}
                 />
               <hr style={{borderTop: '3px solid #e22947'}} />
               <h2>Skills</h2>

               <Skills
                 skill="Phototshop"
                 progress={100}
                 />

                 <Skills
                   skill="Linux OS"
                   progress={90}
                   />
               <Skills
                 skill="javascript"
                 progress={70}
                 />
                 <Skills
                   skill="HTML/CSS"
                   progress={80}
                   />
                   <Skills
                     skill="NodeJS"
                     progress={50}
                     />
                     <Skills
                       skill="React"
                       progress={25}
                       />

                 <h2>Education</h2>


                 <Education
                 startYear={2015}
                 endYear={2019}
                 schoolName="SVKM's NMIMS Deemed to be University"
                 schoolDescription="Mukesh Patel School of Technology Management and Engineering is a branch of engineering college in NMIMS"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />


                 <Education
                   startYear={2010}
                   endYear={2015}
                   schoolName="Maratha Mandir's Babasaheb Inst.of Tech."
                   schoolDescription="Diploma in Computer Engineering"
                    />

               </Cell>
             </Grid>
      </div>

    );
  }
}

export default Resume;
