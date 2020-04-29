/**
 * Auto-generated file. Do not change.
 */
import { ClientImplementation } from '../types/Client'
import { ApiPageObject } from '../types/ApiPageObject'
import { BookingAmendment } from './BookingAmendment'
import { liftBookingAmendment } from './BookingAmendment'
import { pipe } from 'fp-ts/lib/pipeable'
import { map } from 'fp-ts/lib/TaskEither'
import { BookingLineItem } from './BookingLineItem'
import { toPage } from '../types/Page'
import { LiftedBookingLineItem } from './BookingLineItem'
import { liftBookingLineItem } from './BookingLineItem'
import { Booking } from './Booking'
import { LiftedBooking } from './Booking'
import { liftBooking } from './Booking'
import { CommercialInvoice } from './CommercialInvoice'
import { LiftedCommercialInvoice } from './CommercialInvoice'
import { liftCommercialInvoice } from './CommercialInvoice'
import { CustomsEntry } from './CustomsEntry'
import { LiftedCustomsEntry } from './CustomsEntry'
import { liftCustomsEntry } from './CustomsEntry'
import { Document } from './Document'
import { LiftedDocument } from './Document'
import { liftDocument } from './Document'
import { WebhookEvent } from './WebhookEvent'
import { LiftedWebhookEvent } from './WebhookEvent'
import { liftWebhookEvent } from './WebhookEvent'
import { Invoice } from './Invoice'
import { LiftedInvoice } from './Invoice'
import { liftInvoice } from './Invoice'
import { Company } from './Company'
import { LiftedCompany } from './Company'
import { liftCompany } from './Company'
import { CompanyEntity } from './CompanyEntity'
import { LiftedCompanyEntity } from './CompanyEntity'
import { liftCompanyEntity } from './CompanyEntity'
import { Contact } from './Contact'
import { LiftedContact } from './Contact'
import { liftContact } from './Contact'
import { Location } from './Location'
import { LiftedLocation } from './Location'
import { liftLocation } from './Location'
import { OceanShipmentContainerLeg } from './OceanShipmentContainerLeg'
import { LiftedOceanShipmentContainerLeg } from './OceanShipmentContainerLeg'
import { liftOceanShipmentContainerLeg } from './OceanShipmentContainerLeg'
import { ShipmentContainer } from './ShipmentContainer'
import { LiftedShipmentContainer } from './ShipmentContainer'
import { liftShipmentContainer } from './ShipmentContainer'
import { Address } from './Address'
import { LiftedAddress } from './Address'
import { liftAddress } from './Address'
import { Product } from './Product'
import { LiftedProduct } from './Product'
import { liftProduct } from './Product'
import { PurchaseOrderLineItem } from './PurchaseOrderLineItem'
import { LiftedPurchaseOrderLineItem } from './PurchaseOrderLineItem'
import { liftPurchaseOrderLineItem } from './PurchaseOrderLineItem'
import { PurchaseOrder } from './PurchaseOrder'
import { LiftedPurchaseOrder } from './PurchaseOrder'
import { liftPurchaseOrder } from './PurchaseOrder'
import { ShipmentLeg } from './ShipmentLeg'
import { LiftedShipmentLeg } from './ShipmentLeg'
import { liftShipmentLeg } from './ShipmentLeg'
import { TransportationMode } from './TransportationMode'
import { ShipmentStatus } from './ShipmentStatus'
import { Shipment } from './Shipment'
import { LiftedShipment } from './Shipment'
import { liftShipment } from './Shipment'
export const flexportApiV2 = (apiClient: ClientImplementation) => {
	const booking_amendment_create = () =>
		pipe(
			apiClient<BookingAmendment>({
				method: 'POST',
				path: '/booking_amendments',
			}),
			map(liftBookingAmendment),
		)
	const booking_line_item_index = (params?: {
		['page']?: number
		['per']?: number
		['sort']?: 'cargo_ready_date' | 'created_at'
		['direction']?: 'asc' | 'desc'
		['f.purchase_order.id']?: number
	}) =>
		pipe(
			apiClient<ApiPageObject<BookingLineItem>>({
				method: 'GET',
				path: '/booking_line_items',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['sort']: params?.['sort'],
						['direction']: params?.['direction'],
						['f.purchase_order.id']: params?.['f.purchase_order.id'],
					},
				},
			}),
			map(toPage<BookingLineItem, LiftedBookingLineItem>(liftBookingLineItem)),
		)
	const booking_line_item_create = () =>
		pipe(
			apiClient<BookingLineItem>({
				method: 'POST',
				path: '/booking_line_items',
			}),
			map(liftBookingLineItem),
		)
	const booking_line_item_show = (params: { ['id']: number }) =>
		pipe(
			apiClient<BookingLineItem>({
				method: 'GET',
				path: '/booking_line_items/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftBookingLineItem),
		)
	const bookings_index = (params?: {
		['page']?: number
		['per']?: number
		['sort']?: 'cargo_ready_date' | 'created_at'
		['direction']?: 'asc' | 'desc'
		['f.status']?: 'booked' | 'submitted'
		['f.shipment.id']?: number
		['f.consignee_entity_ref']?: string
		['f.shipper_entity_ref']?: string
		['f.cargo_ready_date']?: string
		['f.cargo_ready_date.gt']?: string
		['f.cargo_ready_date.gte']?: string
		['f.cargo_ready_date.lt']?: string
		['f.cargo_ready_date.lte']?: string
		['f.created_at']?: string
		['f.created_at.gt']?: string
		['f.created_at.gte']?: string
		['f.created_at.lt']?: string
		['f.created_at.lte']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<Booking>>({
				method: 'GET',
				path: '/bookings',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['sort']: params?.['sort'],
						['direction']: params?.['direction'],
						['f.status']: params?.['f.status'],
						['f.shipment.id']: params?.['f.shipment.id'],
						['f.consignee_entity_ref']: params?.['f.consignee_entity_ref'],
						['f.shipper_entity_ref']: params?.['f.shipper_entity_ref'],
						['f.cargo_ready_date']: params?.['f.cargo_ready_date'],
						['f.cargo_ready_date.gt']: params?.['f.cargo_ready_date.gt'],
						['f.cargo_ready_date.gte']: params?.['f.cargo_ready_date.gte'],
						['f.cargo_ready_date.lt']: params?.['f.cargo_ready_date.lt'],
						['f.cargo_ready_date.lte']: params?.['f.cargo_ready_date.lte'],
						['f.created_at']: params?.['f.created_at'],
						['f.created_at.gt']: params?.['f.created_at.gt'],
						['f.created_at.gte']: params?.['f.created_at.gte'],
						['f.created_at.lt']: params?.['f.created_at.lt'],
						['f.created_at.lte']: params?.['f.created_at.lte'],
						['f.metadata.YOUR_METADATA_KEY']:
							params?.['f.metadata.YOUR_METADATA_KEY'],
					},
				},
			}),
			map(toPage<Booking, LiftedBooking>(liftBooking)),
		)
	const booking_create = () =>
		pipe(
			apiClient<Booking>({ method: 'POST', path: '/bookings' }),
			map(liftBooking),
		)
	const booking_show = (params: { ['id']: number }) =>
		pipe(
			apiClient<Booking>({
				method: 'GET',
				path: '/bookings/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftBooking),
		)
	const commercial_invoices_index = (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: string
		['f.invoice_number']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<CommercialInvoice>>({
				method: 'GET',
				path: '/commercial_invoices',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.shipment.id']: params?.['f.shipment.id'],
						['f.invoice_number']: params?.['f.invoice_number'],
					},
				},
			}),
			map(
				toPage<CommercialInvoice, LiftedCommercialInvoice>(
					liftCommercialInvoice,
				),
			),
		)
	const commercial_invoices_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<CommercialInvoice>({
				method: 'GET',
				path: '/commercial_invoices/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftCommercialInvoice),
		)
	const customs_entry_index = (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<CustomsEntry>>({
				method: 'GET',
				path: '/customs_entries',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.shipment.id']: params?.['f.shipment.id'],
					},
				},
			}),
			map(toPage<CustomsEntry, LiftedCustomsEntry>(liftCustomsEntry)),
		)
	const customs_entries_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<CustomsEntry>({
				method: 'GET',
				path: '/customs_entries/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftCustomsEntry),
		)
	const documents_index = (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: string
		['f.document_type']?: string
		['f.archived_at.exists']?: string
		['f.uploaded_at.gt']?: string
		['f.uploaded_at.lt']?: string
		['f.uploaded_at.gte']?: string
		['f.uploaded_at.lte']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<Document>>({
				method: 'GET',
				path: '/documents',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.shipment.id']: params?.['f.shipment.id'],
						['f.document_type']: params?.['f.document_type'],
						['f.archived_at.exists']: params?.['f.archived_at.exists'],
						['f.uploaded_at.gt']: params?.['f.uploaded_at.gt'],
						['f.uploaded_at.lt']: params?.['f.uploaded_at.lt'],
						['f.uploaded_at.gte']: params?.['f.uploaded_at.gte'],
						['f.uploaded_at.lte']: params?.['f.uploaded_at.lte'],
					},
				},
			}),
			map(toPage<Document, LiftedDocument>(liftDocument)),
		)
	const documents_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<Document>({
				method: 'GET',
				path: '/documents/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftDocument),
		)
	const documents_download = (params: { ['id']: string }) =>
		pipe(
			apiClient<
				| string
				| string
				| string
				| string
				| string
				| string
				| string
				| string
				| string
				| string
				| string
				| string
			>({
				method: 'GET',
				path: '/documents/{id}/download',
				params: { path: { ['id']: params['id'] } },
			}),
			map((res) => {
				return res
			}),
		)
	const events_index = (params?: {
		['f.occurred_at.gte']?: string
		['f.occurred_at.lte']?: string
		['f.data.shipment.id']?: number
		['f.data.resource._object']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<WebhookEvent>>({
				method: 'GET',
				path: '/events',
				params: {
					query: {
						['f.occurred_at.gte']: params?.['f.occurred_at.gte'],
						['f.occurred_at.lte']: params?.['f.occurred_at.lte'],
						['f.data.shipment.id']: params?.['f.data.shipment.id'],
						['f.data.resource._object']: params?.['f.data.resource._object'],
					},
				},
			}),
			map(toPage<WebhookEvent, LiftedWebhookEvent>(liftWebhookEvent)),
		)
	const events_show = () =>
		pipe(
			apiClient<WebhookEvent>({ method: 'GET', path: '/events/:id' }),
			map(liftWebhookEvent),
		)
	const invoice_index = (params?: {
		['page']?: number
		['per']?: number
		['sort']?: 'due_date'
		['direction']?: 'asc' | 'desc'
		['f.status']?: 'outstanding' | 'past_due' | 'void' | 'paid'
		['f.shipment.id']?: number
		['f.billed_directly_to_client']?: boolean
		['f.entity.id']?: number
		['f.entity.ref']?: string
		['f.name']?: string
		['f.issued_at.gt']?: string
		['f.issued_at.lt']?: string
		['f.client_id']?: number
		['f.shipment_id']?: number
	}) =>
		pipe(
			apiClient<ApiPageObject<Invoice>>({
				method: 'GET',
				path: '/invoices',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['sort']: params?.['sort'],
						['direction']: params?.['direction'],
						['f.status']: params?.['f.status'],
						['f.shipment.id']: params?.['f.shipment.id'],
						['f.billed_directly_to_client']:
							params?.['f.billed_directly_to_client'],
						['f.entity.id']: params?.['f.entity.id'],
						['f.entity.ref']: params?.['f.entity.ref'],
						['f.name']: params?.['f.name'],
						['f.issued_at.gt']: params?.['f.issued_at.gt'],
						['f.issued_at.lt']: params?.['f.issued_at.lt'],
						['f.client_id']: params?.['f.client_id'],
						['f.shipment_id']: params?.['f.shipment_id'],
					},
				},
			}),
			map(toPage<Invoice, LiftedInvoice>(liftInvoice)),
		)
	const invoices_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<Invoice>({
				method: 'GET',
				path: '/invoices/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftInvoice),
		)
	const network_company_index = (params?: {
		['page']?: number
		['per']?: number
		['f.ref']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<Company>>({
				method: 'GET',
				path: '/network/companies',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.ref']: params?.['f.ref'],
						['f.metadata.YOUR_METADATA_KEY']:
							params?.['f.metadata.YOUR_METADATA_KEY'],
					},
				},
			}),
			map(toPage<Company, LiftedCompany>(liftCompany)),
		)
	const network_company_create = () =>
		pipe(
			apiClient<Company>({ method: 'POST', path: '/network/companies' }),
			map(liftCompany),
		)
	const network_company_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<Company>({
				method: 'GET',
				path: '/network/companies/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftCompany),
		)
	const network_company_update = (params: { ['id']: string }) =>
		pipe(
			apiClient<Company>({
				method: 'PATCH',
				path: '/network/companies/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftCompany),
		)
	const company_entity_index = (params?: {
		['page']?: number
		['per']?: number
		['f.ref']?: string
		['f.company_id']?: string
		['f.company_ref']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<CompanyEntity>>({
				method: 'GET',
				path: '/network/company_entities',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.ref']: params?.['f.ref'],
						['f.company_id']: params?.['f.company_id'],
						['f.company_ref']: params?.['f.company_ref'],
					},
				},
			}),
			map(toPage<CompanyEntity, LiftedCompanyEntity>(liftCompanyEntity)),
		)
	const network_company_entity_create = () =>
		pipe(
			apiClient<CompanyEntity>({
				method: 'POST',
				path: '/network/company_entities',
			}),
			map(liftCompanyEntity),
		)
	const network_company_entity_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<CompanyEntity>({
				method: 'GET',
				path: '/network/company_entities/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftCompanyEntity),
		)
	const network_company_entity_update = (params: { ['id']: string }) =>
		pipe(
			apiClient<CompanyEntity>({
				method: 'PATCH',
				path: '/network/company_entities/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftCompanyEntity),
		)
	const network_contact_index = (params?: {
		['page']?: number
		['per']?: number
		['f.company_ref']?: string
		['f.company.id']?: string
		['f.location.id']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<Contact>>({
				method: 'GET',
				path: '/network/contacts',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.company_ref']: params?.['f.company_ref'],
						['f.company.id']: params?.['f.company.id'],
						['f.location.id']: params?.['f.location.id'],
					},
				},
			}),
			map(toPage<Contact, LiftedContact>(liftContact)),
		)
	const network_contact_create = () =>
		pipe(
			apiClient<Contact>({ method: 'POST', path: '/network/contacts' }),
			map(liftContact),
		)
	const network_contact_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<Contact>({
				method: 'GET',
				path: '/network/contacts/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftContact),
		)
	const network_contact_update = (params: { ['id']: string }) =>
		pipe(
			apiClient<Contact>({
				method: 'PATCH',
				path: '/network/contacts/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftContact),
		)
	const location_index = (params?: {
		['page']?: number
		['per']?: number
		['f.ref']?: string
		['f.company_ref']?: string
		['f.company.id']?: string
		['f.contact.id']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<Location>>({
				method: 'GET',
				path: '/network/locations',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.ref']: params?.['f.ref'],
						['f.company_ref']: params?.['f.company_ref'],
						['f.company.id']: params?.['f.company.id'],
						['f.contact.id']: params?.['f.contact.id'],
						['f.metadata.YOUR_METADATA_KEY']:
							params?.['f.metadata.YOUR_METADATA_KEY'],
					},
				},
			}),
			map(toPage<Location, LiftedLocation>(liftLocation)),
		)
	const network_location_create = () =>
		pipe(
			apiClient<Location>({ method: 'POST', path: '/network/locations' }),
			map(liftLocation),
		)
	const network_location_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<Location>({
				method: 'GET',
				path: '/network/locations/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftLocation),
		)
	const location_update = (params: { ['id']: string }) =>
		pipe(
			apiClient<Location>({
				method: 'PATCH',
				path: '/network/locations/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftLocation),
		)
	const network_company_me = () =>
		pipe(
			apiClient<Company>({ method: 'GET', path: '/network/me/companies' }),
			map(liftCompany),
		)
	const ocean_shipment_legs_index = (params?: {
		['page']?: number
		['per']?: number
		['f.leg.id']?: number
		['f.shipment_container.id']?: number
		['f.shipment_container.container_number']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<OceanShipmentContainerLeg>>({
				method: 'GET',
				path: '/ocean/shipment_container_legs',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.leg.id']: params?.['f.leg.id'],
						['f.shipment_container.id']: params?.['f.shipment_container.id'],
						['f.shipment_container.container_number']:
							params?.['f.shipment_container.container_number'],
					},
				},
			}),
			map(
				toPage<OceanShipmentContainerLeg, LiftedOceanShipmentContainerLeg>(
					liftOceanShipmentContainerLeg,
				),
			),
		)
	const ocean_shipment_legs_show = () =>
		pipe(
			apiClient<OceanShipmentContainerLeg>({
				method: 'GET',
				path: '/ocean/shipment_container_legs/:id',
			}),
			map(liftOceanShipmentContainerLeg),
		)
	const container_list = (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: number
		['f.container_number']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<ShipmentContainer>>({
				method: 'GET',
				path: '/ocean/shipment_containers',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.shipment.id']: params?.['f.shipment.id'],
						['f.container_number']: params?.['f.container_number'],
						['f.metadata.YOUR_METADATA_KEY']:
							params?.['f.metadata.YOUR_METADATA_KEY'],
					},
				},
			}),
			map(
				toPage<ShipmentContainer, LiftedShipmentContainer>(
					liftShipmentContainer,
				),
			),
		)
	const container_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<ShipmentContainer>({
				method: 'GET',
				path: '/ocean/shipment_containers/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftShipmentContainer),
		)
	const ports_index = (params?: {
		['page']?: number
		['per']?: number
		['f.port_type']?: 'airport' | 'railport' | 'roadport' | 'seaport'
		['f.unlocode']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<Address>>({
				method: 'GET',
				path: '/ports',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.port_type']: params?.['f.port_type'],
						['f.unlocode']: params?.['f.unlocode'],
					},
				},
			}),
			map(toPage<Address, LiftedAddress>(liftAddress)),
		)
	const product_index = (params?: {
		['f.sku']?: string
		['f.archived_at.exists']?: boolean
		['f.product_properties.TYPE']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<Product>>({
				method: 'GET',
				path: '/products',
				params: {
					query: {
						['f.sku']: params?.['f.sku'],
						['f.archived_at.exists']: params?.['f.archived_at.exists'],
						['f.product_properties.TYPE']:
							params?.['f.product_properties.TYPE'],
					},
				},
			}),
			map(toPage<Product, LiftedProduct>(liftProduct)),
		)
	const product_create = () =>
		pipe(
			apiClient<Product>({ method: 'POST', path: '/products' }),
			map(liftProduct),
		)
	const product_show = (params: { ['id']: string }) =>
		pipe(
			apiClient<Product>({
				method: 'GET',
				path: '/products/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftProduct),
		)
	const product_update = (params: { ['id']: string }) =>
		pipe(
			apiClient<Product>({
				method: 'PATCH',
				path: '/products/{id}',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftProduct),
		)
	const purchase_order_line_item_index = (params?: {
		['page']?: number
		['per']?: number
		['sort']?: 'cargo_ready_date' | 'created_at'
		['direction']?: 'asc' | 'desc'
		['f.purchase_order.id']?: number
		['f.line_item_number']?: string
		['f.item_key']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<PurchaseOrderLineItem>>({
				method: 'GET',
				path: '/purchase_order_line_items',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['sort']: params?.['sort'],
						['direction']: params?.['direction'],
						['f.purchase_order.id']: params?.['f.purchase_order.id'],
						['f.line_item_number']: params?.['f.line_item_number'],
						['f.item_key']: params?.['f.item_key'],
					},
				},
			}),
			map(
				toPage<PurchaseOrderLineItem, LiftedPurchaseOrderLineItem>(
					liftPurchaseOrderLineItem,
				),
			),
		)
	const purchase_order_line_item_show = (params: { ['id']: number }) =>
		pipe(
			apiClient<PurchaseOrderLineItem>({
				method: 'GET',
				path: '/purchase_order_line_items/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftPurchaseOrderLineItem),
		)
	const purchase_order_index = (params?: {
		['page']?: number
		['per']?: number
		['sort']?: 'id'
		['direction']?: 'asc' | 'desc'
		['f.archived_at.exists']?: boolean
		['f.status']?: 'open' | 'closed' | 'cancelled'
		['f.buyer_ref']?: string
		['f.seller_ref']?: string
		['f.role']?: 'buyer' | 'seller'
		['f.shipment.id']?: number
		['f.name']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<PurchaseOrder>>({
				method: 'GET',
				path: '/purchase_orders',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['sort']: params?.['sort'],
						['direction']: params?.['direction'],
						['f.archived_at.exists']: params?.['f.archived_at.exists'],
						['f.status']: params?.['f.status'],
						['f.buyer_ref']: params?.['f.buyer_ref'],
						['f.seller_ref']: params?.['f.seller_ref'],
						['f.role']: params?.['f.role'],
						['f.shipment.id']: params?.['f.shipment.id'],
						['f.name']: params?.['f.name'],
					},
				},
			}),
			map(toPage<PurchaseOrder, LiftedPurchaseOrder>(liftPurchaseOrder)),
		)
	const purchase_order_show = (params: { ['id']: number }) =>
		pipe(
			apiClient<PurchaseOrder>({
				method: 'GET',
				path: '/purchase_orders/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftPurchaseOrder),
		)
	const shipment_leg_index = (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: number
		['f.transportation_mode']?: number
	}) =>
		pipe(
			apiClient<ApiPageObject<ShipmentLeg>>({
				method: 'GET',
				path: '/shipment_legs',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['f.shipment.id']: params?.['f.shipment.id'],
						['f.transportation_mode']: params?.['f.transportation_mode'],
					},
				},
			}),
			map(toPage<ShipmentLeg, LiftedShipmentLeg>(liftShipmentLeg)),
		)
	const shipment_leg_show = () =>
		pipe(
			apiClient<ShipmentLeg>({ method: 'GET', path: '/shipment_legs/:id' }),
			map(liftShipmentLeg),
		)
	const shipment_index = (params?: {
		['page']?: number
		['per']?: number
		['sort']?: 'id' | 'transportation_mode' | 'status' | 'updated_at'
		['direction']?: 'asc' | 'desc'
		['f.transportation_mode']?: TransportationMode
		['f.status']?: ShipmentStatus
		['f.statuses.any']?: ShipmentStatus
		['f.container_number']?: string
		['f.purchase_order']?: string
		['f.sku']?: string
		['f.updated_at.gt']?: string
		['f.updated_at.lt']?: string
		['f.master_bill_number']?: string
		['f.house_bill_number']?: string
		['f.consignee_external_ref']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) =>
		pipe(
			apiClient<ApiPageObject<Shipment>>({
				method: 'GET',
				path: '/shipments',
				params: {
					query: {
						['page']: params?.['page'],
						['per']: params?.['per'],
						['sort']: params?.['sort'],
						['direction']: params?.['direction'],
						['f.transportation_mode']: params?.['f.transportation_mode'],
						['f.status']: params?.['f.status'],
						['f.statuses.any']: params?.['f.statuses.any'],
						['f.container_number']: params?.['f.container_number'],
						['f.purchase_order']: params?.['f.purchase_order'],
						['f.sku']: params?.['f.sku'],
						['f.updated_at.gt']: params?.['f.updated_at.gt'],
						['f.updated_at.lt']: params?.['f.updated_at.lt'],
						['f.master_bill_number']: params?.['f.master_bill_number'],
						['f.house_bill_number']: params?.['f.house_bill_number'],
						['f.consignee_external_ref']: params?.['f.consignee_external_ref'],
						['f.metadata.YOUR_METADATA_KEY']:
							params?.['f.metadata.YOUR_METADATA_KEY'],
					},
				},
			}),
			map(toPage<Shipment, LiftedShipment>(liftShipment)),
		)
	const shipment_show = (params: { ['id']: number }) =>
		pipe(
			apiClient<Shipment>({
				method: 'GET',
				path: '/shipments/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftShipment),
		)
	const shipment_update = (params: { ['id']: number }) =>
		pipe(
			apiClient<Shipment>({
				method: 'PATCH',
				path: '/shipments/:id',
				params: { path: { ['id']: params['id'] } },
			}),
			map(liftShipment),
		)
	return {
		/**
		 * Create and return a booking amendment - a request to change an existing booking.
		 *
		 * Returns:
		 * - for status code 200: The created booking amendment
		 * FIXME: Implement request body handling
		 */
		booking_amendment_create,
		/**
		 * List all booking line items
		 *
		 * Returns a list of booking line items
		 *
		 * Returns:
		 * - for status code 200: collection of booking line items
		 */
		booking_line_item_index,
		/**
		 * Create a booking line item
		 *
		 * Creates and returns a booking line item
		 *
		 * Returns:
		 * - for status code 200: The created booking line item
		 * FIXME: Implement request body handling
		 */
		booking_line_item_create,
		/**
		 * Retrieves the details of a single booking line item.
		 *
		 * Returns a list of booking line items
		 *
		 * Returns:
		 * - for status code 200: A collection of booking line items
		 */
		booking_line_item_show,
		/**
		 * List all bookings
		 *
		 * Returns a list of bookings.
		 *
		 * Returns:
		 * - for status code 200: collection of bookings
		 */
		bookings_index,
		/**
		 * Create and return a booking
		 *
		 * Returns:
		 * - for status code 200: The created booking
		 * FIXME: Implement request body handling
		 */
		booking_create,
		/**
		 * Retrieve a booking
		 *
		 * Retrieves the details of a single booking.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		booking_show,
		/**
		 * List commercial invoices
		 *
		 * Returns a list of commercial invoices.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		commercial_invoices_index,
		/**
		 * Retrieve a commercial invoice
		 *
		 * Retrieves the details of a single commercial invoice.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		commercial_invoices_show,
		/**
		 * List customs entry objects
		 *
		 * Returns a list of customs entries.
		 *
		 * Returns:
		 * - for status code 200: collection of customs entries
		 */
		customs_entry_index,
		/**
		 * Retrieve a customs entry
		 *
		 * Retrieves the details of a single customs entry.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		customs_entries_show,
		/**
		 * List document objects
		 *
		 * Returns a list of all documents associated with shipments.
		 *
		 * Returns:
		 * - for status code 200: collection of documents
		 */
		documents_index,
		/**
		 * Retrieve a document
		 *
		 * Retrieves the details of a single document.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		documents_show,
		/**
		 * Download a document
		 *
		 * Retrieves the contents of a specified file. Returns the file as a stream of bytes.
		 *
		 * Returns:
		 * - for status code 200: Success
		 * FIXME: Only the first response type is handled
		 */
		documents_download,
		/**
		 * List all webhook events
		 *
		 * Returns a list of all events delivered to any webhook registered by this client
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		events_index,
		/**
		 * Retrieve a single webhook event
		 *
		 * Returns the webhook event with ID ":id"
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		events_show,
		/**
		 * List all invoices
		 *
		 * Returns a list of invoices.
		 *
		 * Returns:
		 * - for status code 200: collection of invoices
		 */
		invoice_index,
		/**
		 * Retrieve an invoice
		 *
		 * Retrieves the details of a single invoice
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		invoices_show,
		/**
		 * List company objects
		 *
		 * Returns a list of companies in the network.
		 *
		 * Returns:
		 * - for status code 200: collection of companies
		 */
		network_company_index,
		/**
		 * Create a new company object
		 *
		 * Returns:
		 * - for status code 200: The created company
		 * FIXME: Implement request body handling
		 */
		network_company_create,
		/**
		 * Retrieve a company
		 *
		 * Retrieves the details of a single company.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		network_company_show,
		/**
		 * Update an existing company
		 *
		 * Returns:
		 * - for status code 200: The updated company
		 * FIXME: Implement request body handling
		 */
		network_company_update,
		/**
		 * List of company entity objects
		 *
		 * Returns a list of the company entity objects in the network.
		 *
		 * Returns:
		 * - for status code 200: collection of company entities
		 */
		company_entity_index,
		/**
		 * Create and return a new company entity
		 *
		 * Returns:
		 * - for status code 200: The created company entity
		 * FIXME: Implement request body handling
		 */
		network_company_entity_create,
		/**
		 * Retrieve a company entity
		 *
		 * Retrieves the details of a single company entity
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		network_company_entity_show,
		/**
		 * Update a company entity
		 *
		 * Returns:
		 * - for status code 200: Success
		 * FIXME: Implement request body handling
		 */
		network_company_entity_update,
		/**
		 * List contact objects
		 *
		 * Returns a list of contacts in the network.
		 *
		 * Returns:
		 * - for status code 200: collection of contacts
		 */
		network_contact_index,
		/**
		 * Create a new contact object
		 *
		 * Returns:
		 * - for status code 200: The created contact
		 * FIXME: Implement request body handling
		 */
		network_contact_create,
		/**
		 * Retrieve a contact
		 *
		 * Retrieves the details of a single contact.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		network_contact_show,
		/**
		 * Update an existing contact
		 *
		 * Returns:
		 * - for status code 200: The updated contact
		 * FIXME: Implement request body handling
		 */
		network_contact_update,
		/**
		 * List of location objects
		 *
		 * Returns a list of location objects in the network.
		 *
		 * Returns:
		 * - for status code 200: collection of locations
		 */
		location_index,
		/**
		 * Create and return a new location
		 *
		 * Returns:
		 * - for status code 200: The created location
		 * FIXME: Implement request body handling
		 */
		network_location_create,
		/**
		 * Retrieve a location by id
		 *
		 * Retrieves the details of a single location
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		network_location_show,
		/**
		 * Update a network location
		 *
		 * Returns:
		 * - for status code 200: Success
		 * FIXME: Implement request body handling
		 */
		location_update,
		/**
		 * Retrieve your company
		 *
		 * Retrieves the details of your own organization.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		network_company_me,
		/**
		 * List all containers.
		 *
		 * Returns a list of containers. The containers are sorted descending by creation date.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		ocean_shipment_legs_index,
		/**
		 * Retrieve a shipment leg
		 *
		 * Returns a list of containers. The containers are sorted descending by creation date.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		ocean_shipment_legs_show,
		/**
		 * List all containers.
		 *
		 * Returns a list of containers. The containers are sorted descending by creation date.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		container_list,
		/**
		 * Retrieve a container.
		 *
		 * Retrieves the details of a single container.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		container_show,
		/**
		 * List of ports
		 *
		 * Returns:
		 * - for status code 200: collection of ports
		 */
		ports_index,
		/**
		 * List all products for a client
		 *
		 * Returns a list of all products belonging to this client
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		product_index,
		/**
		 * Create a product
		 *
		 * Create a new product for this client using the request payload
		 *
		 * Returns:
		 * - for status code 200: Created
		 * FIXME: Implement request body handling
		 */
		product_create,
		/**
		 * Retrieve a single product
		 *
		 * Returns the client's product with this ID
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		product_show,
		/**
		 * Update a product
		 *
		 * Update this product to represent the request payload
		 *
		 * Returns:
		 * - for status code 200: Updated
		 * FIXME: Implement request body handling
		 */
		product_update,
		/**
		 * List all purchase order line items
		 *
		 * Returns a list of purchase order line items
		 *
		 * Returns:
		 * - for status code 200: collection of purchase order line items
		 */
		purchase_order_line_item_index,
		/**
		 * Retrieve a purchase order line item
		 *
		 * Returns the details of a purchase order line item
		 *
		 * Returns:
		 * - for status code 200: collection of purchase order line items
		 */
		purchase_order_line_item_show,
		/**
		 * List all purchase orders
		 *
		 * Returns a list of purchase orders
		 *
		 * Returns:
		 * - for status code 200: collection of purchase orders
		 */
		purchase_order_index,
		/**
		 * Retrieve a purchase order
		 *
		 * Retrieves the details of a single purchase order.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		purchase_order_show,
		/**
		 * List all shipment route legs
		 *
		 * Returns a list of shipment route legs. The legs are sorted descending by creation date.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		shipment_leg_index,
		/**
		 * Retrieve a shipment route leg
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		shipment_leg_show,
		/**
		 * List all shipments
		 *
		 * Returns a list of shipments.
		 *
		 * Returns:
		 * - for status code 200: collection of shipments
		 */
		shipment_index,
		/**
		 * Retrieve a shipment
		 *
		 * Retrieves the details of a single shipment.
		 *
		 * Returns:
		 * - for status code 200: Success
		 */
		shipment_show,
		/**
		 * Update an existing shipment
		 *
		 * Returns:
		 * - for status code 200: The updated shipment
		 * FIXME: Implement request body handling
		 */
		shipment_update,
	}
}
