import type { ReactNode } from "react";
import "./styles.css";

export const metadata = {
  title: "Pomodo",
  description: "App de foco",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Pomodo</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
