import { loadingArrow } from "../assets/icons"

const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <span className="animate-spin">{loadingArrow}</span>
    </div>
  )
}

export default Loading
