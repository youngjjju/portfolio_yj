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
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=IBM+Plex+Sans+KR&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="w-full flex flex-col relative items-center h-auto">
        <div className="w-full flex flex-col items-center">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
