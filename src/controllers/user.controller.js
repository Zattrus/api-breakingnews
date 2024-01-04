const soma = (req, res) => {
    const soma = 1 + 2;

    res.json({ soma: soma });
}

module.exports = { soma }