import { ILogin } from '../../Interfaces/ILogin';

const loginData: ILogin = {
    email: 'samuel@hotmail.com',
    password: '1234567'
}

const loginDataWithinEmail = {
    password: '1234567'
}

const loginDataWithinPassword = {
    email: 'samuel@gmail.com'
}

export default { loginData, loginDataWithinEmail, loginDataWithinPassword };
