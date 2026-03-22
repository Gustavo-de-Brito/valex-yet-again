const createController = (req, res) => {
    try {
        res.sendStatus(501);
    } catch(err) {
        res.sendStatus(500);
    }
};

export default createController;