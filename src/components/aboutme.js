import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Main from './main';
import {Layout, Header,HeaderRow,Textfield, Cell, Grid, Navigation, Drawer, Content} from 'react-mdl';
class AboutMe extends Component{
  render(){
    return(
      <div>  <Navigation><Link className="bread-crumbs" to="/">Home&nbsp;&nbsp; </Link>
        <Link className="bread-crumbs" to="/aboutme"> /&nbsp;&nbsp;About Me</Link></Navigation>
        <Grid>
                 <Cell col={12}>
                   <div style={{textAlign: 'center'}}>
                   <img src="https://github.com/Kaal581993/My-Avatar/blob/master/pp.jpeg?raw=true"
                   alt="My-Avatar"
                   className="about-avatar-img"
                   style={{margin:'auto',height: 'auto', width: '200px'}}
                    />
                   </div>
                   <div style={{textAlign: 'center'}} className="banner-text">
                   <h3 style={{paddingTop: '2em'}}>Viral Prajapati</h3>
                   <h4 style={{color: 'grey'}}>Tech Support Engineer | Web Designer | Graphics Designer | Linux User</h4>
                   <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                   <p><h4>About Myself</h4>
                          I belong to community in India where the society has strong beliefs in old traditions and I want to stay away from it at all cost.
                          
                        <br/>

                    </p>
                    <p>
                    <h4>About my Technical Background:</h4>
                    I posses very much skillful knowledge on Linux environments. Also I can make Reponsive Web designs using Bootsrap and Materialize CSS libraries.
                    I can make my own CSS library for a particular custom Web Design
                    </p></div>

</Cell></Grid>
        </div>

    );
  }
}

export default AboutMe;
