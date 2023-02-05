const express = require('express')
const router = express.Router()
const {getTeams, setTeam, deleteTeam, updateTeam} = require('../controllers/teamController.js')


router.route('/').get(getTeams).post(setTeam)
router.route('/:id').delete(deleteTeam).put(updateTeam)


module.exports = router