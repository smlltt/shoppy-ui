import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./components/header";
import { Providers } from "./providers";
import { checkAuthentication } from "./auth/check-authentication";
import { logout } from "./auth/logout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authenticated = await checkAuthentication();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers authenticated={authenticated}>
          <CssBaseline />
          <Header logout={logout} />
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
