import styled from 'styled-components';

export const TestimonialContainer = styled.div`
  margin: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media screen and (max-width: 768px) {
    margin: 100px;
  }

  @media screen and (max-width: 480px) {
    margin: 50px;
  }
`;

export const TestimonialH1 = styled.h1`
    margin-bottom: 60px;
    color: #404040;
    font-size: 4rem;
    font-weight: 700;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const TestimonialQ = styled.h1`
    padding-bottom: 20px;
    color: var(--satin-sheen-gold);
    font-size: 4rem;
    font-weight: 800;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const TestimonialH2 = styled.h2`
    margin-top: 30px;
    margin-bottom: 20px;
    color: var(--satin-sheen-gold);
    font-size: 2rem;
    font-weight: 600;
    text-align: left;

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;

export const TestimonialH3 = styled.h3`
    // margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
    color: var(--satin-sheen-gold);

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;

export const TestimonialH4 = styled.h4`
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

export const TestimonialP = styled.p`
    margin-bottom: 20px;
    color: #404040;
    font-size: 1.25rem;
    font-weight: 300;
    text-align: justified;
    line-height: 1.8em;

    @media screen and (max-width: 400px) {
        font-size: 18px;
        line-height: 1.25em;
      }
`;

export const TestimonialSource = styled.p`
    margin-bottom: 60px;
    color: #404040;
    font-size: 1.25rem;
    font-weight: 200;
    font-style: italic;
    text-align: justified;
    line-height: 1.8em;

    @media screen and (max-width: 400px) {
        font-size: 16px;
      }
`;

export const Logo = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;