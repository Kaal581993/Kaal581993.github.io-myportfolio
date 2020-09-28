import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import {Layout, Header,HeaderRow,Textfield, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Viral Prajapati" scroll>
        <Link className="bread-crumbs" style={{float:'left', display:'flex'}} to="/"></Link>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>

            </Navigation>
        </Header>
        <Drawer className="menu-drawer" style={{backgroundImage: 'linear-gradient(to left, #185a9d, #005d3f)',color: 'white'}} title="Viral Prajapati">
            <Navigation className="menu-drawer">
                <Link style={{color: 'white'}} to="/resume">Resume</Link>
                <Link style={{color: 'white'}} to="/aboutme">About Me</Link>
                <Link style={{color: 'white'}} to="/projects">Projects</Link>
                <Link style={{color: 'white'}} to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
/*
<div className="demo-big-content">
    <Layout>
        <Header waterfall hideTop>
            <HeaderRow title="Title">
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search3"
                    expandable
                    expandableIcon="search"
                />
            </HeaderRow>
            <HeaderRow>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </HeaderRow>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>*/
  );
}

export default App;
