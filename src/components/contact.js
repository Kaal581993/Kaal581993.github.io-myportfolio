import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Main from './main';
import {Layout, Header,HeaderRow,Textfield,Grid, Cell,List, ListItem,ListItemContent, Navigation, Drawer, Content} from 'react-mdl';
class Contact extends Component{
  render(){
    return(
      <div className='contact-body'><Navigation><Link style={{color:'white'}}  className="bread-crumbs" to="/">Home&nbsp;&nbsp; </Link>
<Link className="bread-crumbs" style={{color:'white'}}to="/contact">/ &nbsp;Contact Me</Link></Navigation>
<Grid className="contact-grid">
  <Cell col={6}>
  <h3>Viral Prajapati</h3>
  <img src="https://github.com/Kaal581993/My-Avatar/blob/master/myAvatarteal%20background.png?raw=true"
  alt="My-Avatar"
  className="contact-avatar-img"
  style={{margin:'auto',height: 'auto', minWidth: '40'}}
   />
   <p style={{width:'75%', margin:'auto', paddingTop:'2em'}}>
   kajsdkjsanbcljaxmcnlkacadklnc ldma,xnc ljkdm,znc ljdsxbcv  zdfhjxbc hsdfcnb fjhscnxb hfvscxb jkdnsvc b kjsdvmncxvb jksfdnmc skfjcvnb
   skdfjxzbcjdskbxv jkfsncxbv jksfmxcbv jkbdfscv kjnmvbdskjnv wjkdsbckjdsnxbckwjsbcwjsdkcb kjdsbcowdjsmbnc owjdsbdnx wkdmbdckjws
   </p>
  </Cell>
  <Cell col={6}>
    <h3>Contact Me
    </h3>
    <hr />
    <div className="contact-list">

        <List>
            <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily:'Anton',}}>
              <i className="fa fa-phone-square" aria-hidden="true"/>
              +91-99671-26565
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily:'Anton',}}>
              <i className="fa fa-whatsapp" aria-hidden="true"/>
              +91 99671 26565</ListItemContent>
            </ListItem>            
            <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily:'Anton',}}>
              <i className="fa fa-fax" aria-hidden="true"/>
              0222-819-4634</ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily:'Anton',}}>
              <i className="fa fa-envelope" aria-hidden="true"/>
              viral.prajapati.nmims@gmail.com</ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily:'Anton',}}>
                <i className="fa fa-instagram" aria-hidden="true"/>
                Kaal581993</ListItemContent>
            </ListItem>

        </List>
    </div>
  </Cell>
</Grid>

</div>
    );
  }
}

export default Contact;
