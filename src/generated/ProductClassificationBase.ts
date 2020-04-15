/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ProductClassificationBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/product/classification'
	/**
	 * An array of HS codes for this product in the provided region
	 *
	 * JSON-schema: array
	 */
	readonly codes?: string[]
	/**
	 * The region for this classification. Currently only 2-character ISO codes and "EU" are supported
	 *
	 * JSON-schema: string
	 * @example "US"
	 */
	readonly region?: string
}
