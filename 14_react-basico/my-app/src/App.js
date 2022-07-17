import Header from './Header'
import React from 'react';
import Content from './Content';
import Card from './Card';
function App() {
  return (


    <>

      <Header titulo="Curso java" subtitulo="Aprenda java em 3 meses" />
      <Content titulo='bem vindo'>

        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
        </p>


        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
        </p>


        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
        </p>

        <Card
          imagem='https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg'
          titulo="titulo 1"
          texto="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece"
        />
        <Card
          imagem='https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg'
          titulo="titulo 1"
          texto="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece"
        />
      </Content>

    </>

  );
}

export default App;
