import bcrypt from 'bcrypt';

const saltRounds = 10;

async function hashPassword(plainPassword : string) {
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
        throw error;
      }
}

async function verifyPassword(plainPassword: string, hashedPasswordFromDb: string) {
  try {
        const match = await bcrypt.compare(plainPassword, hashedPasswordFromDb);
        return match; // true if passwords match, false otherwise
      } catch (error) {
        console.error("Error comparing passwords:", error);
        throw error;
      }
    }   

 export { hashPassword, verifyPassword };   