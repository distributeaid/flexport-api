import { passThrough } from '../transformer/transform'
import { ApiObject } from './ApiObject'
import { Type } from './types'

export type Roadport = ApiObject & {
	/**
	 * String representing the object’s type. Always `/trucking/port` for this object.
	 */
	_object: Type.Roadport

	/**
	 * Port code used by US Customs and Border Protection (US CBP).
	 */
	port_code: string
}

export const toRoadport = (o: ApiObject) => passThrough<Roadport>(o as Roadport)
