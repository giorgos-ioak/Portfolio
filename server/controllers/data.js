export function createNewData(req, res) {
  const data = req.body;

  console.log('The data is: ', data);

  res.status(201).json({ message: 'Data received successfully', data });
};  