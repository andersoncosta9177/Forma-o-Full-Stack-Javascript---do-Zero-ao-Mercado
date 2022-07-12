import React from 'react'
// import style from './style.css'
import Header from './Header'
import Content from './Content'
import Card from './Card'
import Cards from './Cards.js'
function App() {
  return (

    <>
      <Header titulo="Curso de java" subtitulo="Aprenda java hoje" />

      <Content titulo="Bem vindo">

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>


        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>


        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <Cards>
          <Card
            imagem="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg"
            titulo="titulo 1"
            texto=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been "
          />
          <Card
            imagem="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg"
            titulo="titulo 1"
            texto=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been "
          />

          <Card
            imagem="https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg"
            titulo="titulo 1"
            texto=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been "
          />

        </Cards>
      </Content>
    </>




  )
}

export default App