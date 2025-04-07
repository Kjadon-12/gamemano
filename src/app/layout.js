
import "./globals.css";



export const metadata = {
  title: "Gamemano - Gaming Website",
  description: "Gamemano provides multiple games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
