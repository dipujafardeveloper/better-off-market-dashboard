import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import antTheme from "@/theme/antTheme";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
// @ts-ignore: side-effect import without type declarations
import "yet-another-react-lightbox/styles.css";
import Providers from "@/lib/Provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard | BetterOffMarket",
    template: "%s | BetterOffMarket",
  },
  description: "This is Official Application Dashboard for BetterOffMarket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Providers>
          <AntdRegistry>
            <ConfigProvider theme={antTheme}>
              <Toaster position="top-center" richColors />
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
