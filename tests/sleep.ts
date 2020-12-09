import { act } from 'react-dom/test-utils';
export default async (timeout = 0) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, timeout));
  });
};
