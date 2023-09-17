CREATE TABLE "public"."products" ("id" serial NOT NULL, "name" text NOT NULL, "description" text, "price" numeric NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("name"));
