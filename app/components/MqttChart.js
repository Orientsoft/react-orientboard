import React from 'react'
import Highcharts from 'react-highcharts/bundle/highcharts'
import mqtt from 'mqtt'
import {Modal, Button} from 'react-bootstrap'

class MqttChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      connected: false
    , showModal: false
    }
  }

  componentDidUpdate() {
    this.chart = this.refs.chart.getChart()
  }

  componentDidMount() {
    this.chart = this.refs.chart.getChart()
    this.mqtt = mqtt.connect('ws://ytl.borgnix.com:2883')
    this.mqtt.on('disconnect', () => {
      console.log('disconnect')
    })
    this.mqtt.on('close', () => {
      console.log('close')
    })
    this.mqtt.on('error', (e) => {
      console.log(e)
    })
    this.mqtt.on('connect', () => {
      if (!this.state.connect) {
        this.state.connect = true
        this.mqtt.on('message', (topic, message) => {
          message = message.toString()
          JSON.parse(message).map((data, i) => {
            this.chart.series[i].setData(data)
          })
        })
      }
      this.mqtt.subscribe('board-mqtt-test')
      console.log('mqtt connected')
    })
  }

  openModal() {
    this.setState({
      showModal: true
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  toJson() {
    return {
      config: this.props.config
    }
  }

  render() {
    return (
      <div style={{height: '100%'}}>
      <Highcharts config={this.props.config} ref='chart'
          style={{height: '100%'}}
          onDoubleClick={() => {
            console.log('double')
            this.openModal()
          }}/>
      <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>

            <h4>Tooltips in a modal</h4>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

    )
  }
}

MqttChart.propTypes = {
  config: React.PropTypes.object
}

MqttChart.defaultProps = {
  config: {}
}

export default MqttChart
