export const getIdFromSlug = (slug: string): number | string => {
  /**
   * Extracts the ID from a slug in the format '[id]--[slug]'
   *
   * @param slug - The slug string in the format 'id--slug-text'
   * @returns The ID as a number
   * @throws Error if the slug doesn't contain '--' or the ID part isn't a valid number
   */
  if (!slug.includes("--")) {
    throw new Error(
      `Invalid slug format: "${slug}". Expected format "id--slug"`
    );
  }

  const idPart = slug.split("--")[0];
  const id = Number(idPart);

  if (isNaN(id)) {
    return idPart;
  }

  return id;
};
