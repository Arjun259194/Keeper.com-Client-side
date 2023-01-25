import React from "react"

export interface ButtonElement extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}
