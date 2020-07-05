export default <T>(setter: React.Dispatch<React.SetStateAction<T[]>>) => (
  index: number,
  value: T
) =>
  setter((array) => {
    const result = [...array];
    result[index] = value;
    return result;
  });
