import React, { useState } from "react"

const useInput = (input: any) => {
  const [value, setValue] = useState(input),
    changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

  return { value, changeHandler, setValue }
}

export default useInput
