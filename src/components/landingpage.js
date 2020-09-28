import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './main';
import {Layout, Header,HeaderRow,Textfield, Navigation, Drawer, Content} from 'react-mdl';

class LandingPage extends Component{
  render(){
    return(
      <div style={{width: '100', margin:'auto'}}>
      <Grid className='landing-grid'>

      <Cell col={12}><div>
          <Navigation><Link style={{color:'white'}} className="bread-crumbs" to="/">Home</Link></Navigation>
          </div></Cell>
      <Cell col={12}>
         <div className="banner-text">

           <img src="https://github.com/Kaal581993/My-Avatar/blob/master/myAvatarteal%20background.png?raw=true"
           alt="My-Avatar"
           className="avatar-img"
           style={{margin:'auto',borderRadius:'2em'}}
            />
         <h3 style={{padding:'2%'}}>React Web Developer</h3>
         <hr />
         <p>HTML/CSS | Bootstrap | Javascript | React | Nodejs | Java | Express</p>
         <hr /><p> Wordpress | Contentstack | Twilio | Photoshop | Graphics Design</p> <hr />
         <p>Oracle DB | MySQL</p>
         <div className="social-links">
         {/*Linked Account*/}
         <a href="https://www.linkedin.com/in/veeral-prajapati-22b00877/" rel="noopener noreferrer" target= "_blank">
         <i className="fa fa-linkedin-square" aria-hidden="true" />
         </a>
         {/*Github Account*/}
         <a href="https://github.com/Kaal581993/" rel="noopener noreferrer" target= "_blank">
         <i className="fa fa-github-square" aria-hidden="true" />
         </a>

         {/*Youtube Account*/}
         <a href="https://www.youtube.com/channel/UCl0TP_t5B1_bsgjmGVQHTFg" rel="noopener noreferrer" target= "_blank">
         <i className="fa fa-youtube-square" aria-hidden="true" />
         </a>

         {/*Google plus Account*/}
         <a href="https://plus.google.com/b/102463460369902719634/" rel="noopener noreferrer" target= "_blank">
         <i className="fa fa-google-plus-square" aria-hidden="true" />
         </a>
         {/*Instagram Account*/}
         <a href="https://www.instagram.com/kaal581993/" rel="noopener noreferrer" target= "_blank">
         <i className="fa fa-instagram" aria-hidden="true" />
         </a>


         </div>

         </div>
      </Cell>
      <Cell col={12}></Cell>
      <Cell col={12}></Cell>
      </Grid>
      </div>
    );
  }
}

export default LandingPage;
