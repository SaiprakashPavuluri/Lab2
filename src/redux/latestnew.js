const ADD_BOOKS = 'ADD_BOOKS';
const BASE_URL = 'https://newsapi.org/v2/everything?q=tesla&from=2022-09-08&sortBy=publishedAt&apiKey=8d2915deeee64c39bab16b88a7bd7ace';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [
        ...state,
        { 
          id: action.id,
          img: action.img,
          title: action.title,
          des: action.des,
          url: action.url,
        },
      ];

    default:
      return state;
  }
};

export const additem = (id, img, title, des,url) => ({
  type: ADD_BOOKS,
  id,
  img,
  title,
  des,
  url,
});


export async function fetchBooks(dispatch) {
  const response = await fetch(BASE_URL)
  const data = await response.json();
  console.log(data)
  data.articles.forEach((element) => dispatch(additem( 

 element.author,
 element.urlToImage,
 element.title,
element.description,
element.url

  )));
}


export default bookReducer;
