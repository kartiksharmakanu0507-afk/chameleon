import "./globals.css";

import { CartProvider } from "@/context/CartContext";

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        <ThemeProvider>

          <CartProvider>

            {children}

          </CartProvider>

        </ThemeProvider>

      </body>

    </html>

  );

}