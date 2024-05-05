import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {

    const res = await prisma.guilgee.findUnique({
        where: {
            id: Number(params.id)
        }
    });

    return Response.json(res);
}
