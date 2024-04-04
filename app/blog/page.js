"use server"

import { getUserById } from "@/actions/user"
import AddPostForm from "../components/add-post-form"
import AllPostList from "../components/all-post-list"

const BlogPage = async () => {

    const selectedUser = getUserById(1)

    return (
        <main>
            <h1>Bienvenue {selectedUser.name} sur mon blog</h1>

            {/* Formulaire d'ajout de post */}
            <AddPostForm/>

            {/* Afficher tout les articles/posts */}
            <AllPostList/>

        </main>
    )
}

export default BlogPage