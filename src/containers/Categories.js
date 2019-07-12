import React from "react";
import { connect } from "react-redux";
import { getCategory } from "../actions";

let Category = ({ categoryName, categoryString, onClick, active }) => (
  <div id="categoryName" onClick={onClick}>
    <p>{categoryName}</p>
  </div>
);

const mapStateToProps = state => ({
  active: state.category
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(getCategory(ownProps.categoryString));
  }
});

Category = connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);

export default Category;
