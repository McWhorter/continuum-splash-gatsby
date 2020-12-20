import React from 'react'
import { withPrefix } from 'gatsby'

const spritemap = `spritemap.svg`

const Icon = ({ id, label }) => (
  <svg className={`icon icon-${id}`} aria-label={label} focusable="false" aria-hidden={label ? null : 'true'}>
    <use xlinkHref={withPrefix(`${spritemap}#sprite-${id}`)}></use>
  </svg>
)

Icon.defaultProps = {
  id: null,
  label: null,
}

export default Icon
