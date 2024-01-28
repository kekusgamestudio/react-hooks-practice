export const CategoryCard = ( {title, square_image, counter} ) => {
  return (
    <blockquote className='blockquote text-center' >
      <p className='mb-1'>{title}</p>
      <img src={square_image} alt={title} className='img-thumbnail rounded-circle border-success'/>
      <footer>{ counter }</footer>
    </blockquote>
  )
}
