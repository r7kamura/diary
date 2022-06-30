import Head from "next/head";
import Link from "next/link";
import { basePath } from "../settings";
import { type ReactNode } from "react";

const siteTitle = "r7kamura/diary";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${basePath}/feed.xml`}
        />
      </Head>
      <header className="container mx-auto max-w-2xl px-8 py-12">
        <nav>
          <p>
            <Link href="/">
              <a className="font-bold text-gray-900 visited:text-gray-900 dark:text-gray-300 dark:visited:text-gray-300">
                {siteTitle}
              </a>
            </Link>
          </p>
        </nav>
      </header>
      <main className="container mx-auto max-w-2xl px-8 py-12 shadow-md bg-white dark:bg-gray-900">
        {children}
      </main>
      <footer className="container mx-auto max-w-2xl px-8 py-12 text-sm">
        <nav>
          <ul className="flex flex-row gap-6 justify-center">
            {[
              {
                url: "/",
                text: "Home",
              },
              {
                url: "/feed.xml",
                text: "RSS",
              },
              {
                url: "https://github.com/r7kamura/diary",
                text: "Code",
              },
            ].map(({ text, url }) => {
              return (
                <li key={url}>
                  <Link href={url}>
                    <a className="text-gray-900 visited:text-gray-900 dark:text-gray-300 dark:visited:text-gray-300">
                      {text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </footer>
    </div>
  );
}
