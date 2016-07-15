import React from 'react'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'


@observer
@autobind
export default class AlertDismissable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      alertVisible: true,
      title: '',
      msg: '',
      type: 'success',
    }
  }


  showalert() {
    this.setState({ alertVisible: true, title: '标题', msg: '消息' })
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle={this.state.type} onDismiss={this.handleAlertDismiss}>
          <h4>{this.state.title}</h4>
          <p>{this.state.msg}</p>
          <p>
          </p>
        </Alert>
      )
    }

    return (
       <Button onClick={this.showalert}>测试</Button>
    )
  }

  handleAlertDismiss() {
    this.setState({ alertVisible: false })
  }

  handleAlertShow() {
    this.setState({ alertVisible: true })
  }
}
