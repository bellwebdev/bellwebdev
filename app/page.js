import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/macbook-with-code.jpg"
      />
      <div>Welcome to Bell Web Dev!</div>
    </main>
  );
}
