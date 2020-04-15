import { PlaceBase } from './PlaceBase'
import { BookingHsCodeBase } from './BookingHsCodeBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type AirBookingDetailBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/air/booking'
	/**
	 * JSON-schema: string
	 * @example "FOB"
	 */
	readonly incoterm?:
		| 'EXW'
		| 'FOB'
		| 'FAS'
		| 'FCA'
		| 'CPT'
		| 'CFR'
		| 'CIF'
		| 'CIP'
		| 'DAT'
		| 'DAP'
		| 'DDP'
		| 'DPU'
	/**
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly wants_pickup_service?: boolean
	/**
	 * JSON-schema: boolean
	 */
	readonly wants_delivery_service?: boolean
	readonly origin_port?: PlaceBase
	readonly destination_port?: PlaceBase
	/**
	 * JSON-schema: array
	 */
	readonly product_descriptions?: BookingHsCodeBase[]
}
