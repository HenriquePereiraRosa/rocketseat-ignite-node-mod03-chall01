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

class UserDTO {
  constructor(
    public first_name: string,
    public last_name: string,
    public email: string
  ) { }
}

export { ICreateUserDTO, IFindUserWithGamesDTO, IFindUserByFullNameDTO, UserDTO };
