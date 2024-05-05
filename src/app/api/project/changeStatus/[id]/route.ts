import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function PATCH(req: Request, { params }: { params: { id: string } }) {

    const { newStatus } = await req.json();

    const res = await prisma.project.update({
        where: {
            id: Number(params.id)
        },
        data: {
            status: newStatus
        }
    });

    return Response.json(res);
}