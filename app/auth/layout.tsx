import bg from "@/public/background.jpg";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${bg.src})`,
          height: "100vh",
          width: "100wh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="flex justify-center items-center"
      >
        {children}
      </main>
    </>
  );
}
