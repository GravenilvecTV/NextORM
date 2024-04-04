import { getAllPosts } from "@/actions/post"

const AllPostList = async () => {

    const allPosts = await getAllPosts()

    return (
        <section>
            {
                allPosts.map((post) => (
                    <p>{post.author.name} {post.content}</p>
                ))
            }
        </section>
    )
}

export default AllPostList