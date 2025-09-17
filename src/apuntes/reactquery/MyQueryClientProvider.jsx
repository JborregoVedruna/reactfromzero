import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Product from "./Product"
import InsertProduct from './InsertProduct'

const queryClient = new QueryClient()

const newProduct = {  title: 'test product', 
                      price: 13.5,
                      description: 'lorem ipsum set',
                      image: 'https://i.pravatar.cc',
                      category: 'electronic'
                    }

export default function MyQueryClientProvider() {
    return (
        <QueryClientProvider client={queryClient}>
            <Product id={1}></Product>
            <InsertProduct newProduct={newProduct}></InsertProduct>
        </QueryClientProvider>
    )
}