import axios from "axios";

export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

const MY_API_KEY = "aefc99666b8b4af1bef5a5fcb00b2328";

export const getCategory = category => dispatch => {
  dispatch({
    type: SELECT_CATEGORY,
    category
  });

  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${MY_API_KEY}`
    )
    .then(response => {
      dispatch(receivedPosts(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json.articles
});

// export function fetchPosts(category) {
//   return function(dispatch) {
//     dispatch(requestPosts());

//     return fetch(
//       `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${MY_API_KEY}`
//     )
//       .then(
//         response => response.json(),
//         error => console.log("An error occurred.", error)
//       )
//       .then(json => {
//         dispatch(receivedPosts(json));
//       });
//   };
// }
