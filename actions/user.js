"use server"
import prisma from "@/prisma/script"

export const updateUser = async (user) => {
    return await prisma.user.update({
        where: { 
            id: user.id 
        },
        data: {
            name: user.name
        }
    })
}

export const deleteUserById = async (id) => {
    return await prisma.user.delete({
        where: { 
            id: id 
        },
    })
}

export const getAllUsers = async () => {
    return await prisma.user.findMany({ 
        select: {
            id: true,
            name: true,
            email: true
        }
    })
}

export const getUserById = async (id) => {
    return await prisma.user.findFirst({ 
        where: { 
            id: id 
        },
        select: {
            name: true,
            email: true
        }
    })
}

export const createNewUser = async () => {
    return await prisma.user.create({
        data: {
            name: 'Alice3',
            email: 'alice3@prisma.io',
        },
    })
}