import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

interface ITagInterface {
    name: string
}

class CreateTagService {

    async execute({name} : ITagInterface) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Nome é necessário!");
        }

        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        if (tagAlreadyExists) {
            throw new Error(`Tag ${name} já cadastrado!`);
        }

        const tag = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tag);

        return tag;
    }

}

export { CreateTagService }