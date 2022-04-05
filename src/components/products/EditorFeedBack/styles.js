import styled from 'styled-components';



const EditorFeedBackStyles  = styled.aside`
    width: 80%;
    margin: 4rem auto 0;
    text-align: center;
`;

const FeedBackMessage = styled.figcaption`
    font-size: 1.75rem;
    font-weight: 600;
    color: #16a34a;
`;

const FeedBack = styled.figure`
margin-bottom: 3rem;
`;

const FeedBackOption = styled.footer`
    button {
        margin: 0.25rem;
        width: fit-content;
    
    }
`;

export {EditorFeedBackStyles, FeedBackMessage, FeedBack, FeedBackOption}