import { Pet, PetInput } from "./models/Pet";
import { generateRandomID } from "./utils/generateRandomID";

let collections = {
  pets: [
    {
      id: "pet_wqf0rv0im6",
      name: "댕댕이",
    },
  ] as Pet[],
};

export const getPets = () => {
  return collections.pets;
};

export const getPetByID = (id: string): Pet | undefined => {
  return collections.pets.find((pet) => pet.id === id);
};

export const createPet = (pet: PetInput): Pet => {
  const newPet = {
    ...pet,
    id: generateRandomID("pet_"),
  };
  collections.pets.push(newPet);
  return newPet;
};
