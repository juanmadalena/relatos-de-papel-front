import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import { BasicLayout } from './layout/BasicLayout.tsx'
import { Home } from './views/Home.tsx'
import { BooksList } from './views/BooksList.tsx'
import { CartProvider } from './context/cartContext/CartContext.tsx'
import { BookProvider } from './context/booksContext/BookContext.tsx'
import { BookDetails } from './views/BookDetails.tsx'
import { Checkout } from './views/Checkout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BookProvider>
        <CartProvider>
          <Routes>
            <Route element={ <BasicLayout />} >
              <Route index element={<Home />} />
              <Route path='books' element={<BooksList />} />
              <Route path='books/:id' element={<BookDetails />} />
              <Route path='checkout' element={<Checkout />} />
            </Route>
          </Routes>
        </CartProvider>
      </BookProvider>
    </BrowserRouter>
  </StrictMode>,
)
