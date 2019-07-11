import React from 'react'
import { connect } from 'react-redux'
import { getCategory, activateCategory } from '../actions'

let Category = ({ categoryName, categoryString, onClick, active }) => (
    <div>
        <div id="categoryName" onClick={onClick}>
            <p>{categoryName}</p>
        </div>
    </div>
)


const mapStateToProps = (state) => ({
    active: state.category
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(getCategory(ownProps.categoryString));
    }
})

Category = connect(
    mapStateToProps,
    mapDispatchToProps
)(Category)

export default Category;