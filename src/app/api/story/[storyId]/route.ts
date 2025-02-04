import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/client';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ storyId: string }> }
) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json('Unauthorized', { status: 500 });
  }

  const body = await req.json();

  const existingStory = await prisma.story.findUnique({
    where: {
      id: (await params).storyId,
    },
  });

  if (!existingStory) {
    return NextResponse.json('Story not found', { status: 404 });
  }

  const updatedStory = await prisma.story.update({
    where: {
      id: (await params).storyId,
    },
    data: {
      ...body,
    },
  });

  return NextResponse.json(updatedStory, { status: 201 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ storyId: string }> }
) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json('Unauthorized', { status: 500 });
  }

  const existingStory = await prisma.story.findUnique({
    where: {
      id: (await params).storyId,
    },
  });

  if (!existingStory) {
    return NextResponse.json('Story not found', { status: 404 });
  }

  await prisma.story.delete({
    where: {
      id: (await params).storyId,
    },
  });

  return NextResponse.json('Story deleted', { status: 201 });
}
