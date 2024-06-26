import styled from 'styled-components'

import {
  UserAddIcon as ICONSUserAddIcon,
  UserIcon as ICONSUserIcon,
} from '~icons'

export const Card = styled.div`
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px 0 rgba(0, 0, 0, 0.02);

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  max-width: 47.75rem;

  padding: 0.75rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgCard};
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

export const Content = styled.div`
  width: 100%;
  flex: 1;
`

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.75rem 0.75rem 0 0.75rem;
  }
`

export const UserAddIcon = styled(ICONSUserAddIcon)`
  flex-shrink: 0;
`

export const UserIcon = styled(ICONSUserIcon)`
  flex-shrink: 0;
`
