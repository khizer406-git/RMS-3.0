import { hashPassword } from "@/actions/getHashPassword";
import { serverSchemaValidator } from "@/actions/serverSchemaValidator";
import sequelize from "@/db/sequlize";
import { SignUpFormValues as FormValues } from "@/formValues";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Parse request data
        const data: FormValues = await request.json();

        // Validate data
        const isValid = await serverSchemaValidator(data, {} as FormValues);

        if (!isValid) {
            return NextResponse.json({ message: 'Insufficient data to create user' }, { status: 400 });
        }

        const connection = await sequelize.authenticate();
        console.log('Connection has been established successfully.',connection);


        // Destructure data for clarity
        const { firstName, lastName, email, password } = data;
        const created_at = new Date();
        const updated_at = new Date();

        const hashedPassword = await hashPassword(password);
        
        // Execute query
        const [results] = await sequelize.query(
            'INSERT INTO users ("firstName", "lastName", "email", "password","created_at","updated_at") VALUES (:firstName, :lastName, :email, :hashedPassword, :created_at, :updated_at)',
            {
                replacements: { firstName, lastName, email, hashedPassword, created_at, updated_at },
            }
        );
        // Check if row was inserted successfully
        if (results) {
            return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
        } else {
            return NextResponse.json({ message: 'Failed to create user' }, { status: 400 });
        }

    } catch (error) {
        // Handle unexpected errors
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Error processing request', error: error }, { status: 500 });
    }
}