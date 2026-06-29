import express, {json} from "express"
import productController from "./controllers/productController.js";
import productValidator from "./middlewares/productValidator.js";
import productSchema from "./schemas/productSchema.js";
const app = express();
app.use(json())

app.post('/products', productValidator(productSchema), productController)

app.listen(3000, () => {console.log("servidor rodando na porta 3000")})