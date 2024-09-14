import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  margin: 1rem auto;
  padding: 1rem;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 800px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`

export const Text = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-top: 1rem;
`
