import cors from 'cors';

// Permite qualquer origem em desenvolvimento

const corsConfig = {
    origin: '*', // Em produção, substitua '*' pela URL do front-end
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['contentType', 'Authorization']
};

export default corsConfig;