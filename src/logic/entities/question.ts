import {
  complete as completeSelection,
  createGetSelection,
  Selection,
  SelectionItem,
} from './selection';

export interface CombinedQuestion {
  body: string;
  selections: readonly SelectionItem[];
}

export interface Question {
  body: string;
  selection: string;
}

export interface QuestionsSource {
  questions?: readonly Partial<Question>[];
  selections?: readonly Partial<Selection>[];
}

export const completeItem = (source?: Partial<Question>): Question => ({
  body: source?.body ?? '',
  selection: source?.selection ?? '',
});

export const completeSource = (source?: Readonly<QuestionsSource>) => ({
  questions: (source?.questions ?? []).map(completeItem),
  selections: (source?.selections ?? []).map(completeSelection),
});

export const getCombinedQuestions = (source?: Readonly<QuestionsSource>) => {
  const { questions, selections } = completeSource(source);
  const getSelection = createGetSelection(selections);
  return questions.map<CombinedQuestion>(({ body, selection }) => ({
    body,
    selections: getSelection(selection),
  }));
};
