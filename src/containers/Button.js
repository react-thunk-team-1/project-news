import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

let Button = ({ getPosts, category }) => (
  <button
    onClick={() => { getPosts(category)}}
    className="top-news-button" >
    Get top news
  </button>
);

const mapStateToProps = (state) => ({
  category: state.category
})

const mapDispatchToProps = {
  getPosts: fetchPosts
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
