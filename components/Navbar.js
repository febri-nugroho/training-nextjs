import Link from "next/link";

export default function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link href={{pathname: "/heroes", query: {title: 'Heroes List'}}} as={'/heroes'}>
                        <a>Avatar</a>
                    </Link>
                </li>
                <li>
                    <Link href={{pathname: "/heroes", query: {title: 'Heroes List'}}} as={'/heroes'}>
                        <a>Home</a>
                    </Link>
                </li>
            </ul>
        </nav>

        <style jsx>{`
            nav {
                display: flex; /* 1 */
                justify-content: space-between; /* 2 */
                padding: 1rem 2rem; /* 3 */
                background: #cfd8dc; /* 4 */
              }
              
              nav ul {
                display: flex; /* 5 */
                list-style: none; /* 6 */
              }
              
              nav li {
                padding-left: 1rem; /* 7! */
              }
        `}</style>
    </div>
    
  )
}
