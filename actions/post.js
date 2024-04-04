"use server"

import prisma from "@/prisma/script"

export const getAllPosts = async () => {
    return await prisma.post.findMany({ 
        select: {
            id: true,
            title: true,
            content: true,
            author: true,
        }
    })
}
export const createNewPost = async (post) => {
    return await prisma.post.create({
        data: post,
    })
}