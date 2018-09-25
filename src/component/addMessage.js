import React from "react"

class addMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      messages: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit() {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {this.state.messages.map((message, key) => {
            return <li key={key}>{message}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default addMessage
