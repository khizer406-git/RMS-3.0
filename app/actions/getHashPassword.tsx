import { saltRounds } from '@/utils/constants/constants';
import bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}