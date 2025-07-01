import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getToken } from 'next-auth/jwt'

const prisma = new PrismaClient()

// Helper function to get the model based on resource
const getModel = (resource: string) => {
  const models: { [key: string]: any } = {
    users: prisma.user,
    events: prisma.event,
    news: prisma.news,
    members: prisma.member,
    resources: prisma.resource,
    contacts: prisma.contact
  }
  return models[resource]
}

// GET - List items
export async function GET(
  request: Request,
  { params }: { params: { resource: string } }
) {
  try {
    // Verify admin token
    const token = await getToken({ req: request as any })
    if (!token || token.role !== 'ADMIN') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const model = getModel(params.resource)
    if (!model) {
      return NextResponse.json({ message: 'Invalid resource' }, { status: 400 })
    }

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    // Build where clause based on search
    const where = search ? {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { title: { contains: search, mode: 'insensitive' } }
      ]
    } : {}

    // Get items with pagination
    const [items, total] = await Promise.all([
      model.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      model.count({ where })
    ])

    return NextResponse.json({
      items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('List error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - Create item
export async function POST(
  request: Request,
  { params }: { params: { resource: string } }
) {
  try {
    // Verify admin token
    const token = await getToken({ req: request as any })
    if (!token || token.role !== 'ADMIN') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const model = getModel(params.resource)
    if (!model) {
      return NextResponse.json({ message: 'Invalid resource' }, { status: 400 })
    }

    const data = await request.json()

    const item = await model.create({
      data: {
        ...data,
        createdBy: token.sub
      }
    })

    return NextResponse.json(item)
  } catch (error) {
    console.error('Create error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT - Update item
export async function PUT(
  request: Request,
  { params }: { params: { resource: string; id: string } }
) {
  try {
    // Verify admin token
    const token = await getToken({ req: request as any })
    if (!token || token.role !== 'ADMIN') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const model = getModel(params.resource)
    if (!model) {
      return NextResponse.json({ message: 'Invalid resource' }, { status: 400 })
    }

    const data = await request.json()

    const item = await model.update({
      where: { id: params.id },
      data: {
        ...data,
        updatedBy: token.sub
      }
    })

    return NextResponse.json(item)
  } catch (error) {
    console.error('Update error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE - Delete item
export async function DELETE(
  request: Request,
  { params }: { params: { resource: string; id: string } }
) {
  try {
    // Verify admin token
    const token = await getToken({ req: request as any })
    if (!token || token.role !== 'ADMIN') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const model = getModel(params.resource)
    if (!model) {
      return NextResponse.json({ message: 'Invalid resource' }, { status: 400 })
    }

    await model.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Item deleted successfully' })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 