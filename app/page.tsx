import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello, world!</h1>
      <div>
        <Link href="/math/area">Area Calculator</Link>
      </div>
    </main>
  )
}
