import type { Metadata } from "next";
import "./globals.css";
import Outfit from "next/font/local";

const outfit = Outfit({
  src: "/fonts/Outfit-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Movies App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gpDGkul4kz7YIZ1KQgxQGDjt-bnrYJ1xXg&s"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Movies App</title>
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
