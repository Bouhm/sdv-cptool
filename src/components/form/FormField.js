import React, { Component } from 'react'
import _ from 'lodash'

export default class FormField extends Component {
  constructor(props) {
    super()
    this.state = {
      value: props.fieldData
    }
  }

  handleInputChange = e => {
    const { blockData, field, handleFieldDataChange } = this.props
    let newValue; 

    if (e.target.type === 'number') {
      const re = /^[0-9\b]+$/;
      if (!re.test(e.target.value))
        return
    } 

    if (e.target.name) 
      newValue = {[e.target.name]: e.target.value}

    this.setState({ value: e.target.value })
    handleFieldDataChange(field, newValue)
  }

  getInputForField = () => {
    const { field } = this.props
    const { value } = this.state
    let input

    switch (field) {
      case 'Action':
        input = (
          <select
            className="field-input"
            value={value}
            onChange={this.handleInputChange}
          >
            <option>Load</option>
            <option>EditImage</option>
            <option>EditData</option>
          </select>
        )
        break
      case 'PatchMode':
        input = (
          <select
            className="field-input"
            value={value}
            onChange={this.handleInputChange}
          >
            <option>Replace</option>
            <option>Overlay</option>
          </select>
        )
        break
      case 'Enabled':
        input = (
          <select
            className="field-input"
            value={value}
            onChange={this.handleInputChange}
          >
            <option>true</option>
            <option>false</option>
          </select>
        )
        break
      case 'FromArea':
        input = (
          <div style={{ display: 'inline' }}>
            <span className="inner-field">
              X<input
                className="field-input"
                value={value}
                type="number"
                name="X"
                onChange={this.handleInputChange}
              />
            </span>
            <span className="inner-field">
              Y<input
                className="field-input"
                value={value}
                type="number"
                name="Y"
                onChange={this.handleInputChange}
              />
            </span>
            <span className="inner-field">
              Width<input
                className="field-input"
                value={value}
                type="number"
                name="Width"
                onChange={this.handleInputChange}
              />
            </span>
            <span className="inner-field">
              Height<input
                className="field-input"
                value={value}
                type="number"
                name="Height"
                onChange={this.handleInputChange}
              />
            </span>
          </div>
        )
        break
      case 'ToArea':
        input = (
          <div style={{ display: 'inline' }}>
              <span className="inner-field">
              X<input
                className="field-input"
                value={value}
                type="number"
                name="X"
                onChange={this.handleInputChange}
              />
            </span>
            <span className="inner-field">
              Y<input
                className="field-input"
                value={value}
                type="number"
                name="Y"
                onChange={this.handleInputChange}
              />
            </span>
            <span className="inner-field">
              Width<input
                className="field-input"
                value={value}
                type="number"
                name="Width"
                onChange={this.handleInputChange}
              />
            </span>
            <span className="inner-field">
              Height<input
                className="field-input"
                value={value}
                type="number"
                name="Height"
                onChange={this.handleInputChange}
              />
            </span>
          </div>
        )
        break
      case 'Target':
      case 'FromFile':
      case 'LogName':
      case 'Fields':
      case 'When':
      case 'Format':
        input = (
          <input
            className="field-input"
            type="text"
            value={value}
            spellCheck="false"
            onChange={this.handleInputChange}
          />
        )
        break
      default:
        break
    }

    return input
  }

  render() {
    const { title, style, field } = this.props
    let input = this.getInputForField()

    return (
      <pre title={title} className="line" style={style} tabIndex="0">
        <div className="field-label">{field}</div>
        {input}
      </pre>
    )
  }
}
