import {useState, useEffect} from 'react'
const Card = (prop) => {
    const [data, setData] = useState('')
    setData('newData')// this will cause to re-render

  return (
    <section>
        <a href={prop.url}></a>
      <h2>{prop.heading}</h2>
      <img src={prop.img} alt={prop.alt}/>
      <p>{prop.text}</p>
    </section>
  );
};