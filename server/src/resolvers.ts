import { createPet, getPets } from "./db";
import { Pet, PetInput } from "./models/Pet";

export default {
  Query: {
    pets: (): Pet[] => {
      return getPets();
    },
  },
  Mutation: {
    addPet: (_parent: unknown, args: { pet: PetInput }): Pet => {
      return createPet(args.pet);
    },
  },
};
