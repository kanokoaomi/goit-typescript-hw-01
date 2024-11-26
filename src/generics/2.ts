type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top: Pick <AllType, "name" | "color">, bottom: Pick <AllType, "position" | "weight" >): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

const first = { name: "Apple", color: "Red", position: 1, weight: 150 };
const second = { name: "Apple", color: "Green", position: 2, weight: 100 };

const result = compare(first, second);
console.log(result);