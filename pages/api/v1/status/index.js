function status(request, response) {
  response.status(200).json({ test: "funfou!" });
}

export default status;
