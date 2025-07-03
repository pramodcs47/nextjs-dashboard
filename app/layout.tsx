import '@/app/ui/global.css';
import { inter,lusitana,playWrite } from '@/app/ui/fonts/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   console.log("",lusitana.className) 
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children} */}
        {/* <body >{children} */}
        <body className={`${playWrite.className}  ${inter.className} antialiased`}>{children}
        
      </body>
    </html>
  );
}
