import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Main from './main';
import {Layout, Header,HeaderRow, Grid, Cell,Textfield, CardText, Navigation, Drawer, Tab, Tabs,Content, Card, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class Projects extends Component{
constructor(props){super(props); this.state={activeTab:0 };}

toggleCategories(){
if(this.state.activeTab ===0){
  return(
    <div>/*HTML CSS*/
    <h4>My HTML/CSS Designs</h4>
    <Grid><Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvB-xAOd6Reh-hhdk_1TztEhwiGKZWogp3Q&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>

</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', margin:'auto', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvB-xAOd6Reh-hhdk_1TztEhwiGKZWogp3Q&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>

</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvB-xAOd6Reh-hhdk_1TztEhwiGKZWogp3Q&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>

</Cell>

</Grid>

<Grid><Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvB-xAOd6Reh-hhdk_1TztEhwiGKZWogp3Q&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>

</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', margin:'auto', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvB-xAOd6Reh-hhdk_1TztEhwiGKZWogp3Q&usqp=CAU)'}}>
HTML/CSS Design 1
</CardTitle>
<CardText>My College HTML CSS Project Designs</CardText>
<CardActions>
<Button colored>Github</Button>
<Button colored>Codepen</Button>
<Button colored>Live-Demo</Button>
</CardActions>
<CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>

</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvB-xAOd6Reh-hhdk_1TztEhwiGKZWogp3Q&usqp=CAU)'}}>
HTML/CSS Design 1
</CardTitle>
<CardText>My College HTML CSS Project Designs</CardText>
<CardActions>
<Button colored>Github</Button>
<Button colored>Codepen</Button>
<Button colored>Live-Demo</Button>
</CardActions>
<CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>

</Cell>

</Grid>
<Grid><Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvB-xAOd6Reh-hhdk_1TztEhwiGKZWogp3Q&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>

</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', margin:'auto', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvB-xAOd6Reh-hhdk_1TztEhwiGKZWogp3Q&usqp=CAU)'}}>
HTML/CSS Design 1
</CardTitle>
<CardText>My College HTML CSS Project Designs</CardText>
<CardActions>
<Button colored>Github</Button>
<Button colored>Codepen</Button>
<Button colored>Live-Demo</Button>
</CardActions>
<CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>

</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvB-xAOd6Reh-hhdk_1TztEhwiGKZWogp3Q&usqp=CAU)'}}>
HTML/CSS Design 1
</CardTitle>
<CardText>My College HTML CSS Project Designs</CardText>
<CardActions>
<Button colored>Github</Button>
<Button colored>Codepen</Button>
<Button colored>Live-Demo</Button>
</CardActions>
<CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>

</Cell>

</Grid>
    </div>
  )
}else if(this.state.activeTab ===1){
  return(/*Javascript*/
    <div><h4>My Javascript Projects</h4>
<Grid>
<Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
</Cell>

<Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
</Cell>
</Grid>

<Grid>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>

<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
</Grid>
<Grid>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>

<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwAMVIYFU7fBkYkhI_BGVqizydCiwjRIJvjQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
</Grid>
    </div>
  )
}else if(this.state.activeTab ===2){
  return(/*Photoshop */
    <div><h4>My Photoshop Art Gallery</h4>
    <Grid>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGszn_VeGsVqXL1pViuI_Tj72cECWKarxaFw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGszn_VeGsVqXL1pViuI_Tj72cECWKarxaFw&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGszn_VeGsVqXL1pViuI_Tj72cECWKarxaFw&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
</Grid>
<Grid>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGszn_VeGsVqXL1pViuI_Tj72cECWKarxaFw&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGszn_VeGsVqXL1pViuI_Tj72cECWKarxaFw&usqp=CAU)'}}>
HTML/CSS Design 1
</CardTitle>
<CardText>My College HTML CSS Project Designs</CardText>
<CardActions>
<Button colored>Github</Button>
<Button colored>Codepen</Button>
<Button colored>Live-Demo</Button>
</CardActions>
<CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGszn_VeGsVqXL1pViuI_Tj72cECWKarxaFw&usqp=CAU)'}}>
HTML/CSS Design 1
</CardTitle>
<CardText>My College HTML CSS Project Designs</CardText>
<CardActions>
<Button colored>Github</Button>
<Button colored>Codepen</Button>
<Button colored>Live-Demo</Button>
</CardActions>
<CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
</Grid>    <Grid>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGszn_VeGsVqXL1pViuI_Tj72cECWKarxaFw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGszn_VeGsVqXL1pViuI_Tj72cECWKarxaFw&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGszn_VeGsVqXL1pViuI_Tj72cECWKarxaFw&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
</Grid>
    </div>
  )
}else if(this.state.activeTab ===3){
  return(/*Nodejs*/
    <div><h4>My Nodejs Projects</h4>
    <Grid>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMT8tGZQPBOqeaFnTLzqFUHCD_-C-a8m8TAw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>

    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMT8tGZQPBOqeaFnTLzqFUHCD_-C-a8m8TAw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMT8tGZQPBOqeaFnTLzqFUHCD_-C-a8m8TAw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>
    </Grid>
    <Grid>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMT8tGZQPBOqeaFnTLzqFUHCD_-C-a8m8TAw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>

    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMT8tGZQPBOqeaFnTLzqFUHCD_-C-a8m8TAw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMT8tGZQPBOqeaFnTLzqFUHCD_-C-a8m8TAw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>
    </Grid><Grid>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMT8tGZQPBOqeaFnTLzqFUHCD_-C-a8m8TAw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>

    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMT8tGZQPBOqeaFnTLzqFUHCD_-C-a8m8TAw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMT8tGZQPBOqeaFnTLzqFUHCD_-C-a8m8TAw&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>
    </Grid>

    </div>
  )
}else if(this.state.activeTab ===4){
  return(/*ReactJs*/
    <div><h4>My Reactjs Projects</h4>
    <Grid>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJefLipi-7peLh7eODq92HaESvOCaUMzHnQ&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>

    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJefLipi-7peLh7eODq92HaESvOCaUMzHnQ&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>
    <Cell col={3} style={{margin:'auto'}}>
    <Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJefLipi-7peLh7eODq92HaESvOCaUMzHnQ&usqp=CAU)'}}>
      HTML/CSS Design 1
      </CardTitle>
      <CardText>My College HTML CSS Project Designs</CardText>
      <CardActions>
      <Button colored>Github</Button>
      <Button colored>Codepen</Button>
      <Button colored>Live-Demo</Button>
      </CardActions>
      <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
    </Card>
    </Cell>
</Grid>
<Grid>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJefLipi-7peLh7eODq92HaESvOCaUMzHnQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>

<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJefLipi-7peLh7eODq92HaESvOCaUMzHnQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJefLipi-7peLh7eODq92HaESvOCaUMzHnQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
</Grid><Grid>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJefLipi-7peLh7eODq92HaESvOCaUMzHnQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>

<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJefLipi-7peLh7eODq92HaESvOCaUMzHnQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
<Cell col={3} style={{margin:'auto'}}>
<Card shadow={5}style={{minWidth:'300', margin:'auto'}}>
<CardTitle style={{color:'#fff', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJefLipi-7peLh7eODq92HaESvOCaUMzHnQ&usqp=CAU)'}}>
  HTML/CSS Design 1
  </CardTitle>
  <CardText>My College HTML CSS Project Designs</CardText>
  <CardActions>
  <Button colored>Github</Button>
  <Button colored>Codepen</Button>
  <Button colored>Live-Demo</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}><IconButton name="share" /></CardMenu>
</Card>
</Cell>
</Grid>
    </div>
  )
}
}
  render(){
    return(
      <div>  <Navigation><Link className="bread-crumbs" to="/">Home&nbsp;&nbsp;</Link>

      <Link className="bread-crumbs" to="/projects"> /&nbsp;&nbsp;Projects</Link></Navigation>
      <div className="category-tabs">
       <Tabs activeTab={this.state.activeTab} onChange={(tabID)=> this.setState({activeTab: tabID})} ripple>
        <Tab>HTML/CSS</Tab>
        <Tab>Javascript</Tab>
        <Tab>Photoshop</Tab>
        <Tab>Nodejs</Tab>
        <Tab>Reactjs</Tab>
       </Tabs>
       <section >
       <Grid >
       <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
        </Cell>
        </Grid>
       </section>
      </div>
      </div>
    );
  }
}

export default Projects;
