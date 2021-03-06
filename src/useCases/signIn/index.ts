import { SignInController } from './SignInController';
import { SignInUseCase } from './SignInUseCase';
import { MongoDbUsersRepository } from '../../repositories/implements/MongoDbUsersRepository';
import { MongoDbRefreshTokenRepository } from '../../repositories/implements/MongoDbRefreshTokenRepository';
import { Auth } from '../../helpers/Auth';

const usersRepository = new MongoDbUsersRepository()
const refreshTokenRepository = new MongoDbRefreshTokenRepository()
const auth = new Auth(
    refreshTokenRepository,usersRepository
)

const signInUseCase = new SignInUseCase(
    usersRepository,refreshTokenRepository,auth
)

const signInController = new SignInController(
    signInUseCase
)
export{signInController,signInUseCase}