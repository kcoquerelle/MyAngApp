export const SEARCH = "SEARCH";

export function search(research) {
    return { type: SEARCH, research };
}