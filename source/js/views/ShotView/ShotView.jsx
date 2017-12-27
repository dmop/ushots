import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Item,
  Button
} from "semantic-ui-react";
import { Component } from "react";
import { getShot } from "../../actions/app";
import { connect } from "react-redux";
import Comments from "../Comments/Comments";

class ShotView extends Component {
  //   componentWillMount() {
  //     this.props.getShot(4040135);
  //     console.log(this.props.shot);
  //   }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getShot(id);
  }

  render() {
    if (!this.props.shot) return null;

    return (
      <div>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <Header style={{ fontSize: "1.5em" }} as="h1">
              <Image
               
                avatar
                size="large"
                src={this.props.shot.user.avatar_url}
              />
              {this.props.shot.title}
            </Header>
            <div>
              by &ensp;
              <a href={this.props.shot.user.html_url}>
                {this.props.shot.user.name}
              </a>
              &ensp; for &ensp;
              <a href={this.props.shot.team.html_url}>
                {this.props.shot.team.name}
              </a>
              &ensp; on &ensp;
              {this.props.shot.created_at}
            </div>

            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column floated="right" width={8}>
                  <Image
                    bordered
                    rounded
                    size="large"
                    src={this.props.shot.images.teaser}
                  />
                </Grid.Column>

                <Grid.Column width={4}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    We Help Companies and Companions
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    We can give your company superpowers to do things that they
                    never thought possible. Let us delight your customers and
                    empower your needs... through pure data analytics.
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.props.shot.description
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Comments commentList={this.props.shot.comments_url} />
          </Container>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { shot: state.shots.shot };
}
export default connect(mapStateToProps, { getShot })(ShotView);
