"use strict";

module.exports = async (policyCtx, config, { strapi }) => {
  // get user id/record to update/delete.
  const { id: userId } = policyCtx.state.user;

  const { id: articleId } = policyCtx.request.params;

  strapi.log.info("In is-owner policy.");

  const [article] = await strapi.entityService.findMany(
    "api::article.article",
    {
      filters: {
        id: articleId,
        user: userId,
      },
    }
  );
  // we have an article owned by the authenticated user
  if (article) {
    return true;
  }

  // we don't have an article owned by the user.
  return false;
};
