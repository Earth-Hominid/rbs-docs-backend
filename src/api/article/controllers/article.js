"use strict";

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::article.article");

// module.exports = createCoreController("api::article.article", ({ strapi }) => ({
//   // Find with populate
//   async find(ctx) {
//     const populateList = ["image", "user"];
//     // Push any additional query params to the array
//     populateList.push(ctx.query.populate);
//     ctx.query.populate = populateList.join(",");
//     // console.log(ctx.query)
//     const content = await super.find(ctx);
//     return content;
//   },
//   // create article
//   async create(ctx) {
//     let entity;
//     ctx.request.body.data.user = ctx.state.user;
//     entity = await super.create(ctx);
//     return entity;
//   },

//   // update article
//   async update(ctx) {
//     let entity;
//     const { id } = ctx.params;
//     const query = {
//       filters: {
//         id: id,
//         user: { id: ctx.state.user.id },
//       },
//     };
//     const articles = await this.find({ query: query });
//     // console.log(articles);
//   },

//   // async me(ctx, next) {
//   //   const user = ctx.state.user;
//   //   if (!user) {
//   //     return ctx.badRequest(null, [
//   //       { messages: [{ id: "No auth header found" }] },
//   //     ]);
//   //   }
//   //   const data = await strapi.entityService.findMany("api::article.article", {
//   //     populate: "image",
//   //     filters: {
//   //       user: {
//   //         id: user.id,
//   //       },
//   //     },
//   //   });
//   //   if (!data) {
//   //     return ctx.notFound();
//   //   }
//   //   const sanitizedEvents = await this.sanitizeOutput(data, ctx);

//   //   return this.transformResponse(sanitizedEvents);
//   // },
//   // async create(ctx) {
//   //   const { id } = ctx.state.user; //ctx.state.user contains the current authenticated user
//   //   const response = await super.create(ctx);
//   //   const updatedResponse = await strapi.entityService.update(
//   //     "api::article.article",
//   //     response.data.id,
//   //     { data: { user: id } }
//   //   );
//   //   return updatedResponse;
//   // },
// }));
