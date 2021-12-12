function Book({title, img, author, link}){
    return(
      <article className="articleCon">   
      <a href={link}><img src={img} alt="book"/>
      </a>
      <h1>{title}</h1>
      <p>{author}</p>
      </article>
  
    )
  }

  export default Book;