import React, { useState } from 'react'

interface RadioProps {
  /** label for radio button option */
  children: string
  /** additional classes */
  className?: string
  /** Input value */
  value: string
  /** Automatic */
  optionId?: number
  /** Automatic */
  groupId?: string
  /** Automatic */
  selected?: string
  /** Automatic */
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

export const Radio = ({ children, className, groupId, optionId, value, handleChange, selected }: RadioProps) => {
  return (
    <label className={className} htmlFor={`${groupId}_${optionId}`}>
      {children}
      <input
        type="radio"
        id={`${groupId}_${optionId}`}
        value={value}
        onChange={event => {
          // Since handleChange is an "optional" prop we need to check that it exists before invoking
          return handleChange && handleChange(event)
        }}
        checked={selected === value}
      />
    </label>
  )
}

interface GroupProps {
  /** The label for the set of radio buttons (e.g. a question) */
  label: string
  /** A unique id for the group */
  groupId: string
  /** Should be a Radio component */
  children: React.ReactElement<RadioProps> | React.ReactElement<RadioProps>[]
}

export const RadioGroup = ({ label, groupId, children }: GroupProps) => {
  const [selected, setSelected] = useState('')

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSelected(event.currentTarget.value)
  }
  return (
    <div>
      {label}
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { groupId, optionId: index, handleChange, selected })
      })}
    </div>
  )
}
