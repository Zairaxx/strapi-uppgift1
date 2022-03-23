module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '638cd49a06eabc4e0d0c5123a3617811'),
  },
});
