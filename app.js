import express from 'express';

const app = express();
const PORT = 8000;

// middleware incorporado para obtener el body
app.use(express.json());


// realizando la peticion GET como variable para el enunciado 5.1
const middleware_Get = (req, res, next) => {
  res.json({
    id: '6197f7d7c1b2af0dccecdca2',
    name: 'Aldo',
    lastname: 'Campos'
  });
  next();
};

const middleware_Post = (req, res, next) => {
  const { body } = req;
  res.status(201).json({
    message: 'usuario creado',
    userInfo: body
  });
  next();
};



app.get('/users', middleware_Get);

app.post('/users', middleware_Post);


app.listen(PORT, () => {
  console.log(`servidor funcionando en el puerto ${PORT}`);
});