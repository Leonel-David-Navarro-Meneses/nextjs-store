"use client"
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {
    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles)

    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
    })

    console.log(buttonStyles);
    return(
        <section className={styles.Description}>
          <button onClick={handleClick} className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
            <Image 
            src="/images/description.jpeg"
            alt="products marketplace"
             fill
             placeholder='blur'
             blurDataURL={PLACEHOLDER_IMAGE}
            />
            </div>    
            
            <div className={styles.Description__text}> 
            <h2> La imagen fue ramdon ya que no sabia cual poder </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quod officiis rerum id mollitia, veritatis consequuntur nihil sint doloremque soluta quam in incidunt blanditiis maxime rem dicta ea! Dignissimos, dolorum.</p>
            </div>
            </button> 
        </section>
    )
}