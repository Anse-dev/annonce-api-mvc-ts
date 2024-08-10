import { Request, Response } from "express";
import { AuthService } from "../services/AuthService"
import { formatResponse } from "../utils/helpers";

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }


    async register(req: Request, res: Response): Promise<void> {

        const { username, email, password } = req.body;
        try {
            const user = await this.authService.register(username, email, password)
            res.status(201).json(formatResponse(201, user, 'User created'))
        } catch (error) {
            res.status(500).json(formatResponse(500, [], " error"))
        }
    }
}