import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function GET() {
    const res = await prisma.project.findMany();

    return Response.json(res);
}

export async function POST(req: Request) {
    const {
        title,
        description,
        owner_name,
        owner_address,
        rating,
        review,
        contact_phone,
        carbon_price,
        status,
        start_date,
        end_date,
        volume,
        scale_per_year,
        primary_developer
    } = await req.json();

    const res = await prisma.project.create({
        data: {
            title,
            description,
            owner_name,
            owner_address,
            rating,
            review,
            contact_phone,
            carbon_price,
            status,
            start_date: new Date(start_date),
            end_date: new Date(end_date),
            volume,
            scale_per_year,
            primary_developer
        }
    });

    return Response.json(res);
}