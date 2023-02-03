import '@/app/styles/globals.css'

import {ReactNode} from "react";
import {BaseHeader} from "@/components/header/BaseHeader";
import {HeaderNavigation} from "@/components/navigation/HeaderNavigation";

const RootLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <html lang="jp">
      <head />
      {children}
    </html>
  )
}

export default RootLayout