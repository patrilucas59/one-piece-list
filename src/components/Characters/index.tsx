import axios from "axios";
import { ElementType, useEffect, useState } from "react";

type Character = {
  name: string;
  image: string;
  bounty?: string;
  dream: string;
  icon: ElementType
};

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/v2/characters/en")
      .then((res) => setCharacters(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {characters.map((char, idx) => (
        <div key={idx} className="p-4 border rounded-lg shadow">
          <img
            src={char.image}
            alt={char.name}
            className="w-full h-auto rounded"
          />
          <h2 className="mt-2 font-bold text-xl">{char.name}</h2>
          {char.icon && <char.icon className="text-2x1 mt-2"/>}
          {char.bounty && <p>Bounty: {char.bounty}</p>}
        </div>
      ))}
    </div>
  );
};

export default Characters;
