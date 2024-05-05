import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

// export async function POST(req: Request) {
//     const { project_id, owner_address, amount, title, description } = await req.json();

//     // console.log(receiver_id, sender_id, amount, title, description);

//     // console.log("aaaaa");

//     const res = await prisma.guilgee.create({
//         data: {
//             receiver_id,
//             sender_id,
//             created_at: new Date(),
//             amount,
//             title,
//             description
//         }
//     });

//     return Response.json(res);
// }

// export async function DELETE(req: Request) {
//     const { id } = await req.json();

//     const res = await prisma.guilgee.delete({
//         where: {
//             id
//         }
//     });

//     return Response.json(res);
// }

export async function GET() {
    const res = await prisma.guilgee.findMany();

    return Response.json(res);
}

// export async function GET(req: Request, { params }: { params: { id: number } }) {

//     const res = await prisma.guilgee.findUnique({
//         where: {
//             id: params.id
//         }
//     });

//     return Response.json(res);
// }

// GET:
// 1. GET duudah l um bol buh data
// 2. Admin zuvshuurugduugui GET
// 3. Admin zuvshuurtsn GET


// 1. Bugdiign avdag 1 get
// 2. id-aar ni avdag get


// 1. project get arr[{...}, {...}]
// admin project get arr[{...}, {...}]

// 2. 

// sdfghjuio  rtyuio 