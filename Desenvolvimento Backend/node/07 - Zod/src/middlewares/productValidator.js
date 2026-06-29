function produtValidator(schema) {
    try {
        const validated = schema.SafeParse(req.body)
        if (!validated.sucess) {
            return res.status(400).json({
                error: validated.error.issues
            })
        }
        next()

    } catch (error) {
        return (req, res) => {
            return res.status(400).json("validação falhou")
        }
    }
}

export default produtValidator 