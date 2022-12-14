const express = require('express')
const router = express.Router() 

const Park = require('../models/park')

router.get('/', (req, res) => {
  Park
    .findAll()
    .then(parks => res.json(parks))
    })

router.post('/', (req, res) => {
  const { name, image, address, parkfees, parklot, toilet, playground, bbq, foodcourt, trail, petfriendly, description } = req.body
    
  Park
    .create(name, image, address, parkfees, parklot, toilet, playground, bbq, foodcourt, trail, petfriendly, description)
    .then(park => res.json(park))
})

router.delete('/:id', (req, res) => {
  const parkId = req.params.id
    
  Park
    .delete(parkId)
    .then(() => res.json({ message: 'park successfully deleted' }))
})

router.patch('/:id', (req, res) => {
  const { name, image, address, parkfees, parklot, toilet, playground, bbq, foodcourt, trail, petfriendly, description } = req.body
  const { id } = req.params
    
  Park
    .update(id, name, image, address, parkfees, parklot, toilet, playground, bbq, foodcourt, trail, petfriendly, description)

    .then(park => res.json(park))
})

module.exports = router