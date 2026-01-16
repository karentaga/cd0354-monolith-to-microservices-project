import { Dialect } from 'sequelize';

export const config = {
  username: process.env.POSTGRES_USERNAME as string,
  password: process.env.POSTGRES_PASSWORD as string,
  database: process.env.POSTGRES_DB as string,
  host: process.env.POSTGRES_HOST as string,
  dialect: (process.env.DB_DIALECT || 'postgres') as Dialect,
  aws_region: process.env.AWS_REGION as string,
  aws_profile: process.env.AWS_PROFILE as string,
  aws_media_bucket: process.env.AWS_BUCKET as string,
  url: process.env.URL as string,
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },
};
