import React,{Component} from 'react';

class ViewResume extends Component {

  state = {
    resume: {}
  }

  componentDidMount() {
    this.setState({resume: localStorage})
    console.log(this.state.resume)
  }

    render() {
      return (
          <h1>Hello</h1>
      )
    }
}

export default ViewResume;