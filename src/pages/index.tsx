import Link from 'next/link'
import "~/pages/style.css"

export default function Index() {
  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
