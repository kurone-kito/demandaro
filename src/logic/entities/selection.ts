export interface Selection<T extends Partial<SelectionItem> = SelectionItem> {
  id: string;
  selection: readonly T[];
}

export interface SelectionItem {
  body: string;
  score: number;
}

export const isCompleteItem = (
  source?: Partial<SelectionItem>
): source is SelectionItem =>
  typeof source?.body === 'string' && typeof source?.score === 'number';

export const complete = (
  source?: Partial<Selection<Partial<SelectionItem>>>
): Selection => ({
  id: source?.id ?? '',
  selection: source?.selection?.filter(isCompleteItem) ?? [],
});

export const createGetSelection = (source: readonly Selection[]) => (
  selection: string
) => source.find(({ id }) => selection === id)?.selection ?? [];

export const createGetTotalScore = (
  source: readonly (readonly SelectionItem[])[]
) => (scores: readonly number[]) =>
  source.reduce((acc, __, index) => acc + (scores[index] ?? 0), 0);
