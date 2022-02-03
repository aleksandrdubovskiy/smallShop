import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import ProductsList from "../app/screens/home/ProductsList";

const HomePage: NextPage = () => {
  return (
      <ProductsList />
  )
}

export default HomePage
