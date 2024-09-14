import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`

export const TextBack = styled.span`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  z-index: 10;

  text-decoration: none;
  text-transform: none;
`

export const ContentImg = styled.section`
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  height: 100%;

  img {
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
    object-fit: cover;
    mix-blend-mode: multiply;
  }
`

export const Content = styled.section`
  padding: 2rem;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 5rem;
  color: #333;
`

export const ProductDetails = styled.div`
  width: 100%;
`

export const ProductDetail = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #555;
`

export const PopularLabel = styled.p`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #ffcc00;
  color: #333;
  border-radius: 5px;
  font-weight: bold;
`
