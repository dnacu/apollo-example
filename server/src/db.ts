import { Pet, PetInput } from "./models/Pet";
import { generateRandomID } from "./utils/generateRandomID";

let collections = {
  pets: [
    {
      id: "pet_wqf0rv0im6",
      name: "댕댕이100",
    },
    {
      id: "pet_wqf0rv0im2",
      name: "댕댕이2",
    },
    {
      id: "pet_wqf0rv0im3",
      name: "댕댕이3",
    },
    {
      id: "pet_wqf0rv0im4",
      name: "댕댕이4",
    },
    {
      id: "pet_wqf0rv0im5",
      name: "댕댕이5",
    },
    {
      id: "pet_wqf0rv0i24",
      name: "댕댕이6",
    },
    {
      id: "pet_wqf0rv0im7",
      name: "댕댕이7",
    },
    {
      id: "pet_wqf0rv0im8",
      name: "댕댕이8",
    },
    {
      id: "pet_wqf0rv0im9",
      name: "댕댕이9",
    },
    {
      id: "pet_wqf0rv0i10",
      name: "댕댕이10",
    },
    {
      id: "pet_wqf0rv0i11",
      name: "댕댕이11",
    },
    {
      id: "pet_wqf0rv0i12",
      name: "댕댕이12",
    },
    {
      id: "pet_wqf0rv0i13",
      name: "댕댕이13",
    },
    {
      id: "pet_wqf0rv0i14",
      name: "댕댕이14",
    },
    {
      id: "pet_wqf0rv0i15",
      name: "댕댕이15",
    },
    {
      id: "pet_wqf0rv0i16",
      name: "댕댕이16",
    },
    {
      id: "pet_wqf0rv0i17",
      name: "댕댕이17",
    },
    {
      id: "pet_wqf0rv0i18",
      name: "댕댕이18",
    },
    {
      id: "pet_wqf0rv0i19",
      name: "댕댕이19",
    },
    {
      id: "pet_wqf0rv0i20",
      name: "댕댕이20",
    },
    {
      id: "pet_wqf0rv0i21",
      name: "댕댕이21",
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
