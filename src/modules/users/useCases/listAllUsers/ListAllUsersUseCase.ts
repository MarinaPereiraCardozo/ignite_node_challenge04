import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({user_id}): User[] {

    const userExists = this.usersRepository.findById(user_id);

    if(!userExists){
      throw new Error("User do not exists!");
    }

    if(userExists.admin !== true){
      throw new Error("User is not an Admin!");
    }

    return this.usersRepository.list();
    
  }
}

export { ListAllUsersUseCase };
