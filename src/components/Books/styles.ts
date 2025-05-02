import styled from 'styled-components';

export const BookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 40px;

  & li {
    position: relative;
    width: 250px;
    overflow: hidden;
    cursor: pointer;

    & img {
      width: 250px;
      height: 350px;
    }

    & .book_info {
      position: absolute;
      width: 250px;
      height: 350px;
      background-color: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(5px);
      z-index: 3;
      transition: all 0.3s ease-in-out;
    }

    & .book_description {
      padding: 30px 10px 10px 10px;
      max-height: 100%;
      overflow-y: auto;
      scrollbar-width: none;
      padding-right: 5px;

      &::-webkit-scrollbar {
        display: none;
      }

      & .book_author {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.cardText};
      }

      & .book_title {
        color: ${({ theme }) => theme.colors.cardHeading};
        margin-bottom: 10px;
      }

      & .book_descr {
        color: ${({ theme }) => theme.colors.cardText};
        line-height: 1.4;
      }

      & button {
        margin-top: 8px;
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.cardText};
        text-decoration: underline;
        cursor: pointer;
        padding: 0;
      }
    }

    & .book_nav {
      padding: 5px 10px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      width: 100%;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.text};

      & button {
        color: ${({ theme }) => theme.colors.card};
        background: none;
        border: none;
        cursor: pointer;
      }
    }

    &:hover .book_info {
      transform: translateY(-100%);
    }
  }
`;
