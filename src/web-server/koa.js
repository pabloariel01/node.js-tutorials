import Koa from "koa";

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.type = "application/json";
  await next();
});
app.use(async (ctx, next) => {
  ctx.body = { anem: "john", id: 1 };
});

app.listen(3000, () => {
  console.log("Koa listening on 3000");
});
