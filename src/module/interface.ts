import React from "react"

export interface ButtonElement extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}
interface BaseProps {
  route: string
  start: boolean
}

type GetProps = {
  method: "GET" | "HEAD"
  data?: never
}

type PostProps = {
  method: "POST" | "PUT" | "DELETE"
  data: object
}

type ConditionalProp = GetProps | PostProps

export type Props = BaseProps & ConditionalProp

export type FetchReturn = {
  data: any | undefined
  loading: boolean
  refresh: () => void
  statusCode: number
}
