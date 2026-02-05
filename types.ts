export interface CharacterProfile {
  name: {
    ko: string;
    hanja: string;
  };
  quote: {
    text: string;
    source: string;
  };
  basicInfo: {
    age: string;
    gender: string;
    birth: string;
    job: string;
    nationality: string;
    bloodType: string;
    physique: string;
  };
  appearance: {
    features: string[];
    attire: string[];
    items: string[];
    perfume: string;
  };
  personality: {
    mbti: string;
    enneagram: string;
    keywords: string[];
    likes: string[];
    dislikes: string[];
    hobbies: string[];
    habits: string[];
  };
  background: {
    world: string;
    organization: string;
    history: string[];
  };
  combat: {
    weapons: string;
    skills: string[];
  };
  others: string[]; // New field for miscellaneous traits
  relationships: {
    desc: string[];
    npcs: { name: string; desc: string }[];
  };
  dialogue: {
    voice: string;
    tone: string;
    examples: { situation: string; line: string }[];
  };
  secrets: string[]; // These will be redacted
}
