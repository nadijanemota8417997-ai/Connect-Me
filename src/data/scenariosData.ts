import { Scenario } from '../types';
import { grade5Scenarios } from './scenarios/grade5Scenarios';
import { grade6Scenarios } from './scenarios/grade6Scenarios';
import { grade7Scenarios } from './scenarios/grade7Scenarios';
import { grade8Scenarios } from './scenarios/grade8Scenarios';
import { grade9Scenarios } from './scenarios/grade9Scenarios';
import { SCENARIO_IMAGES_MAP } from './scenarioImages';

// Helper to ensure every scenario has its cover image and media attachment
const enrichScenario = (scenario: Scenario): Scenario => {
  const meta = SCENARIO_IMAGES_MAP[scenario.id];
  if (!meta) return scenario;

  const hasExistingAttachment = scenario.chatMessages.some(m => m.attachment?.imageUrl);

  // If already has attachment with image, just set coverImage
  if (hasExistingAttachment) {
    return {
      ...scenario,
      coverImage: meta.coverUrl,
    };
  }

  // Otherwise, attach image to the first relevant message (or aggressor / first message)
  const updatedMessages = scenario.chatMessages.map((msg, index) => {
    if (index === 0 || msg.isAggressor || msg.isVictim) {
      if (!msg.attachment || !msg.attachment.imageUrl) {
        return {
          ...msg,
          attachment: {
            type: (scenario.platformType === 'instagram' || scenario.platformType === 'tiktok' ? 'post' : 'image') as 'post' | 'image',
            imageUrl: meta.coverUrl,
            content: meta.attachmentTitle,
            caption: meta.attachmentCaption,
          }
        };
      }
    }
    return msg;
  });

  return {
    ...scenario,
    coverImage: meta.coverUrl,
    chatMessages: updatedMessages,
  };
};

export const scenariosData: Scenario[] = [
  ...grade5Scenarios.map(enrichScenario),
  ...grade6Scenarios.map(enrichScenario),
  ...grade7Scenarios.map(enrichScenario),
  ...grade8Scenarios.map(enrichScenario),
  ...grade9Scenarios.map(enrichScenario)
];

export {
  grade5Scenarios,
  grade6Scenarios,
  grade7Scenarios,
  grade8Scenarios,
  grade9Scenarios
};

