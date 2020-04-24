/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ContainerCounts } from './ContainerCounts'
import { Address } from './Address'
import { Place } from './Place'
import { Cargo } from './Cargo'
import { Metadata } from './Metadata'
export type BookingAmendment = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.BookingAmendment
	/**
	 * Unique identifier for the booking amendment
	 *
	 * JSON-schema: integer
	 * @example 334455
	 */
	readonly id?: number
	/**
	 * Unique identifier for the booking that this amendment is for
	 *
	 * JSON-schema: integer
	 * @example 2963
	 */
	readonly booking_id?: number
	/**
	 * Depending on various conditions, the requested booking amendment may either be accepted and applied instantly, or it may require Flexport approval. 'is_pending' is set to true if approval is required.
	 *
	 * JSON-schema: boolean
	 */
	readonly is_pending?: boolean
	/**
	 * The requested new name of the booking
	 *
	 * JSON-schema: string
	 * @example "Valentine's Day - 2020"
	 */
	readonly new_name?: string
	/**
	 * The requested new container count values
	 *
	 */
	readonly new_container_counts?: ContainerCounts
	/**
	 * The requested new wants-pickup value
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly new_wants_pickup_service?: boolean
	/**
	 * The requested new origin address
	 *
	 */
	readonly new_origin_address?: Address
	/**
	 * The requested new origin port
	 *
	 */
	readonly new_origin_port?: Place
	/**
	 * The requested new cargo ready date
	 *
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly new_cargo_ready_date?: string
	/**
	 * The requested new cargo, possibly including package details
	 *
	 */
	readonly new_cargo?: Cargo
	/**
	 * The requested new metadata
	 *
	 */
	readonly new_metadata?: Metadata
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftBookingAmendment = (original: BookingAmendment) => {
	return original
}
