
import styles from './App.module.scss'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'

function App() {

  return <>
    <Header />
    <Layout  className={styles.body}> 
      <Card />
      <Card />
      <Card /><Card />
      <Card />
      <Card />
    </Layout>
  </> 
    
}

export default App
