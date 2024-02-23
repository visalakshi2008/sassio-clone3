import React from 'react'


const Item = ({ title, Links }) => {
  return (
    <ul>
    <h1 className="mb-1 font-semibold">{title}</h1>
    {Links.map((link) => (
      <li key={link.name}>
        <a
          className="text-black duration-300 text-2xl
        cursor-pointer leading-6"
          href={link.link}
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
  )
}

export default Item