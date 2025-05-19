'use client'

import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body { 
		font-family: Inter, sans-serif;
		background: #f7f7f7;
	}
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  min-height: 100vh;
  padding: 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`
