import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function POST(req: Request) {
    // let Query = {};
    // Query.where = {};

    // if (req.) {
    //     Query.where.server_id = Number(req.params.id);
    //     Query.where.employee = req.query;
    // }

    const { status } = await req.json();

    const res = await prisma.project.findMany({
        where: {
            status
        }
    });

    return Response.json(res);
}