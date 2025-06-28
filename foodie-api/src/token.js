import jwt from "jsonwebtoken";

const secretToken = "MYSECRET@123";

function CreateJWT(id_usuario) {
    const token = jwt.sign({ id_usuario }, secretToken, {
        expiresIn: 999999
    });

    return token;
}

function ValidateJWT(req, res, next) {

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).send({ error: "Token não informado" });
    }

    const [aux, token] = authToken.split(" ");

    jwt.verify(token, secretToken, (err, decoded) => {
        if (err)
            return res.status(401).send({ error: "Token inválido" });

        // Salva id_usuario dentro da requisicao para ser usado no futuro...
        req.id_usuario = decoded.id_usuario;

        next();
    });
}

export default { CreateJWT, ValidateJWT }