import Link from 'next/link';
import './layout.sass';

export default ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <nav>
        <ul>
          <Link href="/">main</Link>
          <Link href="/word">words</Link>
        </ul>
      </nav>

      {children}
    </body>
  </html>
);
