import { useState } from "react";
import { GiftBox } from "../components/GiftBox";
import { LoveMessage } from "../components/LoveMessage";

const Index = () => {
  const [isBoxOpened, setIsBoxOpened] = useState(false);

  const handleBoxOpen = () => {
    setIsBoxOpened(true);
  };

  return (
    <div className="relative">
      {!isBoxOpened ? (
        <GiftBox onOpen={handleBoxOpen} />
      ) : (
        <LoveMessage />
      )}
    </div>
  );
};

export default Index;
