interface ICreateUserDTO {
  first_name: string;
  last_name: string;
  email: string
}

interface IFindUserWithGamesDTO {
  user_id: string;
}

interface IFindUserByFullNameDTO {
  first_name: string;
  last_name: string;
}

export { ICreateUserDTO, IFindUserWithGamesDTO, IFindUserByFullNameDTO };
