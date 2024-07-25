import bcrypt from "bcryptjs";

export const handler = async (event) => {
    const numSaltRounds = 8;

    password = event.password;

    const hashedPassword = await bcrypt.hash(password, numSaltRounds);

    const response = {
        statusCode: 200,
        body: JSON.stringify("Hashed Password: " + hashedPassword)
    };

    return response
}