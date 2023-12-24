import express from "express";
const router = express.Router();

router.get('/roll/:id', (req, res) => {
    const {id} = req.params
    res.send("student "+id);
});
router.post('/post', (req, res) => res.send('create new student'));
router.put('/put', (req, res) => res.send('update student'));
router.delete('/delete', (req, res) => res.send('delete student'));
export default router;
