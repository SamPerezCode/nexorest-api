import { app } from "./app";
import { environment } from "./config/env";

app.listen(environment.PORT, () => {
  console.log(
    `nexorest-api ejecutándose en el puerto ${environment.PORT}`
  );
});
