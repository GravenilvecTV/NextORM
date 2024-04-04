"use server"

import { getAllPosts, createNewPost } from "@/actions/post"
import { getUserById, getAllUsers } from "@/actions/user"

const AddPostForm = async () => {

    const selectedUser = await getUserById(1)
    const allUsers = await getAllUsers()
    const allPosts = await getAllPosts()

    const submit = async (data) => {
        "use server"

        const newPost = await createNewPost({
            title: data.get('title'),
            content: data.get('content'),
            authorId: data.get('authorId')|1
        })

        revalidatePath('/blog')
        console.log('Article ajouté')
    }

    return (
        <form action={submit}>
            <input type="text" name="title" placeholder="Titre du sujet" />
            <textarea name="content">Ceci est un texte d'exemple</textarea>
            <select name="authorId" >
                {
                    allUsers ? (
                        allUsers.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))
                    ) : (
                        <option value="">Aucun utilisateur</option>
                    )
                }
            </select>
            <button type="submit">Ajouter le post</button>
        </form>
    )
}

export default AddPostForm