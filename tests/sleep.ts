import { act } from 'react-dom/test-utils';

/**
 * @timeout  睡眠时间
 * @addAct   是否需要被act包裹
 */
export default async (timeout = 0, addAct = true) => {
  addAct !== false
    ? await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, timeout));
      })
    : await new Promise((resolve) => setTimeout(resolve, timeout));
};
