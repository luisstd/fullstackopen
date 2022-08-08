const dummy = (blogs) => {
  blogs = 1
  return blogs
}

const totalLikes = (blogs) => {
  return blogs.reduce((accumulator, blog) => {
    return accumulator + blog.likes
  }, 0)
}




module.exports = {
  dummy,
  totalLikes,
}
