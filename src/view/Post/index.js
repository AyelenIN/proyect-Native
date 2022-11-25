import { useEffect, useContext } from "react"
import { StyleSheet, ScrollView } from "react-native"

import Post from "../../components/Posteos/post"
// import PostInput from "../../components/Post-Input/postInput"

import { SessionContext } from "../../components/Context/contextSession"

import { REACT_APP_BACKEND as backend} from "@env" 

const Posteos = () => {

  const { state: { posts }, dispatch } = useContext(SessionContext)

  const getPosts = async () => {
    const response = await fetch(`${backend}/api/post/obtener`)

    const data = await response.json()

    dispatch({type: '@POSTS/LOAD', payload: data.encontrados.reverse()})
 
  }

  useEffect(()=>{
    getPosts()
  }, [])

  
  return (
    <ScrollView style={styles.container}>
      {/* <PostInput /> */}
      {
        posts &&
        posts.map((post, index) => <Post key={index} {...post} />)
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  link: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Posteos