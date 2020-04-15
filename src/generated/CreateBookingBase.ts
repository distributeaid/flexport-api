import { CreateOceanBookingBase } from './CreateOceanBookingBase'
import { CreateAirBookingBase } from './CreateAirBookingBase'
import { CreateTruckingBookingBase } from './CreateTruckingBookingBase'
import { CargoBase } from './CargoBase'
import { MetadataBase } from './MetadataBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CreateBookingBase = {
	/**
	 * Always required. Name of the booking.
	 *
	 * JSON-schema: string
	 * @example "PO 123"
	 */
	readonly name: string
	/**
	 * Always required. Customizable reference ID of company entity that is the shipper of the booking.
	 *
	 * JSON-schema: string
	 * @example "shipper_company_name_ltd"
	 */
	readonly shipper_entity_ref: string
	/**
	 * Always required. Customizable reference ID of company entity that is the consignee of the booking.
	 *
	 * JSON-schema: string
	 * @example "consignee_company_name_llc"
	 */
	readonly consignee_entity_ref: string
	/**
	 * Optional. Name and address of company that is the notify party of the booking. If null, then this is the same as consignee.
	 *
	 * JSON-schema: string
	 */
	readonly notify_party?: string
	readonly ocean_booking?: CreateOceanBookingBase
	readonly air_booking?: CreateAirBookingBase
	readonly trucking_booking?: CreateTruckingBookingBase
	/**
	 * Always required. Customizable reference ID of network location that is the pickup location.
	 *
	 * JSON-schema: string
	 * @example "id-123456"
	 */
	readonly origin_address_ref: string
	/**
	 * Always required for trucking bookings. Always required for air and ocean bookings if `wants_delivery_service` is TRUE. Customizable reference ID of network location that is the delivery location.
	 *
	 * JSON-schema: string
	 * @example "id-123456"
	 */
	readonly destination_address_ref: string
	/**
	 * Always required. Date when cargo is ready for pickup at the origin location.
	 *
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly cargo_ready_date: string
	/**
	 * Optional. Target date by when cargo must be delivered.
	 *
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly delivery_date?: string
	/**
	 * Always required. Whether the booking requires Flexport to provide export customs services.
	 *
	 * JSON-schema: boolean
	 */
	readonly wants_export_customs_service?: boolean
	readonly cargo: CargoBase
	/**
	 * Additional instructions not included in rest of booking form.
	 *
	 * JSON-schema: string
	 * @example "Please book 40ft reefer container."
	 */
	readonly special_instructions?: string
	readonly metadata?: MetadataBase
}
