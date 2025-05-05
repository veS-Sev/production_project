import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useEffect, useState } from 'react'
import cls from './Input.module.scss'
import type { InputHTMLAttributes } from 'react'
import type { Mods } from '@/shared/lib/classNames/classNames'
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  type?: string
  placeholder?: string
  autofocus?: boolean
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  Input.displayName = 'Input'
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props

  const [isFocus, setIsFocus] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const isCaretVisible = isFocus && !readonly
  useEffect(() => {
    if (autofocus) {
      setIsFocus(true)
    }
  }, [autofocus])
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  const onFocus = () => {
    setIsFocus(true)
  }

  const onBlur = () => {
    setIsFocus(false)
  }
  const mods: Mods = {
    [cls.readonly]: readonly
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={classNames(cls.placeholder)}>{`${placeholder}>`}</div>
      )}
      <div className={classNames(cls.caretWrapper, {}, [className])}>
        <input
          onSelect={onSelect}
          onFocus={onFocus}
          onBlur={onBlur}
          type={type}
          readOnly = {readonly}
value={value}
          onChange={onChangeHandler}
          className={classNames(cls.Input, mods, [className])}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            style={{ left: `${caretPosition * 9}px` }}
            className={classNames(cls.caret, {}, [className])}
          ></span>
        )}
      </div>
    </div>
  )
})
