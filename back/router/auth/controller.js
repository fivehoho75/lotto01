export function login(ctx, next) {
    const { provider } = ctx.params;
    ctx.body = provider + ' login!';
}