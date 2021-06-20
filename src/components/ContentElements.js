import styled from 'styled-components';

export const ContentContainer = styled.div`
  margin: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media screen and (max-width: 768px) {
    margin: 100px;
  }

  @media screen and (max-width: 480px) {
    margin: 75px;
  }
`;

export const ContentH1 = styled.h1`
    margin-bottom: 40px;
    color: #404040;
    font-size: 4rem;
    font-weight: 700;
    text-align: left;

    @media screen and (max-width: 400px) {
        font-size: 25px;
      }
`;

export const ContentH2 = styled.h2`
    margin-top: 30px;
    margin-bottom: 20px;
    color: #404040;
    font-size: 2rem;
    font-weight: 600;
    text-align: left;

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;

export const ContentH3 = styled.h3`
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: left;
    color: var(--satin-sheen-gold);

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;

export const ContentH4 = styled.h4`
    margin-top: 30px;    
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
    color: var(--satin-sheen-gold);

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;

export const ContentP = styled.p`
    margin-bottom: 20px;
    color: #404040;
    font-size: 1.25rem;
    font-weight: 300;
    text-align: justified;
    line-height: 1.8em;

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;

export const ContentUL = styled.ul`
    margin-bottom: 20px;
    color: #404040;
    font-size: 1.25rem;
    font-weight: 300;
    text-align: justified;
    margin-left: 3em;
    line-height: 1.8em;

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;

export const ContentOL = styled.ol`
    margin-bottom: 20px;
    color: #404040;
    font-size: 1.25rem;
    font-weight: 300;
    text-align: justified;
    margin-left: 3em;
    line-height: 1.8em;

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;

export const ContentLI = styled.li`
    margin-bottom: 20px;
    color: #404040;
    font-size: 1.25rem;
    font-weight: 300;
    text-align: justified;

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;