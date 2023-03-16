import Header from './componentes/Header';
import MainContainer from './componentes/MainContainer';
import Aside from './componentes/sidebar';

import './Style/componentes/curriculo.scss';

function App() {

  return (
    <div id="curriculo">
      <Header/>
      <Aside />
      <MainContainer />
    </div>
  )
}

export default App
