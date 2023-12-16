import styled from 'styled-components';
import QuestionSection from './QuestionSection';
import AnswerStatusKebab from './AnswerStatusKebab';
import AnswerSection from './AnswerSection';
import Devider from './Devider';
import ReactionButtons from '../ReactionButtons';
import EditContentsButton from '../../answer/EditContentsButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 68.4rem;
  padding: 3.2rem;
  border-radius: 16px;
  background: var(--grayscale-10);
  box-shadow: var(--shadow-1pt);
`;

export default function FeedCard({ question, user }) {
  // console.log(question);
  return (
    <Container>
      <AnswerStatusKebab answer={question.answer} />
      <QuestionSection questionContent={question.content} />
      <AnswerSection answer={question.answer} user={user} />
      <Devider />
      <ReactionButtons like={question.like} dislike={question.dislike} />
      <EditContentsButton />
    </Container>
  );
}
