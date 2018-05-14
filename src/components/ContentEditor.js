import React, { Component } from 'react'
import FormBlock from './FormBlock'
import FormField from './FormField'
import DropBox from './DropBox'
import Divider from './misc/Divider'
import withStore from './hocs/withStore'
import { fileTypeData } from '../data/contentData'
import _ from 'lodash'

class ContentEditor extends Component {
  constructor() {
    super()
    this.state = {
      importData: null, // Data of dropped directory
      exportData: {
        Format: '1.3',
        ConfigSchema: {},
        Changes: []
      }
    }
  }

  componentDidMount() {
    console.log('Made with by 🤔 Bouhm')

    // Firefox still doesn't support custom scrollbar css :(
    if (!window.chrome || !window.chrome.webstore)
      console.log('Please use Chrome for optimal 𝒜 𝐸 𝒮 𝒯 𝐻 𝐸 𝒯 𝐼 𝒞 𝒮')
  }

  handleFileDrop = importData => {
    this.setState({ importData })
  }

  // Fields that are dependent on the Action
  renderActionFields = (value, name, fullPath) => {
    let fields

    if (value === 'Load')
      fields = (
        <div>
          <FormField field="FromFile" />
        </div>
      )
    else if (value === 'EditImage')
      fields = (
        <div>
          <FormField field="FromFile" />
          <FormField field="FromArea" />
          <FormField field="ToArea" />
          <FormField field="PatchMode" />
        </div>
      )
    else if (value === 'EditData')
      fields = (
        <div>
          <FormField field="Fields" />
          <FormField field="Entries" />
        </div>
      )

    return (
      <FormBlock>
        <FormField
          field="Action"
          value={value}
          name={name}
          fullPath={fullPath}
        />
        <FormField field="Target" />
        {fields}
        <FormField field="LogName" />
        <FormField field="Enabled" />
        <FormField field="When" />
      </FormBlock>
    )
  }

  renderForm = () => {
    const { importData } = this.state
    const lineStyle = { borderLeft: 0 }

    return (
      <div>
        <FormField style={lineStyle} field="Format" value="1.3" />
        <Divider
          borderStyle={{ border: 'none' }}
          dividerStyle={{ width: 'calc(100% - 3em)' }}
        />
        {/*<FormField title="This one's a bit more complex not sure how to simplify it" field="ConfigSchema" />*/}
        <FormField style={lineStyle} field="Changes" />

        {_.map(importData, (item, i) => {
          const fullPath = item
          const paths = fullPath.split('/')
          const file = paths.pop().split('.')

          const type = file.pop()
          const name = file.pop()
          const parent = paths.pop()
          const value = this.getActionForFile(type, name, parent)

          return (
            <div key={i}>
              {this.renderActionFields(value, name, fullPath)}
              <Divider
                dividerStyle={{ left: '1em', width: 'calc(100% - 5em)' }}
              />
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="content-editor">
        <form className="content-form scrollbar">
          {this.state.importData ? (
            this.renderForm()
          ) : (
            <DropBox onDrop={this.handleFileDrop} />
          )}
        </form>
      </div>
    )
  }
}

const WrappedComponent = withStore(ContentEditor)
export default WrappedComponent
