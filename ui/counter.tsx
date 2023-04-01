import { useUnit } from 'effector-react';

import { $count, $serverCount, up } from '#/model/count';

export function Counter() {
  const { count, serverCount, countUp } = useUnit({
    count: $count,
    serverCount: $serverCount,
    countUp: up,
  });

  return (
    <div style={{ color: 'white' }}>
      <div>
        <button>Server count is {serverCount}</button>
      </div>
      <div>
        <button onClick={countUp}>Client count is {count}</button>
      </div>
    </div>
  );
}
