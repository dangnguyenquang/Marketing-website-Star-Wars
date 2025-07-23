export interface Character {
  id: string;
  name: string;
  birthYear: string;
  gender: string;
}

export interface AllPeopleResponse {
  allPeople: {
    people: Character[];
    totalCount: number;
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

