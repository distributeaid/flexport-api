/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShipmentRefBase = {
	readonly _object: '/api/refs/object'
	/**
	 * JSON-schema: string
	 * @example "/shipment"
	 */
	readonly ref_type?: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/shipments/123"
	 */
	readonly link?: string
	/**
	 * JSON-schema: integer
	 * @example 123
	 */
	readonly id?: number
}
