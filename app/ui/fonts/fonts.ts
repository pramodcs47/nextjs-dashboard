import { Inter } from 'next/font/google';
import {  Lusitana } from 'next/font/google';
import {  Playwrite_IT_Moderna_Guides } from 'next/font/google';
import {  Michroma } from 'next/font/google';
import { preload } from 'react-dom';



export const inter = Inter({ subsets: ['latin'] });
export const lustina = Lusitana({ weight: "400",adjustFontFallback:true, preload:true, subsets: ['latin'] });
export const playWrite = Playwrite_IT_Moderna_Guides({weight: "400"})
export const michroma = Michroma({weight: "400"})


