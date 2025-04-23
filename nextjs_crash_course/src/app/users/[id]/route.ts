import { user } from "../route";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const foundUser = user.find((u, index) => index.toString() === params.id);
    if (foundUser) {
        return new Response(JSON.stringify(foundUser), { status: 200 });
    } else {
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }
}

