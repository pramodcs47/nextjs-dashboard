import '@/app/ui/global.css';
import { inter,lustina,playWrite } from '@/app/ui/fonts/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   console.log("",lustina.className) 
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children} */}
        {/* <body >{children} */}
        <body className={`${playWrite.className} antialiased`}>{children}
        
      </body>
    </html>
  );
}
