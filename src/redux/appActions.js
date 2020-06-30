
/*
 * action types
 */
export const CHANGE_HEADER = 'CHANGE_HEADER';

/*
 * action creators
 */
export function changeHeader(headerAppearance = {} ) {
  return { type: CHANGE_HEADER, headerAppearance }
}