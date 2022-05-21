import Head from "next/head";
import Link from "next/link";
import { basePath } from "../settings";

const siteTitle = "r7kamura/diary";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${basePath}/feed.xml`}
        />
      </Head>
      <header>
        <nav>
          <p>
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </p>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/feed.xml">
                <a>RSS</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/r7kamura/diary">
                <a>Code</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
