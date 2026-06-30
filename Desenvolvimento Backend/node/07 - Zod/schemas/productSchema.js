import {z} from "zod";

const productSchema = z.object({
nome: z.string().min(2, "deve ter no minimo 2 caracteres"),
categoria:z.enum(["ferramentas", "materiais", "tintas", "eletronicos", "EPIs"]),
estoque:z.number(),
preco:z.number().positive()
});

export default productSchema;