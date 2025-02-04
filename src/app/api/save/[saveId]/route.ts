import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/client';

export async function DELETE(req: NextRequest, { params }: { params: { saveId: string } }) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json('Unauthorized', { status: 500 });
  }

  const existingSave = await prisma.save.findUnique({
    where: {
      id: (await params).saveId,
    },
  });

  if (!existingSave) {
    return NextResponse.json('Save not found', { status: 404 });
  }

  await prisma.save.delete({
    where: {
      id: (await params).saveId,
    },
  });

  return NextResponse.json('Save deleted', { status: 201 });
}
