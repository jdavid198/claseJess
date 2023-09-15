import PropTypes from 'prop-types'

export const FirstApp=({title,subtitle}) =>{
    return (
      <div>
        <h1>{title}</h1>
        <h1>{subtitle+2}</h1>
      </div>
    )
  }
  FirstApp.propTypes={
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.number
  }
