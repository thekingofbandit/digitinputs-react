import React, { useEffect, useRef } from 'react'
import styles from './Digit.module.css'
import PropTypes from 'prop-types'

export function Digit({
  className,
  index,
  value,
  onDigitChange,
  focused,
  hidden
}) {
  const digitRef = useRef(null)

  useEffect(() => {
    focused && digitRef.current.focus()
  }, [focused])

  const handleChange = (event) => {
    onDigitChange(index, event.target.value)
  }

  const validateDigit = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.target.value = ''
      event.preventDefault()
    }
  }

  return (
    <input
      className={className || styles.digit}
      name={`digit-index-${index}`}
      type={hidden ? 'password' : 'text'}
      autoComplete='off'
      value={value || ''}
      ref={digitRef}
      maxLength={1}
      onChange={handleChange}
      pattern='[0-9]*'
      inputMode='tel'
      onKeyPress={validateDigit}
      onKeyUp={validateDigit}
    />
  )
}

Digit.propTypes = {
  className: PropTypes.string
}
