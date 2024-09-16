export interface Product {
  id: number
  title: string
  image: string
  price: number
  description: string
  brand: string
  model: string
  color: string
  category: string
  discount: number
}

export interface ApiResponseProducts {
  status: string
  message: string
  products: Product[]
}

export interface ApiCategoryResponse {
  status: 'SUCCESS' | 'ERROR';
  message: string;
  categories: string[];
}

export interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  categories: string[];
  searchProducts(query: string): void
  // currentPage:number,
  // handlePageChange:(page: number) => void
  // totalPages:number
}
