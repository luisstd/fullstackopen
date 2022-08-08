const dummy = (blogs) => {
  blogs = 1
  return blogs
}

const totalLikes = (blogs) => {
  return blogs.reduce((accumulator, blog) => {
    return accumulator + blog.likes
  }, 0)
}

const favoriteBlog = (blogs) => {
  let i

  // Initialize maximum element
  let max = blogs[0].likes

  // Traverse array elements
  // from second and compare
  // every element with current max
  for (i = 1; i < blogs.length; i++) {
    if (blogs[i].likes > max)
      max = blogs[i].likes
  }

  return blogs.find(blog => blog.likes === max)
}




module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
