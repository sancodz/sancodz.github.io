import type { FC } from "react"
import Link from "next/link"

interface LogoProps {
  variant?: "default"
}

const Logo: FC<LogoProps> = ({ variant = "default" }) => {
  return (
    <Link href="/" className="text-3xl font-normal">
      SN
    </Link>
  )
}

export default Logo

