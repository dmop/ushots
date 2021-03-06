import React from "react";
import { Grid, Card, Icon, Image } from "semantic-ui-react";
import { Component } from "react";
// import { getShot } from "../../actions/app";
// import { connect } from "react-redux";

class ShotsItem extends Component {
  // componentWillMount() {
  //   this.props.getShot(4040135);
  // }
  
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.getShot(id);
  // }


  render() {
    const props = this.props;
    if (!this.props) return null;
    return (
      <Card>
        <Image src={props.image} />
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              Updated at {props.updated_at}
            </span>
          </Card.Meta>
          <Card.Description>
            <a href={`https://dribbble.com/${props.team_name}`}>
              {props.team_name}
            </a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <Icon name="eye" />
                {props.views_count}
              </Grid.Column>
              <Grid.Column>
                <Icon name="chat" />
                {props.comments_count}
              </Grid.Column>
              <Grid.Column>
                <Icon name="heart" />
                {props.likes_count}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

// function mapStateToProps(state) {
//   return { shot: state.shots.shot };
// }
export default ShotsItem;
