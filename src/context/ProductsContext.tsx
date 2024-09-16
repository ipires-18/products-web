'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { api } from '@/tools/api';
import { Product, ProductsContextType } from '@/types/pages/home';


const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const fetchProducts = async (page: number = 1, limit: number = 10) => {
    try {
      const response = await api.get('/products', {
        params: {
          page,
          limit,
        }
      });
      setAllProducts(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/products/category');
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  function searchProducts(query: string): void {
    if (query) {
      const filteredProducts = allProducts.filter(produt =>
        produt.title.toLowerCase().includes(query.toLowerCase())
      );


      if (filteredProducts.length > 0) {
        setProducts(filteredProducts);
      } else {
        setProducts([]);
      }
    } else {
      setProducts(allProducts);
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories, setProducts, searchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
