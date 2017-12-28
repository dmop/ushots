import React, { Component } from "react";
import ShotView from "../ShotView/ShotView";
import { Grid, Image, Container } from "semantic-ui-react";
import ShotsItem from "../ShotsItem/ShotsItem";
import { connect } from "react-redux";
import { getShots } from "../../actions/app";

class ShotList extends Component {
  componentWillMount() {
    this.props.getShots();
    console.log(this.props.shots);
  }

  renderGridList() {
    if (!this.props.shots) this.props.getShots();
    var group = [];
    var data = this.props.shots;
    var n = 4;

    for (var i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++;
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }

    console.log("Group", group);

    return group.map(shot => {
      console.log("body shot",shot[1].team.name)
      return (
        <Grid relaxed columns={4}>
          <Grid.Column>
            <ShotsItem
              image={shot[0].images.normal}
              title={shot[0].title}
              updated_at={shot[0].updated_at}
              team_name={shot[0].team.name}
              views_count={shot[0].views_counts}
              comments_count={shot[0].comments_count}
              likes_count={shot[0].likes_count}
            />
          </Grid.Column>
          <Grid.Column>
            <ShotsItem
              image={shot[1].images.normal}
              title={shot[1].title}
              updated_at={shot[1].updated_at}
              team_name={shot[1].team.name}
              views_count={shot[1].views_counts}
              comments_count={shot[1].comments_count}
              likes_count={shot[1].likes_count}
            />
          </Grid.Column>
          <Grid.Column>
            <ShotsItem
              image={shot[2].images.normal}
              title={shot[2].title}
              updated_at={shot[2].updated_at}
              team_name={shot[2].team.name}
              views_count={shot[2].views_counts}
              comments_count={shot[2].comments_count}
              likes_count={shot[2].likes_count}
            />
          </Grid.Column>
          <Grid.Column>
            <ShotsItem
              image={shot[3].images.normal}
              title={shot[3].title}
              updated_at={shot[3].updated_at}
              team_name={shot[3].team.name}
              views_count={shot[3].views_counts}
              comments_count={shot[3].comments_count}
              likes_count={shot[3].likes_count}
            />
          </Grid.Column>
        </Grid>
      );
    });
  }

  render() {
    if (!this.props.shots) return null;
    return (
      <Container className="container-list">{this.renderGridList()}</Container>
    );
  }
}

function mapStateToProps(state) {
  return { shots: state.shots.all };
}
export default connect(mapStateToProps, { getShots })(ShotList);
