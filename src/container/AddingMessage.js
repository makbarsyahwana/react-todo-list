import { connect } from "react-redux"
import addedMessage from "../action"
import addMessage from "../component/addMessage"

const mapStateToProps = state => ({
  messages: state
})

const mapDispatchToProps = dispatch => ({
  submitNewMessage: newMessage => dispatch(addedMessage(newMessage))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addMessage)
