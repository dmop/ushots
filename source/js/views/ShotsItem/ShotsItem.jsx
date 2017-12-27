import React from "react";
import { Grid, Card, Icon, Image } from "semantic-ui-react";
import { Component } from "react";
import { getShot } from "../../actions/app";
import { connect } from "react-redux";

class ShotsItem extends Component {
  componentWillMount() {
    this.props.getShot(4040135);
  }
  
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  //   this.props.getShot(id);
  // }


  render() {
    if (!this.props.shot) return null;

    return (
      <Card>
        <Image src={this.props.shot.images.normal} />
        <Card.Content>
          <Card.Header>{this.props.shot.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              Updated at {this.props.shot.updated_at}
            </span>
          </Card.Meta>
          <Card.Description>
            <a href={`https://dribbble.com/${this.props.shot.team.name}`}>
              {this.props.shot.team.name}
            </a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <Icon name="eye" />
                {this.props.shot.views_count}
              </Grid.Column>
              <Grid.Column>
                <Icon name="chat" />
                {this.props.shot.comments_count}
              </Grid.Column>
              <Grid.Column>
                <Icon name="heart" />
                {this.props.shot.likes_count}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return { shot: state.shots.shot };
}
export default connect(mapStateToProps, { getShot })(ShotsItem);
