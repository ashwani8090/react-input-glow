import type React from 'react'
import { type InputHTMLAttributes } from 'react'

export interface FloatingInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  placeholder?: string
  type?: string
  className?: string
  inputClassName?: string
  labelPosition?: 'inline' | 'outside' | 'inside'
  labelClassName?: string
  borderRadius?: string
  height?: string
  width?: string
  borderColor?: string
  borderWidth?: string
  iconPosition?: 'left' | 'right'
  icon?: React.ReactNode | any
  required?: boolean
  isFloating?: boolean
  disabled?: boolean
  labelBackground?: string
  labelTextColor?: string
  textColor?: string
  primaryColor?: string // Add primaryColor prop
  errorText?: string // Add errorText prop
  errorTextColor?: string // Add errorTextColor prop
  errorTextClassName?: string
  errorLabelTextColor?: string
  toggleOffIcon?: React.ReactNode
  toggleOnIcon?: React.ReactNode
  legendClassName?: string
}
