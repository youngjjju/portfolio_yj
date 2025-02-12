import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 폰트 추가 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/pretendard/css/pretendard.css"
        />
      </head>
      <body className="bg-[rgb(255,255,255)] font- font-pretendard">
        {/* 전체에 Pretendard 폰트 적용 */}
        {children}
      </body>
    </html>
  );
}
