import * as jwt from 'jsonwebtoken';
import { AuthInterface } from '../types/AuthInterface';

export async function sign(user: AuthInterface) {
    const token = await jwt.sign(user, process.env['JWT_TOKEN'] || '')

    return token;
}

export async function decode(token: string) {
    const user = await jwt.decode(token)

    return user;
}

export async function verify(token: string) {
    const user = await jwt.verify(token, process.env['JWT_TOKEN'] || '')

    return user;
}
