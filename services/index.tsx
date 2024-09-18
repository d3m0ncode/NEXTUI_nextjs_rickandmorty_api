const API_URL = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  characters: (numberPage: number) =>
    `${API_URL}/character/?page=${numberPage}`,
  search: (name: string) => `${API_URL}/character/?name=${name}`,
};

export default endPoints;
