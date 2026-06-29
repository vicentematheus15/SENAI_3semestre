import {z} from zod;

constproduct = z.object({
    nome: z.string().min(2),
    categoria: z.enum(["ferramentas", "materiais", "tintas", "eletronicos", "EPIs"]), 
    estoque: z.number,
    preco: z.Number().positive()
});
