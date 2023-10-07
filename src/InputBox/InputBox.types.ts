import { type InputHTMLAttributes } from 'react'

export interface FloatingInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  validate?: (value: string) => boolean
  label?: string
  placeholder?: string
  onChange?: (value: string | any) => void
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
  icon?: any
  required?: boolean
  isFloating?: boolean
  disabled?: boolean
  labelBackground?: string
  textColor?: string
  primaryColor?: string // Add primaryColor prop
  secondaryColor?: string // Add secondaryColor prop
}