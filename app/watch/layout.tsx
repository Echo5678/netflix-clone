export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body className="flex-grow">{children}</body>
    </>
  );
}
