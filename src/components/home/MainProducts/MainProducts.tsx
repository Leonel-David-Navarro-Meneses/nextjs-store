import Image from 'next/image'
import styles from './MainProducts.module.sass'

const getProducts = async () => {
    try {
        const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
          headers: new Headers({
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
          })
        })
        // throw new Error('Error');
        // const { products } = await response.json()
        // return products
      } catch (error) {
        console.log(error)
      }
}
export const MainProducts = async () => {
    try {
        const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
          headers: new Headers({
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
          })
        })
        // throw new Error('Error');
        // const { products } = await response.json()
        // return products
      } catch (error) {
        console.log(error)
      }
}    