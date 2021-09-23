import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    async execute({name, email, admin = false, password} : IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error(`E-mail é necessário!`);
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error(`E-mail ${email} já em uso!`);
        }

        const passHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passHash
        });

        await usersRepository.save(user);

        return user;
    }

}

export { CreateUserService };