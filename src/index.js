import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
    title: 'I Love You ',
    author: 'Shannon Hepworth',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
    title: 'You to the Moon and Back',
    author: 'King Hepworth',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
]

function BookList() {
  return (
    <section>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('hello world')
  }
  return (
    <article>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4 style={{ color: '#617d98' }}>{author}</h4>
      <button type='button' onClick={() => clickHandler()}>
        Buy Now
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
