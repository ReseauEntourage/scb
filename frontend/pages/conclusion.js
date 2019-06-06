import Entete from "../components/Entete/Entete";
import React from "react";

import Menu from './../components/Menu/Menu'

class Index extends React.Component {

  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }
  
  render() {
    return (
      <div>Salut c'est la conclusion</div>
    );
  }
}

export default Index;