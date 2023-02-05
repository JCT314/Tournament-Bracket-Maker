
const getTeams = (req, res) => {
    res.status(200).json({message: 'Get team'})
}

const setTeam = (req, res) => {
    res.status(200).json({message: 'Set Team'})
}

const updateTeam = (req, res) => {
    res.status(200).json({message: 'Update Team'})
}

const deleteTeam = (req, res) => {
    res.status(200).json({message: 'Delete Team'})
}

module.exports = {
    getTeams, setTeam, updateTeam, deleteTeam
}