
export const corsConfig = {
    origin: 'http://localhost:3000', // Em produção, substitua '*' pela URL do front-end
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['contentType', 'Authorization']
};

