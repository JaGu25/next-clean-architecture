import NavBar from "@/shared/components/navbar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar/>
      {children}
    </>
  );
}
