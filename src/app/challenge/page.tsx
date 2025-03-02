import ChallengeView from '@/views/challenge/challenge-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '챌린지',
  description: '챌린지 페이지입니다.',
};

export default function ChallengePage() {
  return <ChallengeView />;
}
