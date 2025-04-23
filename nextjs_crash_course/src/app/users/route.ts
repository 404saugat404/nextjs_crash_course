export const user=[{
    name: "John Doe",
    age: 30,
    email: "john@example.com"
},
{
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com"
}
]

export async function GET() 
{
    return Response.json(user);
}

export async function POST(request:Request) 
{
    const body = await request.json()
    user.push(body); // Add the new user to the array
    return Response.json({ message: "User added successfully", user: body });
}