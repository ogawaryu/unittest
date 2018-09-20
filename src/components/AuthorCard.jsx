// @flow
import React from 'react'

type Props = {
  userName: String,
  onClick: Function
}
const AuthorCard = ({ userName = '', onClick }: Props) => (
  <div className='author-card'>
    <p className='name'>{userName}</p>
    <button className='button' onClick={onClick}>Atualizar</button>
  </div>
)

export default AuthorCard
