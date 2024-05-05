import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

// export async function GET(req: Request, { params }: { params: { id: string } }) {
//     const res = await prisma.project.findUnique({

//     });

//     return Response.json(res);
// }

export async function GET(req: Request, { params }: { params: { ownerAddress: string } }) {

    const res = await prisma.project.findMany({
        where: {
            owner_address: params.ownerAddress
        }
    });

    return Response.json(res);
}