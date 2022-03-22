import styled from 'styled-components'

const LoginPageStyles = styled.section`
    max-width: 400px;
    margin: 0 auto;
    padding-top: 10vh;
  

   h1 {
       font-size: 2.4rem;
       font-weight: bold;
   }

   form {
    padding: 3rem 1rem;
    background-color: lightgray;
    border-radius: 8px;
   }
  

   .login-branding img {
       width: 100%;
    max-width: 15rem;
    display: block;
    margin: 0 auto;
    
   }
   @media (min-width: 750px) {
       max-width: 1000px;
    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        width: 65rem;
        padding: 5rem 3rem;
    }
  
    .login-form-container {
        width: 100%;
        max-width: 350px;
    }

    padding-top: 25vh;
   }
   .recovery-links {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        font-size: 1.6rem;
   }
`;

const FormControl = styled.div`
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    width: 100%;
`;


export {LoginPageStyles, FormControl}