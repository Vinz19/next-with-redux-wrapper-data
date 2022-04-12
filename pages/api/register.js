
export default function handler(req, res) {
    const body = req.body
    if (!body.name || !body.lastName ) {
      return res.status(400).json({data: 'Name or LastName not found'})
    }

    res.status(200).json({Name: `${body.name}`, LastName: `${body.lastName}`})
  }