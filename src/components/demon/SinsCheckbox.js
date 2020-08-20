import React, { useState, useEffect } from 'react'
import {
  Label,
  Input,
  Circle,
  CircleChecked
} from '../../styled/SinsCheckBoxStyled'
import { CloseIcon } from '../icons/IconsComponents'

const SinsCheckbox = ({ onChange, value, count }) => {
  const [check, setCheck] = useState(false)
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    if (
      value - count === 0
      || value - count < 0
      && value <= count
    ) {
      setCheck(true)
      setDisable(true)
    }

  }, [count, value])

  return (
    <label>
      <Input
        checked={check}
        disabled={disable}
        onChange={onChange}
        type="checkbox"
        value={value} />
      {!check
        ? (<Circle />)
        : (<CircleChecked />)}
    </label>
  )
}

export default SinsCheckbox