import { IUser, User } from "../models/UserModel";
import jwt from 'jsonwebtoken';

export class AuthService {


    async register(username: string, email: string, password: string): Promise<IUser> {
        const user = await User.create({ username, password, email })
        return user;
    }

    async login(email: string, password: string): Promise<string> {

        const user = await User.findOne({ email })
        if (!user) {
            throw new Error("User don't exist ")
        }
        const isMatched = await user.matchPassword(password)
        if (!isMatched) {
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        return token;
    }
}