// @flow
import React from 'react'

type Props = {}
type State = {
  title: string
}

class CheckStateResult extends React.Component<Props, State> {
  state = {
    titulo: 'Antigo titulo'
  }

  changeTextLabel = () => this.setState({ title: 'Novo titulo' })

  render () {
    let { title } = this.state
    return (
      <div className='container'>
        <label className='title'>{title}</label>
        <button className='button' onClick={this.changeTextLabel}>Mudar o titulo</button>
      </div>
    )
  }
}

export default CheckStateResult
