import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { JSX } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="h-full bg-background font-[epilogue] text-black-blue">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
