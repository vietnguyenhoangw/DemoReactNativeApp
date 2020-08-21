import { useEffect, useRef } from 'react'

export const isUrl = (string) => {
    const regex = /^((http|https|ftp):\/\/)/
    return regex.test(string)
}

export const usePrevious = (value) => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    }, [value])
    return ref.current
  }