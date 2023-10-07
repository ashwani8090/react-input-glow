/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type FloatingInputProps } from './InputBox.types'

const InputContainer = styled.div<{ width?: string }>`
  position: relative;
  margin-bottom: 10px;
  width: ${({ width }) => (width ? `${width}` : '99%')};
`

const Input = styled.input<{
  hasValue: boolean
  labelPosition: 'inline' | 'outside' | 'inside'
  isFocused: boolean
  className: string
  borderRadius?: string
  height?: string
  width?: string
  borderColor?: string
  borderWidth?: string
  iconPosition?: string
  disabled?: boolean
  textColor?: string
  primaryColor?: string
}>`
  background-color: transparent;
  height: ${({ height }) => height ?? '2.5rem'};
  width: 100%;
  border: none;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem 0px;
  padding-left: ${({ iconPosition }) =>
    iconPosition === 'left' ? '2.5rem' : '12px'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0.375rem'};
  border: ${({ borderWidth, borderColor }) =>
    `${borderWidth ?? '1px'} solid ${borderColor ?? 'gray'}`};
  transition: border-color 0.2s;
  color: ${({ textColor, primaryColor }) => textColor ?? '#000000'};
  &:focus {
    border-color: ${({ primaryColor }) =>
    primaryColor ?? 'var(--primary-color)'};
  }
  &::placeholder {
    font-size: 0.75rem; /* Adjust the font size as needed */
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 1;
      -webkit-text-fill-color: rgba(0, 0, 0, 0.38);
      cursor: not-allowed;
      border-color: rgb(0 0 0 / 7%);
    `}
  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`

export const Label = styled.label<{
  labelPosition: 'inline' | 'outside' | 'inside'
  hasValue: boolean
  isFocused: boolean
  className?: string
  borderRadius?: string
  height?: string
  width?: string
  borderColor?: string
  borderWidth?: string
  iconPosition?: 'left' | 'right'
  isFloating?: boolean
  primaryColor?: string
  secondaryColor?: string
}>`
  position: absolute;
  font-size: ${({ hasValue, isFocused, isFloating }) =>
    isFloating ? '0.90rem' : hasValue || isFocused ? '0.90rem' : '0.875rem'};
  color: ${({ isFocused, primaryColor, secondaryColor }) =>
    isFocused
      ? primaryColor ?? 'var(--primary-color)'
      : secondaryColor ?? 'gray'};
  background-color: transparent;
  padding: 0 4px;
  transition:
    top 0.2s,
    font-size 0.2s,
    left 0.2s;

  ${({ className }) =>
    className &&
    css`
      ${className}
    `};

  ${({ hasValue, isFocused, labelPosition, isFloating, iconPosition }) => {
    const isNotFloating = !isFloating

    if (isNotFloating) {
        return css`
          top: -20px;
          left: 0px;
        `
    }

    if (hasValue || isFocused) {
      if (labelPosition === 'inline') {
        return css`
          top: -8px;
          left: ${iconPosition === 'left' ? '13px' : '12px'};
        `
      } else if (labelPosition === 'inside') {
        return css`
          top: 3px;
          left: ${iconPosition === 'left' ? '24px' : '8px'};
        `
      } else {
        return css`
          top: -20px;
          left: 0px;
        `
      }
    } else {
      return css`
        top: 40%;
        left: ${iconPosition === 'left' ? '30px' : '12px'};
      `
    }
  }};
`

const IconContainer = styled.div<{ iconPosition?: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ iconPosition }) =>
    iconPosition === 'right'
      ? css`
          right: 12px;
        `
      : css`
          left: 12px;
        `}
  cursor: pointer;
`

const Asterisk = styled.span<{ isFocused: boolean }>`
  color: ${({ isFocused }) => (isFocused ? 'red' : '')};
  margin-left: 4px;
`

const Legend = styled.div<{
  labelBackground?: string
  width?: number
}>`
  width: ${({ width }) => `${width ?? 70}px`};
  position: absolute;
  background: ${({ labelBackground }) => labelBackground ?? 'white'};
  top: 0px;
  left: 13px;
  height: 1px;
`

function FloatingInput ({
  name,
  validate,
  label,
  placeholder,
  onChange,
  type,
  className,
  labelPosition = 'inline',
  inputClassName = '',
  labelClassName = '',
  borderRadius,
  height,
  width,
  borderColor,
  borderWidth,
  iconPosition = 'right',
  icon = true,
  required = false,
  isFloating = true,
  disabled = false,
  labelBackground = 'white',
  textColor,
  primaryColor = 'black',
  secondaryColor = 'gray',
  ...props
}: FloatingInputProps) {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [labelWidth, setLabelWidth] = useState<number>(100)
  let placeholderValue: string = label ?? ''
  useEffect(() => {
    setLabelWidth(
      (document.getElementById(`label-${name}`)?.offsetWidth ?? 100) ?? 100
    )
  }, [document.getElementById(`label-${name}`), name, label])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange?.(newValue)
  }

  const hasValue = inputValue.trim() !== ''

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  if (isFloating && (isFocused || hasValue)) {
    placeholderValue = placeholder ?? label ?? ''
  } else if (!isFloating) {
    placeholderValue = placeholder ?? label ?? ''
  } else {
    placeholderValue = ''
  }

  return (
    <InputContainer className={className} width={width}>
      {icon && iconPosition === 'left' && (
        <IconContainer iconPosition="left">{icon}</IconContainer>
      )}
      <Input
        id={name}
        name={name}
        placeholder={placeholderValue}
        type={type === 'password' && passwordVisible ? 'text' : type}
        onBlur={() => {
          setIsFocused(false)
        }}
        onFocus={() => {
          setIsFocused(true)
        }}
        onChange={handleInputChange}
        hasValue={hasValue}
        value={inputValue}
        labelPosition={labelPosition}
        isFocused={isFocused}
        className={inputClassName}
        borderRadius={borderRadius}
        height={height}
        borderColor={borderColor}
        borderWidth={borderWidth}
        iconPosition={iconPosition}
        disabled={disabled}
        textColor={textColor}
        primaryColor={primaryColor}
        {...props}
      />
      {!!(type === 'password' && icon) && !disabled && (
        <IconContainer iconPosition="right" onClick={togglePasswordVisibility}>
           {passwordVisible
             ? (
            <FontAwesomeIcon icon={faEyeSlash} />
               )
             : (
            <FontAwesomeIcon icon={faEye} />
               )}
        </IconContainer>
      )}
      {isFloating && labelPosition === 'inline' && (isFocused || hasValue) && (
        <Legend labelBackground={labelBackground} width={labelWidth} />
      )}
      {label && (
        <Label
          htmlFor={name}
          id={`label-${name}`}
          labelPosition={labelPosition}
          hasValue={hasValue}
          isFocused={isFocused}
          className={labelClassName}
          borderRadius={borderRadius}
          height={height}
          borderColor={borderColor}
          borderWidth={borderWidth}
          iconPosition={iconPosition}
          isFloating={isFloating}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        >
          {label}
          {required && <Asterisk isFocused={isFocused}>*</Asterisk>}
        </Label>
      )}
      {icon && iconPosition === 'right' && (
        <IconContainer iconPosition="right">{icon}</IconContainer>
      )}
    </InputContainer>
  )
}

export default FloatingInput