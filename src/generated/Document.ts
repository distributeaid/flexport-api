/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { FileMetadata } from './FileMetadata'
import { ShipmentRef } from './ShipmentRef'
export type Document = {
	/**
	 * Type of the object. Always /document for this object.
	 */
	readonly _object: Type.Document
	/**
	 * Unique identifier for the document
	 *
	 * JSON-schema: string (string)
	 */
	readonly id?: string
	/**
	 * Type of the document.
	 *
	 * JSON-schema: string (string)
	 */
	readonly document_type?: string
	/**
	 * The link that can be used to download the file.
	 *
	 * JSON-schema: string (uri)
	 */
	readonly file_link?: string
	/**
	 * Date string this document was archived. Null if not archived.
	 *
	 * JSON-schema: string (string)
	 */
	readonly archived_at?: string
	readonly file_metadata?: FileMetadata
	readonly shipment?: ShipmentRef
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftDocument = (original: Document) => {
	return original
}
