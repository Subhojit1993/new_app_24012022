import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from '../../actions';
import QuestionSet from './SubComponents/QuestionSet';
import FinalDiv from './SubComponents/FinalDiv';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionSet: false,
      finalDiv: false
    };
  }

  componentDidMount() {
    let answers = [];
    let obj = {};
    if (localStorage.getItem("answers_subhojit_101") || localStorage.getItem("timeFinished_subhojit_101")) {
      answers = JSON.parse(localStorage.getItem("answers_subhojit_101") || "[]");
      obj = JSON.parse(localStorage.getItem("timeFinished_subhojit_101") || "{}");
      if (answers.length > 0 || obj.isFinished) {
        this.setState({
          questionSet: false,
          finalDiv: true
        });
      }
    }
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  };

  setFinalDiv = (e) => {
    this.setState({
      questionSet: false,
      finalDiv: true
    });
  };

  handleLogout = (e) => {
    // handing the exit button
    if (localStorage.getItem("answers_subhojit_101")) {
      localStorage.removeItem("answers_subhojit_101");
    }
    if (localStorage.getItem("timeFinished_subhojit_101")) {
      localStorage.removeItem("timeFinished_subhojit_101");
    }
    this.setState({
      questionSet: false,
      finalDiv: false
    });
  };

  render() {
    let getHeight = " height_100";
    let getBackground = " get_background_img";

    // Setting this component as the HOC and paving the way of the single page application

    let add_background = " background_22 get_box_shadow";
    let add_width = " width_80";
    let isComponent = (
      <QuestionSet
        setFinalDiv={this.setFinalDiv}
      />
    );

    if (this.state.finalDiv) {
      getHeight = "";
      isComponent = (
        <FinalDiv
          handleLogout={this.handleLogout}
        />
      );
    }

    return (
      <div className={"App flex_centarize" + getHeight + getBackground}>
        <div className={"center_align" + add_background + add_width}>
          {isComponent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);