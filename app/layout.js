export const metadata = {
  title: "Mini Rogue",
  description: "Simple Rogue Game"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
