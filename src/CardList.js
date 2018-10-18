import React from 'react'
import Card from './Card'

/**
 * [CardList description]
 * @method CardList
 * @param  {[type]} robots [description]
 */
const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, index) => {
          return (
            <Card
              key={index}
              id={ robots[index].id }
              name={ robots[index].name }
              email={ robots[index].email }
            />
          )
        })
      }
    </div>
  )
}

export default CardList
