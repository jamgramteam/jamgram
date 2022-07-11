import { User } from "@firebase/auth";

export const userState = () => useState<User>('user', () => null)