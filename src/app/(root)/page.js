import Image from "next/image";
import HomeContainer from "./_container/HomeContainer";

export default function Home() {
  return (
    <div>
      <h2 className="text-4xl text-red-600">
        <HomeContainer />
      </h2>
    </div>
  );
}
