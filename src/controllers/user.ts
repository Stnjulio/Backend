        // src/controllers/user.ts
        import { NextFunction, Request, Response } from "express";
        import userService from "../services/user";

        const create = async (req: Request, res: Response, next: NextFunction ) => {
            try {
                const result = await userService.create(req.body);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        }

        const list = async (req: Request, res: Response, next: NextFunction ) => {
            try {
                const result = await userService.list();
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        }

        const detail = async (req: Request, res: Response, next: NextFunction ) => {
            try {
                const { id } = req.params;
                const result = await userService.detail(id as string);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        }

        const update = async (req: Request, res: Response, next: NextFunction ) => {
            try {
                const { id } = req.params;
                const result = await userService.update(id as string, req.body);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        }

        const remove = async (req: Request, res: Response, next: NextFunction ) => {
            try {
                const { id } = req.params;
                const result = await userService.remove(id as string);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        }

        const userController = {
            create,
            list,
            detail,
            update,
            remove
        };

        export default userController