import React from 'react';
import styles from './Image.module.css';

function withHref(el: any, href?: string) {
  if (!href) {
    return el
  }

  return (
    <a className={styles.href} href={href} target='_blank' rel='noreferrer'>
      {el}
    </a>
  )
}

export default function Image({ src, width = '100%', height, alt, title, onClick, href }: any) {
  return (
    <div className={styles.container}>
      {withHref(<img
        src={src}
        width={width}
        height={height}
        alt={alt}
        onClick={onClick}
        className={styles.img}
      />, href)}
      {title ? (
        <div className={styles.title}>
          {title}
        </div>
      ) : null}
    </div>
  )
}
