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
    if (blogs[i].likes > max) max = blogs[i].likes
  }

  return blogs.find((blog) => blog.likes === max)
}

const initialBlogs = [
  {
    title: 'Terrific Testing',
    author: 'Awesome Author',
    url: 'https://test.testing',
    likes: 12,
  },
  {
    title: 'Terrible Testing',
    author: 'Arrested Author',
    url: 'https://test.testing',
    likes: 4,
  },
  {
    title: 'Truthful Testing',
    author: 'Another Author',
    url: 'https://test.testing',
    likes: 45,
  },
  {
    title: 'Trying out Testing',
    author: 'Alfons Author',
    url: 'https://test.testing',
    likes: 23,
  },
]

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  initialBlogs,
}
