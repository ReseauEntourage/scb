import gql from 'graphql-tag'

const GET_ENTETE_PER_ID = gql`
    query AllEntete ($id: ID!) {
        parcour(id: $id) {
            couleur
            entete {
                Titre
                duree
                background {
                    url
                }
            }
        }
    }
`;

const GET_ENTETE_PER_SLUG = gql`
  query GetBySlug ($id: String!, $enumeration: String!) {
    parcours(where: { url_slug: $id }) {
      id
      couleur
      url_slug
      character_name
      personnage {
        url
      }
      entetes(where: { chapitre: $enumeration }){
        Titre
        duree
      	chapitre
        texte_personnage
        background {
          url
        }
    }
  }
}
`;

const GET_PARCOURS = gql`
  query GetCardData {
    parcours {
      Titre
      couleur
      couleur_2
      card_personnage { url }
      entete { duree }
      url_slug
    }
  }
`;

const GET_TEXT = gql`
  query GetCardData {
    parcour(id: "1") {
      textes {
        paragraphe
      }
    }
  }
`;

const GET_CUSTOM = gql`
  query GetOrder($id: String!, $order: String!, $chapitre: String!) {
  parcours(where: { url_slug: $id }) {
    Titre
    couleur
    url_slug
    personnage {
      url
    }
    character_name
    textes(where: { ordre: $order, chapitre: $chapitre }) {
      titre
      paragraphe
      ordre
    }
    videos(where: { ordre: $order, chapitre: $chapitre }) {
      Titre
      Texte
      url_video
      ordre
    }
    quotes(where: { ordre: $order, chapitre: $chapitre}) {
      titre
      paragraphe
      character_quote
      chapitre
      ordre
    }
  }
}
`;

const GET_ORDER = gql`
query GetOrder($id: String!, $chapitre: String!) {
  parcours(where: { url_slug: $id }) {
    Titre
    couleur
    url_slug
    personnage {
      url
    }
    textes(where: { chapitre: $chapitre }, sort: "ordre:asc") {
      ordre
      paragraphe
      titre
    }
    videos(where: { chapitre: $chapitre }, sort: "ordre:asc") {
      ordre
      Titre
      Texte
      url_video
      ordre
    }
    quotes(where: { chapitre: $chapitre }, sort: "ordre:asc") {
      ordre
      titre
      paragraphe
      character_quote
      chapitre
    }
  }
}
`;

const GET_MENU_INFO = gql`
query GetMenuInfo($slug: String!) {
  parcours(where: { url_slug: $slug }) {
    Titre
    url_slug
    textes(sort:"ordre:ASC"){
      id
      ordre
      titre
      chapitre
    }
    videos(sort: "ordre:ASC"){
      id
      Titre
      ordre
      chapitre
    }
    quotes(sort: "ordre:ASC"){
      id
      titre
      ordre
      chapitre
    }
  }
}
`;

const GET_TEXTE_INFO = gql`
query GetTexteInfo($slug: String!, $order: String!, $chapitre: String!) {
	parcours(where: {url_slug: $slug}) {
  	textes(where: {ordre: $order, chapitre: $chapitre}) {
      ordre
      titre
      paragraphe
    }
  }
}
`;

const GET_QUOTE_INFO = gql`
query GetTexteInfo($slug: String!, $order: String!, $chapitre: String!) {
	parcours(where: {url_slug: $slug}) {
  	quotes(where: {ordre: $order, chapitre: $chapitre}) {
      ordre
      titre
      paragraphe
    }
  }
}
`;

const GET_VIDEO_INFO = gql`
query GetTexteInfo($slug: String!, $order: String!, $chapitre: String!) {
	parcours(where: {url_slug: $slug}) {
  	videos(where: {ordre: $order, chapitre: $chapitre}) {
      ordre
      Titre
      Texte
      url_video
    }
  }
}
`;

export { 
  GET_ENTETE_PER_ID, 
  GET_ENTETE_PER_SLUG, 
  GET_PARCOURS, 
  GET_TEXT, 
  GET_ORDER, 
  GET_MENU_INFO, 
  GET_TEXTE_INFO, 
  GET_QUOTE_INFO,
  GET_VIDEO_INFO,
  GET_CUSTOM
}