import { ReactElement } from "react";
import "./globals.css";
interface Props {
  children: ReactElement;
}
export default async function RootLayout({ children }: Props) {
  return children;
}
