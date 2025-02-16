// layout.tsx
import Header from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
