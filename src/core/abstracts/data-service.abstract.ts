import { IGenericRepositoryAbstract } from './generic-repository.abstract';
import { User } from '../entities/user.entity';

export abstract class IDataService {
  abstract user: IGenericRepositoryAbstract<User>;
}
