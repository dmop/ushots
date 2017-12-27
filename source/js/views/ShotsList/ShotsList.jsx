import React, { Component } from "react";
import ShotView from "../ShotView/ShotView";
import { Grid, Image } from 'semantic-ui-react'
import ShotsItem from '../ShotsItem/ShotsItem';

export default class ShotList extends Component {
  renderGridList(){
    
  }
  
  render() {
    return (
      <Grid relaxed columns={4}>
        <Grid.Column style={{padding: "8em 8em 8em 8em"}}>
          <ShotsItem />
        </Grid.Column>
        <Grid.Column style={{padding: "8em 8em 8em 8em"}}>
          <ShotsItem />
        </Grid.Column>
        <Grid.Column style={{padding: "8em 8em 8em 8em"}}>
          <ShotsItem />
        </Grid.Column>
        <Grid.Column style={{padding: "8em 8em 8em 8em"}}>
          <ShotsItem />
        </Grid.Column>
      </Grid>
    );
  }
}
