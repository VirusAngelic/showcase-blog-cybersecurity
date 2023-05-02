'use client'
import {CacheProvider} from "@chakra-ui/next-js";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {mainTheme} from "@/app/styles/theme/theme";
import React from "react";
import '@fontsource/inter/variable.css'
import '@fontsource/noto-mono/'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <ColorModeScript initialColorMode={mainTheme.config.initialColorMode} />
        <CacheProvider>
            <ChakraProvider theme={mainTheme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
