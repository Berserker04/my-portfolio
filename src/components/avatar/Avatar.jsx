import React from 'react'

import avatar from "../../assets/images/avatar.jpg"
import "./styles.scss"

export const Avatar = () => {
  return (
      <div className="avatar">
          <img src={avatar} alt="avatar" />
    </div>
  )
}
