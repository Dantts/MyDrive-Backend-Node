import 'dotenv/config';

import { app } from './app';

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server listening on http://${process.env.SERVER_URL}:${process.env.SERVER_PORT}`
  );
});
